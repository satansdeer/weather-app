export const getWeatherForLocation = city => {
  const [lat, long] = city["latt_long"].split(",");
  return fetch(
    `https://darksky-wrapper.herokuapp.com/forecast/${lat},${long}`,
    {
      mode: "cors"
    }
  ).then(res => res.json());
};

export const mockWeatherForLocation = city => {
  //const [lat, long] = city["latt_long"].split(",");
  if (city.title === "Stockholm") {
    return {
      latitude: 37.8267,
      longitude: -122.4233,
      timezone: "America/Los_Angeles",
      currently: {
        time: 1528345579,
        summary: "Partly Cloudy",
        icon: "partly-cloudy-night",
        nearestStormDistance: 1,
        nearestStormBearing: 148,
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 22.88,
        apparentTemperature: 18.88,
        dewPoint: 49.87,
        humidity: 0.77,
        pressure: 1013.62,
        windSpeed: 11.44,
        windGust: 17.71,
        windBearing: 251,
        cloudCover: 0.43,
        uvIndex: 0,
        visibility: 10,
        ozone: 332.11
      }
    };
  }
  return {
    latitude: 37.8267,
    longitude: -122.4233,
    timezone: "America/Los_Angeles",
    currently: {
      time: 1528345579,
      summary: "Partly Cloudy",
      icon: "partly-cloudy-night",
      nearestStormDistance: 1,
      nearestStormBearing: 148,
      precipIntensity: 0,
      precipProbability: 0,
      temperature: 22.88,
      apparentTemperature: 18.88,
      dewPoint: 49.87,
      humidity: 0.77,
      pressure: 1013.62,
      windSpeed: 11.44,
      windGust: 17.71,
      windBearing: 251,
      cloudCover: 0.43,
      uvIndex: 0,
      visibility: 10,
      ozone: 332.11
    }
  };
};
