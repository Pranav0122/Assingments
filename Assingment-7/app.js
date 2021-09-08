let inputCity=document.getElementById("searchCity");
let city="";
fetchData();
const date=new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let p=document.querySelectorAll('p');
inputCity.addEventListener('keypress',(e)=>{
    
    if(e.key==="Enter")
    {
        fetchData();
    }
})
function fetchData(){
    city=inputCity.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cdd46bad090946ba79d34eabfe74678`)
    .then((req)=>{
        return req.json();
    })
    .then((data)=>{
        let country=data.sys.country;
        p[0].innerText=`${city},${country}`
        p[1].innerText=`${date.getDate()} ${months[date.getMonth()]} (${days[date.getDay()]}) ${date.getFullYear()}`
        let temp= parseInt(data.main.temp-273.15);
        let maxTemp=parseInt(data.main.temp_max-273.15);
        let minTemp=parseInt(data.main.temp_min-273.15);
        let degree=document.createElement('sup');
        degree.innerText="0";
        degree.classList.add("degreeSign")
        p[2].innerText=temp;
        p[2].append(degree);
        p[2].append("C");
        p[3].innerHTML=minTemp+"<sup>0</sup>"+"C (min) / "+maxTemp+"<sup>0</sup>"+"C (max)"; 
        p[4].innerText=`${data.wind.speed} kms`;
        let weather=data.weather[0].description;
        p[5].innerText=`${weather.slice(0,1).toUpperCase()}${weather.slice(1)}`
    })
    .catch((err)=>{
        alert("Invalid city name")
        inputCity.value=""
    })
}
