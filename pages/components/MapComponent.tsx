import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useQuery } from '@apollo/client';
import client from '../../apolloClient';
import { GET_ADDRESS } from '../queries'; // Replace with the path to your GraphQL queries

const MapComponent = () => {
    const { loading, error, data } = useQuery(GET_ADDRESS,{client});
  
    const mapStyles = {
      height: '400px',
      width: '100%',
    };
  
    const defaultCenter = {
      lat: 12.9716,
      lng: 77.5946,
    };
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching locations: {error.message}</p>;
  
    return (
      <LoadScript googleMapsApiKey="AIzaSyABi8-qwYxFA0t-KeTuuKegUMI5qbLlc6k">
        <GoogleMap mapContainerStyle={mapStyles} zoom={6} center={defaultCenter}>
          {data.intern_db_get_adrresses.map((location:{
            id: number;
            lat: number;
            lng: number;
          }) => (
            <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
          ))}
          
        </GoogleMap>
      </LoadScript>
    );
  };
  

export default MapComponent;
