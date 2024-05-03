import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGetLocation from '../hooks/useGetLocation';

const PickMarker = () => {
  const { myLat, myLot } = useGetLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isWalk, setIsWalk] = useState<boolean>(false);
  const [startWalkLocation, setStartWalkLocation] = useState<{ lat: number, lng: number } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const startWalk = () => {
    setIsWalk(!isWalk);
    if (isWalk) {
      setStartWalkLocation(null); // 산책 종료 시 시작 위치 초기화
      setDistance(null); // 산책 종료 시 거리 초기화
    } else {
      if (startWalkLocation) {
        // startWalkLocation이 null이 아닌 경우에만 거리 계산
        const dist = calculateDistance(myLat, myLot, startWalkLocation.lat, startWalkLocation.lng);
        setDistance(dist); // 거리 설정
      }
      setStartWalkLocation({ lat: myLat, lng: myLot }); // 산책 시작 시 시작 위치 설정
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
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  return (
    <div className='App'>
      <Map
        id='map'
        center={{ lat: myLat, lng: myLot }}
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
            lat: myLat,
            lng: myLot
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
      {distance !== null && <div>산책 거리: {distance.toFixed(2)} km</div>}
    </div>
  );
};

export default PickMarker;
