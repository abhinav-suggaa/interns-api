import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 12.9716, 
    lng: 77.5946, // Default longitude
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyABi8-qwYxFA0t-KeTuuKegUMI5qbLlc6k">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapComponent;
