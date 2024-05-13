import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function Infobox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1583393818248-f678d14fb16a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwZGF5fGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 
                            ? <ThunderstormIcon /> : info.temp > 15 
                            ? <WbSunnyIcon/>
                             : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="span">
                            <div>Temperature: {info.temp}°C<br /></div>
                            <div>Min Temperature: {info.tempMin}°C<br /></div>
                            <div>Max Temperature: {info.tempMax}°C<br /></div>
                            <div>Humidity: {info.humidity}%<br /></div>
                            <div>Weather: </div>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
