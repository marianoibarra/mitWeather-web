export const fetchCityAPI = (cityName, id) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d163345ee8814c0ee3025942e6b63ce2`)
        .then(r => r.json())
        .then((res) => {
            const city = {
                min: Math.round(res.main.temp_min) - 273,
                max: Math.round(res.main.temp_max) - 273,
                temp: Math.round(res.main.temp) - 273,
                img: res.weather[0].icon,
                id: id,
                name: res.name,
                weather: res.weather[0].description,
                lat: res.coord.lat,
                lon: res.coord.lon,
                timezone: res.timezone
            };
            return city;
        })
        .then((city) => {
            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=d163345ee8814c0ee3025942e6b63ce2`)
                .then(r => r.json())
                .then((res) => {
                    const newCity ={
                        ...city,
                        ext: res.list
                    }
                return newCity
                })
            })
    }