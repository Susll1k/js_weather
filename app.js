const apiKey = '5446773f3fe6662a6398f421dbfc0991';

async function getWeather(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apiKey);

    const data = await response.json();

    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML = `Температура в ${city}: ${Number(data.main.temp)/10}°C.<br> Ощущается как ${Number(data.main.feels_like)/10}°C. <br> Давление: ${data.main.pressure}.<br> Скорость ветра: ${data.wind.speed} м/с.`;
  } catch (error) {
    console.error('Ошибка при получении данных о погоде:', error);
    const weatherElement = document.getElementById('weather');
    weatherElement.innerHTML ='Вы ввели несуществующий город , повторите попытку '
  }
}

const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
  const city_name = document.getElementsByClassName('city')[0].value
  getWeather(city_name);
  console.log(city_name);

  
})




