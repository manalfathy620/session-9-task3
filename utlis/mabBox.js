const request = require("request")

const geocode = (address,MAPBOX_TOKEN,callback)=>{
  
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +  ".json?access_token="+MAPBOX_TOKEN

request({url:url,json:true},(error,res)=>{
  if(error){
    callback({error:error},undefined)
  }
  else if(res.body.message){
    callback({error:res.body.message},undefined)
  }
  else if(res.body.features.length == 0)
  {
    callback({error:"Unenable to find location"},undefined)
  }
  else{
    callback(undefined,{
      long:res.body.features[0].center[0],
      lat:res.body.features[0].center[1]
      
    })
  }
})
}


module.exports=geocode