import './World.css';
import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const points = [
  { lat: 37.7749, lng: -122.4194 }, // San Francisco
  { lat: 40.7128, lng: -74.0060 },  // New York
];

const arcsData = [
  {
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 40.7128,
    endLng: -74.0060,
    color: ['orange', 'white']
  }
];

function World() {
    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
    }, []);

    return (
        <div className="globe-container">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" // Realistic Earth texture
                backgroundColor="#0a1a1a"
                pointsData={points}
                pointLat="lat"
                pointLng="lng"
                pointColor={() => 'orange'}
                pointAltitude={0.01}
                pointRadius={0.3}
                arcsData={arcsData}
                arcStartLat="startLat"
                arcStartLng="startLng"
                arcEndLat="endLat"
                arcEndLng="endLng"
                arcColor={d => d.color}
                arcDashLength={0.5}
                arcDashGap={1}
                arcDashInitialGap={() => Math.random()}
                arcStroke={2}
                arcAltitudeAutoScale={0.5}
                arcDashAnimateTime={2000} // Animation speed in ms
            />
        </div>
    );
}

export default World;
