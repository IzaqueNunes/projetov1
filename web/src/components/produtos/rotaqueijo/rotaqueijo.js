/* import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class RotaQueijo extends Component {
 render(){
    return (
      <div>
          <h1>Rota do Queijo</h1>
            <Map google={this.props.google} 
            style={{ height: "1000px", width: "1000px", position: "relatibve"}}
            zoom={12}
            google={this.props.google}
            
            initialCenter={{
              lat:  -15.739797098828687,
              lng: -43.022118122999956
            }} 
            onClick={this.onMapClicked}>

                <Marker
                    title={'Teste'}
                    name={'IFNMG'}
                    position={{ lat:  -15.739797098828687, lng: -43.022118122999956 }}
                     />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    
                </InfoWindow>
            </Map>
      </div>
    );
 }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyAyDlK8HVHUBDQTfV1RxCFzP-KLxmj3nZg")
  })(RotaQueijo) */

 /*  import React from 'react'
  import { GoogleMap, LoadScript } from '@react-google-maps/api';
  
  
  function RotaQueijo() {
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    const  containerStyle  = {
        width :  ' 400px ' ,
        height :  ' 400px '
     };
     
     const  center  = {
        lat:  -15.739797098828687,
        lng: -43.022118122999956
     };
  
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAyDlK8HVHUBDQTfV1RxCFzP-KLxmj3nZg"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc.  }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
  
  export default React.memo(RotaQueijo) */
  
import React, {Component} from 'react';
import {TileLayer, Marker, Popup, MapContainer} from 'react-leaflet';
import 'leaflet/dist/leaflet-src';
import './rotaqueijo.css';
import L from 'leaflet';
import styled from 'styled-components';

const position ={
  lat:  -15.739797098828687,
  lng: -43.022118122999956
};

const Wrapper = styled.div `
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  margin-top: 100px;
  background-Color: red;
`;


/* 
const RotaQueijo=()=> {

     return (
      <div className='map'>
        <MapContainer style={Wrapper}
        center={position} zoom={13} scrollWheelZoom={false}>
           <TileLayer
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           />
           <Marker position={position}>
           </Marker>
        </MapContainer>
      </div>
     
     );

}

export default RotaQueijo;


 */

 export default class RotaQueijo extends React.Component{

  componentDidMount(){
    this.map = L.map('map', {
      center: [-15.739797098828687, -43.022118122999956],
      position: [-15.739797098828687, -43.022118122999956],
      zoom: 6,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map);

  }

  render(){
    return <Wrapper width='1280px' height= '720px' id='map'/>
  }


 }

