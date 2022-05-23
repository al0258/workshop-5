import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import {mondayuLogger} from "mondayu-logger";
import http from "http";
// import your own logger

// step 1: install lib and print temp to console
const apiKey = "1e66590bd6825ee1caaf00cbab14046b";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

weatherAPI.setApiKey(apiKey);
weatherAPI.setCityId(293397);
const temp = await weatherAPI.getTemperature();
console.log('temp', temp);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: temp
    }));
    mondayuLogger.log(temp);
  });
  
  
  server.listen(8000);  

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

// start your server

// step 3: install your logger and log temp and server start
// log that the service has started