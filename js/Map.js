import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import * as spotsData from "../data/spots.json";
import mapStyles from "./mapStyles";

function Map() {
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [lat, setLat] = useState(50.064651);
  const [lng, setLng] = useState(19.944981);
  const [spots, setSpots] = useState([]);
  const API = "http://localhost:3000";

  // const fetchSpots = () => {
  //       fetch(`${API}/spots`)
  //           .then(response => response.json())
  //           .then(response => setSpots(response))
  //   };
  // useEffect(() => {
  //   fetch(`${API}/spots`)
  //       .then(response => response.json())
  //       .then(response => setSpots(response))
  // }, []);
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
  }, [lat,lng]);

  return (
    <>
      <GoogleMap
        defaultZoom={10}
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
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
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
      <div style={{ width: "80vw", height: "80vh" }}>
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
