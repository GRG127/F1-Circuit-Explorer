import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Circuit } from '../types/circuit';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface CircuitMapProps {
  circuits: Circuit[];
  onCircuitSelect: (circuit: Circuit) => void;
}

const CircuitMap: React.FC<CircuitMapProps> = ({ circuits, onCircuitSelect }) => {
  return (
    <MapContainer
      center={[30, 0]}
      zoom={2}
      className="w-full h-[600px] rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {circuits.map((circuit) => (
        <Marker
          key={circuit.id}
          position={[circuit.location.lat, circuit.location.lng]}
          eventHandlers={{
            click: () => onCircuitSelect(circuit),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{circuit.name}</h3>
              <p className="text-sm">{circuit.country}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CircuitMap;