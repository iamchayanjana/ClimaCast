import { useState } from "react";
import Infobox from "./InfoBox";
import SearchBox from "./SearchBox";
import { blue } from "@mui/material/colors";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo] = useState({
        city:"Delhi",
        feelslike: 34.84,
        temp: 25.05,
        tempMin: 25.08,
        tempMax: 25.05,
        humidity: 47,
        weather: "dirty", 

    });

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
    <h2 style={{marginBottom: "0", color: "#6A5ACD"}}>ClimaCast</h2>
    <i style={{color: "#000"}}>*Weather Forecasting App</i>
    <SearchBox updateInfo={updateInfo}/>
    <Infobox info={weatherInfo}/>
</div>

    )

};
