import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGetLocation from '../hooks/useGetLocation';

const UseSdk = () => {
  const { myLat, myLot } = useGetLocation();
  const [latitude, setLatitude] = useState<number>(33);
  const [longitude, setLongitude] = useState<number>(31);
  const [level, setLevel] = useState(3);

  const mapRef = useRef<kakao.maps.Map>(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError);
      } else {
        alert('브라우저에서 Geolocation이 지원되지 않습니다.');
      }
    };

    const showPosition = (position: GeolocationPosition) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      const map = mapRef.current;
      if (map) {
        map.setCenter(new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude));
      }
    };

    const showError = (error: GeolocationPositionError) => {
      alert('Geolocation 오류: ' + error.message);
    };

    getLocation();
  }, []);

  const handleLevel = (type: 'increase' | 'decrease') => {
    const map = mapRef.current;
    if (!map) return;

    if (type === 'increase') {
      map.setLevel(map.getLevel() + 1);
      setLevel(map.getLevel());
    } else if (type === 'decrease') {
      map.setLevel(map.getLevel() - 1);
      setLevel(map.getLevel());
    }
  };
  const panTo = ({ lat, lng }: any) => {
    setLatitude(lat);
    setLongitude(lng);
  }


  const setMyLocation = () => {
    setLatitude(myLat);
    setLongitude(myLot);
  }
  return (
    <div className="App">
      <Map
        id="map"
        center={{
          lat: latitude,
          lng: longitude,
        }}
        zoomable={true}
        ref={mapRef}
        level={level}
      >
        <MapMarker
          position={{
            lat: latitude,
            lng: longitude,
          }}
        />
      </Map>
      <div className='btn_box'>
        <button onClick={() => handleLevel('decrease')}>Zoom In</button>
        <button onClick={() => handleLevel('increase')}>Zoom Out</button>
        <button onClick={() => panTo({ lat: 33.45058, lng: 126.574942 })}>Move to KaKao</button>
        <button onClick={setMyLocation}>Move to My Location</button>
      </div>
    </div>
  );
};

export default UseSdk;
