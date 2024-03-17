import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: '#DCECB4', 
      background: '#4c5c3c',
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
    <div style={{ height: '50vh', width: '100%' }}>
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
        <AnyReactComponent
          lat={57.690599040317224}
          lng={11.907897305732002}
          text="Hotell"
        />
        <AnyReactComponent
          lat={57.6893199476224}
          lng={11.90637389703089}
          text="Festlokal"
        />
      </GoogleMapReact>
    </div>
  );
}