import React, { useEffect, useRef } from 'react';
import { Coordinates, Truck, User } from '../types';

// Declare Leaflet globally as it is loaded via CDN
declare global {
  interface Window {
    L: any;
  }
}

interface MapViewProps {
  userLocation: Coordinates;
  truck?: Truck | null;
  role: 'CITIZEN' | 'DRIVER';
  onTruckClick?: () => void;
}

const MapView: React.FC<MapViewProps> = ({ userLocation, truck, role, onTruckClick }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const truckMarkerRef = useRef<any>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    if (window.L) {
      const map = window.L.map(mapContainerRef.current).setView(
        [userLocation.lat, userLocation.lng], 
        15
      );

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;
    }
  }, []);

  // Update User Marker
  useEffect(() => {
    if (!mapInstanceRef.current || !window.L) return;

    const icon = window.L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${role === 'CITIZEN' ? '#3b82f6' : '#22c55e'}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng([userLocation.lat, userLocation.lng]);
    } else {
      userMarkerRef.current = window.L.marker(
        [userLocation.lat, userLocation.lng], 
        { icon }
      )
      .addTo(mapInstanceRef.current)
      .bindPopup(role === 'CITIZEN' ? "Tu Casa" : "Tu Camión");
    }

    // Only center map on user if it's the first load or drastic change, 
    // to allow user to pan around freely
    // mapInstanceRef.current.panTo([userLocation.lat, userLocation.lng]);

  }, [userLocation, role]);

  // Update Truck Marker (For Citizen View)
  useEffect(() => {
    if (!mapInstanceRef.current || !window.L || role === 'DRIVER') return;

    if (truck) {
      // Truck Icon
      const truckIcon = window.L.divIcon({
        className: 'custom-truck-icon',
        html: `
          <div style="
            background-color: #f59e0b; 
            width: 32px; 
            height: 32px; 
            border-radius: 8px; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            font-size: 20px;
            cursor: pointer;
          ">🚛</div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      if (truckMarkerRef.current) {
        truckMarkerRef.current.setLatLng([truck.location.lat, truck.location.lng]);
        truckMarkerRef.current.setOpacity(1);
        
        // Update click listener
        truckMarkerRef.current.off('click');
        if (onTruckClick) {
          truckMarkerRef.current.on('click', onTruckClick);
        }
      } else {
        truckMarkerRef.current = window.L.marker(
          [truck.location.lat, truck.location.lng],
          { icon: truckIcon }
        )
        .addTo(mapInstanceRef.current)
        .bindPopup("Camión Recolector");

        if (onTruckClick) {
          truckMarkerRef.current.on('click', onTruckClick);
        }
      }
    } else if (truckMarkerRef.current) {
        // Hide if no truck data
        truckMarkerRef.current.setOpacity(0);
    }

  }, [truck, role, onTruckClick]);

  return <div ref={mapContainerRef} className="w-full h-full z-0" />;
};

export default MapView;