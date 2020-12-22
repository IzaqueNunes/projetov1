import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const RotaQueijo = () => {

return(
  <div style={{ height: 800 }}>
    <h1>Rota do Queijo em Porteirinha</h1>
      <MapContainer style={{ height: 800 }} center={[-15.794600, -43.054010]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-15.73955886649034, -43.02160109591189]}>
          <Popup>
            IFNMG <br /> Campus Porteirinha
    </Popup>
        </Marker>
      </MapContainer>
    </div>
);


}

export default RotaQueijo;