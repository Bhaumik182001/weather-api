

let getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24aebfe348msh81adad22fbacaefp15befejsn42b35fd8ecd2',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

let data = fetch(`https://community-open-weather-map.p.rapidapi.com/climate/month?q=${city}&units=metric`, options)
	.then(response => response.json())
	.then(response => response) 

  return data
}

let showData = (data) => {
  document.getElementById("city-name").innerText = data.city.name;
  document.getElementById("temp").innerText = data.list[0].temp.average;
  document.getElementById("min-temp").innerText = data.list[0].temp.average_min;
  document.getElementById("max-temp").innerText = data.list[0].temp.average_max;
}


let searchCity = async () => {
  let city = document.getElementById("city-input").value
  let data = await getWeatherData(city);
  console.log(data)
  showData(data)
}












