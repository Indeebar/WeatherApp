import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  // Define image URLs
  const DEFAULT_URL = "https://plus.unsplash.com/premium_photo-1673638836583-7c16d2e34dae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const COLD_URL = "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL = "https://images.unsplash.com/photo-1724284730371-1ecdd9fd06a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const HAZE_URL = "https://images.unsplash.com/photo-1604424288891-7f0871867e09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const CLEAR_URL = "https://images.unsplash.com/uploads/1412750321034baa5d127/d35c5980?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  // Determine the image to display based on weather conditions
  let selectedImage;

  if (info.temp < 15) {
    selectedImage = COLD_URL;
  } else if (info.temp > 30) {
    selectedImage = HOT_URL;
  } else if (info.humidity > 60) {
    selectedImage = RAIN_URL;
  } else if (info.weather.toLowerCase().includes("haze")) {
    selectedImage = HAZE_URL;
  } else if (info.weather.toLowerCase().includes("clear")) {
    selectedImage = CLEAR_URL;
  } else {
    selectedImage = DEFAULT_URL;
  }

  return (
    <div className="InfoBox">
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
        }}
      >
        <CardMedia
          sx={{
            height: { xs: 140, sm: 180 },
          }}
          image={selectedImage} // Use the selected image
          title={`${info.city} Weather`}
        />
        <CardContent
          sx={{
            padding: { xs: '12px 16px', sm: '16px 24px' },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: '18px', sm: '24px' } }}
          >
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '12px', sm: '14px' },
            }}
            component="span"
          >
            <div>Temperature: {info.temp}&deg;C</div>
            <div>Humidity: {info.humidity}%</div>
            <div>Min Temperature: {info.tempMin}&deg;C</div>
            <div>Max Temperature: {info.tempMax}&deg;C</div>
            <div>Feels like: {info.feelslike}&deg;C</div>
            <div>Weather: {info.weather}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
