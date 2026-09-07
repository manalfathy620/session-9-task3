const request = require("request")

const forcast = (long,lat,WEATHER_TOKEN,callback)=>{
  
  const url = "https://api.weatherapi.com/v1/current.json?key=" + WEATHER_TOKEN + "=" + lat + "," + long
    
request({url:url,json:true},(error,res)=>{
  if(error){
    callback({error:error},undefined)
  }
  else if(res.body.error){
    callback({error:res.body.error},undefined)
  }
  else{
  
     callback (undefined ,{location_name:res.body.location.name,country:res.body.location.country,lat:res.body.location.lat,long:res.body.location.lon,temp:res.body.current.temp_c,condition:res.body.current.condition.text})
     console.log({name:res.body.location.name,country:res.body.location.country,lat:res.body.location.lat,long:res.body.location.lon,temp:res.body.current.temp_c,condition:res.body.current.condition.text})
  }
})
}


module.exports=forcast