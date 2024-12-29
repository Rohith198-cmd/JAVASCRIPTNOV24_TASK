const apikey="73b40e34e5e5b0bdfe1a83bb2921d48b"
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

//iam getting class name in html document  to do script processs
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const icon=document.querySelector(".weather-icon")
const today=document.getElementById("date")
const months=document.getElementById("month")
const year=document.getElementById("year")
const day=document.querySelector(".day")


//DATE FIELD
const date =new Date()
console.log(date);
today.innerHTML=date.getDate()+" :"
const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(weekdays);
day.innerHTML=weekdays[date.getDay()] 
months.innerHTML=date.getMonth()+1+" :"
year.innerHTML=date.getFullYear()

//async and await 
async function checkWeather(city){
    try{
        const get=await fetch(apiurl +city+ `&appid=${apikey}`)
        if(get.status!==200)throw new Error('Invalid API  call')
        const data=await get.json()
    
    
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    
    // icon.src="./assessts img/clouds.png"
    icon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    }catch{
       if(searchbox.value===""){
        alert("you must type location")
       }
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
})
