import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
    }}>
      {text}
    </div>
  );

export default function Map(){
  const defaultProps = {
    center: {
      lat: 57.691141,
      lng: 11.909194
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBwNm4lUgUquDLStHdXx3eBErnJZ0QI6wg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={57.691127970523624}
          lng={11.90961347725245}
          text="Vigsel"
        />
      </GoogleMapReact>
    </div>
  );
}