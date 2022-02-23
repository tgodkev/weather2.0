
const zipBtn = document.getElementById("setZip");
zipBtn.addEventListener("click", () => setZip() );






function setZip(){
  var zip = document.getElementById("userInput");
  var theZip = zip.value ;
  const d = new Date();
  let day = d.getDay();

  currentWeather(theZip);
  setDay(day);
}

async function currentWeather(theZip){
  const response = await fetch( 'https://api.openweathermap.org/data/2.5/forecast?zip='+ theZip +'&units=imperial&appid=7e58db9063a0da15a6f0a09df1ab8dc5')
  const currentData = await response.json();
  

  document.getElementById("currentTemp").innerHTML = "Current Temp: " + currentData.list[0].main.temp + "°F";
 const currentImg = document.getElementById("currentIcon");
  currentImg.src = "https://openweathermap.org/img/wn/" +currentData.list[0].weather[0].icon + "@2x.png";
  
  document.getElementById("dayOne").innerHTML = currentData.list[3].main.temp + "°F";
  const firstImg = document.getElementById("firstIcon");
  firstImg.src = "https://openweathermap.org/img/wn/" +currentData.list[3].weather[0].icon + "@2x.png";


  document.getElementById("dayTwo").innerHTML = currentData.list[19].main.temp + "°F";
  const secondImg = document.getElementById("secondIcon");
  secondImg.src= "https://openweathermap.org/img/wn/" +currentData.list[19].weather[0].icon + "@2x.png";


  document.getElementById("dayThree").innerHTML = currentData.list[25].main.temp + "°F";
  const thirdImg = document.getElementById("thirdIcon");
  thirdImg.src = "https://openweathermap.org/img/wn/" +currentData.list[25].weather[0].icon + "@2x.png";


  document.getElementById("dayFour").innerHTML = currentData.list[33].main.temp + "°F";
  const fourthImg = document.getElementById("fourthIcon");
  fourthImg.src = "https://openweathermap.org/img/wn/" +currentData.list[33].weather[0].icon + "@2x.png";


  document.getElementById("dayFive").innerHTML = currentData.list[39].main.temp + "°F";
  const fifthImg = document.getElementById("fifthIcon");
  fifthImg.src = "https://openweathermap.org/img/wn/" +currentData.list[39].weather[0].icon + "@2x.png";


  document.getElementById("city").innerHTML = currentData.city.name;
  console.log(currentData)
}



function setDay(day){
  if (day === 0){
    
    document.getElementById("firstDay").innerHTML = 'Monday';
    document.getElementById("secondDay").innerHTML = 'Tuesday';
    document.getElementById("thirdDay").innerHTML = 'Wesnday';
    document.getElementById("fourthDay").innerHTML = 'Thursday';
    document.getElementById("fithDay").innerHTML = 'Friday';
  }else if(day === 1){

    document.getElementById("firstDay").innerHTML = 'Tuesday';
    document.getElementById("secondDay").innerHTML = 'Wedsnday';
    document.getElementById("thirdDay").innerHTML = 'Thursday';
    document.getElementById("fourthDay").innerHTML = 'Friday';
    document.getElementById("fithDay").innerHTML = 'Saturday';
  }else if(day === 2){
    document.getElementById("firstDay").innerHTML = 'Wensday';
    document.getElementById("secondDay").innerHTML = 'Thursday';
    document.getElementById("thirdDay").innerHTML = 'Friday';
    document.getElementById("fourthDay").innerHTML = 'Saturday';
    document.getElementById("fithDay").innerHTML = 'Sunday';
  }else if(day === 3){
    document.getElementById("firstDay").innerHTML = 'Thursday';
    document.getElementById("secondDay").innerHTML = 'Friday';
    document.getElementById("thirdDay").innerHTML = 'Saturday';
    document.getElementById("fourthDay").innerHTML = 'Sunday';
    document.getElementById("fithDay").innerHTML = 'Monday';
  }else if(day === 4){
    document.getElementById("firstDay").innerHTML = 'Friday';
    document.getElementById("secondDay").innerHTML = 'Saturday';
    document.getElementById("thirdDay").innerHTML = 'Sunday';
    document.getElementById("fourthDay").innerHTML = 'Monday';
    document.getElementById("fithDay").innerHTML = 'Tuesday';
  }else if(day === 5){
    document.getElementById("firstDay").innerHTML = 'Saturday';
    document.getElementById("secondDay").innerHTML = 'Sunday';
    document.getElementById("thirdDay").innerHTML = 'Monday';
    document.getElementById("fourthDay").innerHTML = 'Tuesday';
    document.getElementById("fithDay").innerHTML = 'Wensday';
  }else if(day === 6){
    document.getElementById("firstDay").innerHTML = 'Sunday';
    document.getElementById("secondDay").innerHTML = 'Monday';
    document.getElementById("thirdDay").innerHTML = 'Tuesday';
    document.getElementById("fourthDay").innerHTML = 'Wensday';
    document.getElementById("fithDay").innerHTML = 'Thursday';
  }
}


//"https://openweathermap.org/img/"