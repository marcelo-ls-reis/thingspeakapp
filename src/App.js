import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=20');
      const data = response.data.feeds[0];
      const dataArray = [];
      dataArray.push({temp: data.field1, hum: data.field2});
      console.log(dataArray);
      setTemperature(data.field1);
      setHumidity(data.field2);
    }
    catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Temperature: {temperature}</h1>
      <h1>Humidity: {humidity}</h1>
    </div>
  );
};

export default App

