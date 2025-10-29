'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationMapProps {
  className?: string;
}

export default function LocationMap({ className = '' }: LocationMapProps) {
  // Web-Smart.Co location: 52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX, UK
  const position: [number, number] = [51.9498, -0.2772];

  useEffect(() => {
    // Fix for Leaflet in Next.js SSR
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
  }, []);

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-full rounded-2xl shadow-2xl z-10"
        style={{ minHeight: '400px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <strong className="text-primary font-bold text-lg">Web-Smart.Co</strong>
              <br />
              <span className="text-sm">52 Walsworth Rd</span>
              <br />
              <span className="text-sm">Hitchin, Hertfordshire</span>
              <br />
              <span className="text-sm">SG4 9SX, UK</span>
              <br />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=52+Walsworth+Rd,+Hitchin,+Hertfordshire+SG4+9SX,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-sm mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
