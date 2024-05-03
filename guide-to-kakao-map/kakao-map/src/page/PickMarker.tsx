import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGetLocation from '../hooks/useGetLocation';

const PickMarker = () => {
  const { myLat, myLot } = useGetLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWalk, setIsWalk] = useState<boolean>(false);
  const [startWalkLocation, setStartWalkLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [distance, setDistance] = useState<number>(0); // 초기값을 0으로 설정

  const mapRef = useRef<kakao.maps.Map>(null);

  const [latitude, setLatitude] = useState<number>(myLat); // 초기값 설정
  const [longitude, setLongitude] = useState<number>(myLot); // 초기값 설정

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

  useEffect(() => {
    // 산책 중인 경우에만 거리 계산
    if (isWalk && startWalkLocation) {
      const dist = calculateDistance(latitude, longitude, startWalkLocation.lat, startWalkLocation.lng);
      setDistance(dist);
    }
  }, [latitude, longitude, isWalk, startWalkLocation]);

  const startWalk = () => {
    setIsWalk(!isWalk);
    if (!isWalk) {
      if (latitude && longitude) {
        setStartWalkLocation({ lat: latitude, lng: longitude });
      }
    } else {
      setStartWalkLocation(null);
      setDistance(0); // 산책 종료 시 거리 초기화
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  return (
    <div className='App'>
      <Map
        id='map'
        center={{
          lat: latitude,
          lng: longitude,
        }}
        zoomable={true}
        ref={mapRef}
      >
        {/* 현재 위치 마커 */}
        <MapMarker
          image={{
            src: '/avatar-1.png',
            size: {
              width: 30,
              height: 30
            }
          }}
          clickable={true}
          onClick={() => setIsOpen(!isOpen)}
          position={{
            lat: latitude,
            lng: longitude,
          }}
        >
          {isOpen && <div style={{ padding: "5px", color: "#000" }}>현재 내 위치!!</div>}
        </MapMarker>
        {startWalkLocation && (
          <MapMarker
            position={startWalkLocation}
          />
        )}

      </Map>

      {/* 산책 시작 또는 종료 버튼 */}
      <button onClick={startWalk}>
        {isWalk ? '산책 종료' : '산책 시작'}
      </button>
      <div>산책 거리: {distance.toFixed(2)} km</div>
    </div>
  );
};

export default PickMarker;
