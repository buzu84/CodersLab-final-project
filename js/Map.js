import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import mapStyles from "./mapStyles";

function Map() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [lat, setLat] = useState(50.064651);
  const [lng, setLng] = useState(19.944981);
  const [spots, setSpots] = useState([]);
  const API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${API}/spots`)
    .then(response => response.json())
    .then(response => setSpots(response))
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedSpot(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  return (
    <>
      <GoogleMap
        defaultZoom={9}
        center={{ lat, lng }}
        defaultOptions={{ styles: mapStyles }}
      />
        <Marker
          position={{
            lat: lat,
            lng: lng
          }}
          />

        {spots.map(spot => (
          // if(spot.type === "spot") {
          //
          // }
          (spot.type === "spot") ? (
            <Marker
              key={spot.id}
              position={{
                lat: spot.lat,
                lng: spot.lng
              }}
              onClick={() => {
                setSelectedSpot(spot);
              }}
              icon={{
                url: `/favicon-16x16.png`,
                scaledSize: new window.google.maps.Size(20, 20)
              }}
            />
          ) : (
            <Marker
              key={spot.id}
              position={{
                lat: spot.lat,
                lng: spot.lng
              }}
              onClick={() => {
                setSelectedSpot(spot);
              }}
              icon={{
                url: `/star.png`,
                scaledSize: new window.google.maps.Size(20, 20)
              }}
            />
          )
        ))}

        {selectedSpot && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedSpot(null);
            }}
            position={{
              lat: selectedSpot.lat,
              lng: selectedSpot.lng
            }}
          >
            <div>
              <h2>{selectedSpot.name}</h2>
              <p><span  style={{fontWeight: "bold"}}>Szerokosc geograficzna: </span>{selectedSpot.lat} N</p>
              <p><span  style={{fontWeight: "bold"}}>Dlugosc geograficzna: </span>{selectedSpot.lng} E</p>
              <p>{selectedSpot.description}</p>
            </div>
          </InfoWindow>
        )}
      </>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function FinalMap() {
  return (
    <div className="map_container">
      <div style={{ width: "80vw", height: "85vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
