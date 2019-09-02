import React from "react"

function GetTime() {
  const date = new Date();
  const getMinutes = date.getMinutes()
  const getMilliseconds = date.getMilliseconds()
  let totaltimetaken
   fetch('https://community-open-weather-map.p.rapidapi.com/weather').
    then(function(response){
        return response.json()
    })

   return (
      <p1> totaltimetaken = {getAPI} </p1>
   )
  
}

export default GetTime
