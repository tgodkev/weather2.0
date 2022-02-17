
var count = 0;

const addBtn = document.getElementById("add");


addBtn.addEventListener("click", () => handleClick());

function handleClick() {
  count++;
  console.log(count);
  document.getElementById("number").innerHTML = count;
}

async function currentWeather(){
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=44240&units=imperial&appid=301b282421d5ab0658e1410019293854')
  const currentData = await response.json();
  

  document.getElementById("currentTemp").innerHTML = currentData.main.temp;
  document.getElementById("windSpeed").innerHTML = currentData.wind.speed;
  console.log(currentData)
}

currentWeather();


var zip = document.getElementById("userInput");
var theZip = zip.value;

console.log(theZip);