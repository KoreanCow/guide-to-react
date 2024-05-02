import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import '../App.css';

const { kakao } = window as any;

function NoSdk() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("현재 위치 못따옴");
      }
    }
    const showPosition = (position: any) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
        level: 3
      };

      const map = new kakao.maps.Map(container, options);
    }

    getLocation();
  }, [])

  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default NoSdk;
