// console.log("Jai shree Ram")
// setTimeout(()=>{
// document.querySelector('h1').style.color="orange"
// },2000)


//classes Selection 
const userContainer=document.querySelector(".weather-container")
const granLocation=document.querySelector(".grant-location-container")
const loadingScreen = document.querySelector(".loading-container")
const ParameterContainer=document.querySelector(".parameter-container")
const userInfoContainer=document.querySelector(".user-info-container")
const TabContainer=document.querySelector(".tab-container")



//Attributes Selection

const userTab =document.querySelector("[data-userWeather]")
const searchTab =document.querySelector("[data-searchWeather]")
const searchForm = document.querySelector("[data-searchForm]")
const GrantAcess=document.querySelector("[data-grant-access]")
const searchCity=document.querySelector("[data-searchForm]")
const messageText = document.querySelector("[data-messageText]");
let  searchInput=document.querySelector("[data-searchInput]")

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
  
    video.addEventListener('ended', function() {
      this.currentTime = 0; // Reset the playback to the beginning
      this.play(); // Play the video again
    });
  });

let currentTab=userTab
const API_KEY="234614f14482a11687adae7a419c9c4a"
currentTab.classList.add("current-tab")
getfromSessionStorage();

// checks whether the coordinates are present in the storage
function getfromSessionStorage(){
const localCoordinates=sessionStorage.getItem("user-coordinates")
if(!localCoordinates){
    granLocation.classList.add("active")
}
else{
    const coordinates=JSON.parse(localCoordinates)
    fetchUserWeatherInfo(coordinates)
}
}
function switchTab(clickedTab){
    if(clickedTab!=currentTab){
        currentTab.classList.remove("current-tab")
        currentTab=clickedTab
        currentTab.classList.add("current-tab")
    }
    if(!searchForm.classList.contains("active")){
        userInfoContainer.classList.remove("active")
        granLocation.classList.remove("active")
        searchForm.classList.add("active")
    }
    else{
        searchForm.classList.remove("active")
        userInfoContainer.classList.remove("active")
        getfromSessionStorage()

    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat,lon}=coordinates
    // make grant container invisible
    // make loader visible
    granLocation.classList.remove("active")
    loadingScreen.classList.add("active")
    try{
        const res=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        const data = await res.json()
        loadingScreen.classList.remove("active")
        userInfoContainer.classList.add("active")
        renderWeatherInfo(data)


    }
    catch(error){
       console.log('An error occured : ' + error)
       throw error;
    }

}

function renderWeatherInfo(Weatherdata){
    const CityName=document.querySelector("[data-cityName]")
    const countryIcon=document.querySelector("[data-countryIcon]")
    const weatherDesc=document.querySelector("[ data-weatherDesc]")
    const weatherIcon=document.querySelector("[data-weatherIcon]")
    const Temperature=document.querySelector("[data-Temperature]")
    const windSpeed=document.querySelector("[data-windspeed]")
    const Humidity=document.querySelector("[data-Humidity]")
    const Clouds=document.querySelector("[data-clouds]")
    CityName.innerText=Weatherdata?.name
    countryIcon.src = `https://flagcdn.com/144x108/${Weatherdata?.sys?.country.toLowerCase()}.png`;
    weatherDesc.innerText=Weatherdata?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${Weatherdata?.weather?.[0]?.icon}.png`;
    Temperature.innerText=`${Weatherdata?.main?.temp.toFixed(2)} °C`
    windSpeed.innerText = `${Weatherdata?.wind?.speed.toFixed(2)}m/s`
    Humidity.innerText = `${Weatherdata?.main?.humidity}%`
    Clouds.innerText = `${Weatherdata?.clouds?.all}%`;



    // fetch values  from weatherInfo object and put it in Ui element

}
userTab.addEventListener( "click", ()=>{
    // pass click as input
    switchTab(userTab)
})
searchTab.addEventListener( "click", ()=>{
    switchTab(searchTab)
})

function showPosition(Position){ 
    const userCoordinates={
        lat:Position.coords.latitude,
        lon:Position.coords.longitude
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
;
    fetchUserWeatherInfo(userCoordinates);

}
GrantAcess.addEventListener( "click", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
    GrantAcess.style.display = "none";
    messageText.innerText = "Geolocation is not supported by this browser.";
    }
})

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName=searchInput.value
    if( cityName=== ""){
        return 
    }
    else{
        fetchSearchWeatherInfo(cityName)
        cityName.value = ""
    }
    

})

async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    granLocation.classList.remove("active");
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        const data=  await response.json()
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data)
    }
    catch(error){
        loadingScreen.classList.remove("active");

    }
} 