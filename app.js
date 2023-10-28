const dayO = document.getElementById('dayO');
const dayT = document.getElementById('dayT');
const degO = document.getElementById('degO');
const degOO = document.getElementById('degOO');
const degT = document.getElementById('degT');
const degM = document.getElementById('dataM');
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(dayO,dayT)
// console.log(degM)

const apiKey = '33a13e656837f27de3f5d8aebf4965f3'
const apiKeyT = 'e567127bef32be860d7bd0bd8740cd7d'
const apiKeyy = '3d8243cae3e2b225d4da5bb0d794fe3e'
const city = 'dhaka'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a13e656837f27de3f5d8aebf4965f3&units=metric`
let urlFuture = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=33a13e656837f27de3f5d8aebf4965f3&units=metric`
let date = new Date();


const fetcher = function(){
    fetch(url,{
        mode: 'cors'
     })
    .then(res => res.json())
    .then(
        data => {
            // console.log(data);
            const name = data.name;
            // console.log(name);
            const temp = data.main.temp;
            const feel = data.weather[0].main;
            // degO.innerHTML = `<h5>${temp}<span>&#176;</span></h5><h5>${feel}</h5>`
            degM.innerHTML = `<h1>${temp}<span>&#176;</span></h1><h3>${feel}</h3>`

            // console.log(feel);
            // console.log(temp);
        }
    )
}


//for future weather
const fetcherT = function(){
    fetch(urlFuture)
    .then(res => res.json())
    .then(data => {
            console.log(data)
            const tomo = days[date.getDay()+1]
            console.log(tomo)
            dayO.innerHTML = `<h4>${tomo}</h4>`
            //next day morning
            const temp = data.list[4].main.temp;
            const feel = data.list[4].weather[0].main;
            console.log(temp);
            console.log(feel);
            degO.innerHTML = `<h5>Morning</h5><h5>${temp}<span>&#176;</span></h5><h5>${feel}</h5>`
            //next day evening
            const temp1 = data.list[8].main.temp;
            const feel1 = data.list[8].weather[0].main;
            console.log(temp1);
            console.log(feel1);
            degOO.innerHTML = `<h5>Evening</h5><h5>${temp1}<span>&#176;</span></h5><h5>${feel1}</h5>`
        }
    )
}



fetcher()
fetcherT()

