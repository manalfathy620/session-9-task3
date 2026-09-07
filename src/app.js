const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
const dir = path.join(__dirname, "../public");
const geocode = require("../utlis/mabBox");
const forcast = require("../utlis/weather");
require("dotenv").config()

app.use(express.static(dir));

app.get("/weather", (req, res) => {
  if (!req.query.location) {
    return res.send("you must provide location");
  }
  geocode(req.query.location,process.env.MAPBOX_TOKEN, (error, data) => {
    if (error) {
      return res.send({ error: error });
    }
    forcast(data.long, data.lat,process.env.WEATHER_TOKEN, (error, data) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        location: JSON.stringify({ location: req.query.location }),
        forcast: JSON.stringify(data),
      });
    });
  });
});

app.listen(port, () => {
  console.log("listen to Requests from port " + port);
});
