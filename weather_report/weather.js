window.addEventListener('load',()=>{
    let long;
    let lat;
    let body = document.querySelector("body")
    let temperatureDescription = document.querySelector('.temperature-description')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let icon = document.querySelector('.icon')
    let locationTimezone = document.querySelector('.location-timezone')
    let app = document.querySelector('.app')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=19bdd997e06d52e369060f740a8bb0e5`
                fetch(api)
         //Fetching data from the API       
        .then(Response=>{
            return Response.json()
        })
        .then(data=>{

            console.log(data)
            let description = data.weather[0].description
            let {temp} = data.main 
            let degree = parseInt(temp)
            let logocode = data.weather[0].icon
              
            
            icon.innerHTML = `<img src="icons/${logocode}.png"/>`
            temperatureDescription.textContent = description
            locationTimezone.textContent = data.name
            temperatureDegree.textContent = Math.round(degree-273.15)
        })
    })
    }else{
        h1.textContent = "This is not working cause you don't want to cooperate :("
    }
})

