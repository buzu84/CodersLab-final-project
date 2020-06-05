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
      defaultZoom={10}
      defaultCenter={{ lat: lat, lng: lng }}
      defaultOptions={{ styles: mapStyles }}
    />
    <Marker
      position={{
        lat: lat,
        lng: lng
      }}
      />
      </>
      // {parkData.features.map(park => (
      //   <Marker
      //     key={park.properties.PARK_ID}
      //     position={{
      //       lat: park.geometry.coordinates[1],
      //       lng: park.geometry.coordinates[0]
      //     }}
      //     onClick={() => {
      //       setSelectedPark(park);
      //     }}
      //     icon={{
      //       url: `/skateboarding.svg`,
      //       scaledSize: new window.google.maps.Size(25, 25)
      //     }}
      //   />
      // ))}

      // {selectedPark && (
      //   <InfoWindow
      //     onCloseClick={() => {
      //       setSelectedPark(null);
      //     }}
      //     position={{
      //       lat: selectedPark.geometry.coordinates[1],
      //       lng: selectedPark.geometry.coordinates[0]
      //     }}
      //   >
      //     <div>
      //       <h2>{selectedPark.properties.NAME}</h2>
      //       <p>{selectedPark.properties.DESCRIPTIO}</p>
      //     </div>
      //   </InfoWindow>
      // )}



  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function FinalMap() {
  return (
    <div>
      <div className="map_container" style={{ width: "1300px", height: "80vh" }}>
        <MapWrapped
          className="map_cont"
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
