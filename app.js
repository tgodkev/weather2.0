
const zipBtn = document.getElementById("setZip");
zipBtn.addEventListener("click", () => setZip() );




function setZip(){
  var zip = document.getElementById("userInput");
var theZip = zip.value ;
  currentWeather(theZip);
}

async function currentWeather(theZip){
  const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip='+ theZip +'&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5')
  const currentData = await response.json();
  

  document.getElementById("currentTemp").innerHTML = "Current Temp: " + currentData.list[1].main.temp;

  document.getElementById("city").innerHTML = currentData.city.name;
  console.log(currentData)
}





