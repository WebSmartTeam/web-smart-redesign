'use client';

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Main office marker (purple)
const MainOfficeIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Service area marker (blue)
const ServiceAreaIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = MainOfficeIcon;

interface LocationMapProps {
  className?: string;
}

export default function LocationMap({ className = '' }: LocationMapProps) {
  // Service locations
  const locations = {
    mainOffice: { lat: 51.9498, lng: -0.2772, name: 'Hitchin (Main Office)', region: 'Hertfordshire' },
    stevenage: { lat: 51.9024, lng: -0.2023, name: 'Stevenage', region: 'Hertfordshire' },
    bedford: { lat: 52.1363, lng: -0.4671, name: 'Bedford', region: 'Bedfordshire' },
    london: { lat: 51.5074, lng: -0.1278, name: 'London', region: 'Greater London' },
    luton: { lat: 51.8787, lng: -0.4200, name: 'Luton', region: 'Bedfordshire' },
  };

  useEffect(() => {
    // Fix for Leaflet in Next.js SSR
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
  }, []);

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[51.9498, -0.2772]}
        zoom={9}
        scrollWheelZoom={false}
        className="w-full h-full rounded-2xl shadow-2xl z-10"
        style={{ minHeight: '450px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main Office - Hitchin */}
        <Marker position={[locations.mainOffice.lat, locations.mainOffice.lng]} icon={MainOfficeIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-primary font-bold text-lg">Web-Smart.Co</strong>
              <br />
              <span className="text-sm font-semibold">{locations.mainOffice.name}</span>
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

        {/* Service radius around main office (25km) */}
        <Circle
          center={[locations.mainOffice.lat, locations.mainOffice.lng]}
          radius={25000}
          pathOptions={{
            color: '#672F8F',
            fillColor: '#672F8F',
            fillOpacity: 0.1,
            weight: 2,
          }}
        />

        {/* Stevenage - Hertfordshire */}
        <Marker position={[locations.stevenage.lat, locations.stevenage.lng]} icon={ServiceAreaIcon}>
          <Popup>
            <div className="text-center">
              <strong className="font-bold text-lg">{locations.stevenage.name}</strong>
              <br />
              <span className="text-sm">{locations.stevenage.region}</span>
              <br />
              <span className="text-xs text-gray-600 mt-1 block">Service Area</span>
            </div>
          </Popup>
        </Marker>

        {/* Bedford - Bedfordshire */}
        <Marker position={[locations.bedford.lat, locations.bedford.lng]} icon={ServiceAreaIcon}>
          <Popup>
            <div className="text-center">
              <strong className="font-bold text-lg">{locations.bedford.name}</strong>
              <br />
              <span className="text-sm">{locations.bedford.region}</span>
              <br />
              <span className="text-xs text-gray-600 mt-1 block">Service Area</span>
            </div>
          </Popup>
        </Marker>

        {/* London */}
        <Marker position={[locations.london.lat, locations.london.lng]} icon={ServiceAreaIcon}>
          <Popup>
            <div className="text-center">
              <strong className="font-bold text-lg">{locations.london.name}</strong>
              <br />
              <span className="text-sm">{locations.london.region}</span>
              <br />
              <span className="text-xs text-gray-600 mt-1 block">Service Area</span>
            </div>
          </Popup>
        </Marker>

        {/* Luton - Bedfordshire */}
        <Marker position={[locations.luton.lat, locations.luton.lng]} icon={ServiceAreaIcon}>
          <Popup>
            <div className="text-center">
              <strong className="font-bold text-lg">{locations.luton.name}</strong>
              <br />
              <span className="text-sm">{locations.luton.region}</span>
              <br />
              <span className="text-xs text-gray-600 mt-1 block">Service Area</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
