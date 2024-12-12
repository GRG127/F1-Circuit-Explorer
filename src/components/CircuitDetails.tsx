import React from 'react';
import { Circuit } from '../types/circuit';
import { Trophy, Calendar, Clock, MapPin, Flag, Ruler } from 'lucide-react';

interface CircuitDetailsProps {
  circuit: Circuit;
}

const CircuitDetails: React.FC<CircuitDetailsProps> = ({ circuit }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="relative mb-6">
        <img
          src={circuit.imageUrl}
          alt={`${circuit.name} track layout`}
          className="w-full rounded-lg"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center">
            <Flag className="w-4 h-4 mr-2" />
            <span className="font-medium">{circuit.country}</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">{circuit.name}</h2>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        <span>Coordinates: {circuit.location.lat.toFixed(4)}, {circuit.location.lng.toFixed(4)}</span>
      </div>
      
      <p className="text-gray-700 mb-6">{circuit.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Trophy className="w-4 h-4 mr-2 text-yellow-600" />
            <span className="font-semibold">First Grand Prix</span>
          </div>
          <p>{circuit.firstGrandPrix}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="w-4 h-4 mr-2 text-blue-600" />
            <span className="font-semibold">Lap Record</span>
          </div>
          <p>{circuit.lapRecord.time}</p>
          <p className="text-sm text-gray-600">
            {circuit.lapRecord.driver} ({circuit.lapRecord.year})
          </p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-2 text-gray-600" />
            <div>
              <span className="font-semibold">Length:</span>
              <p>{circuit.length} km</p>
            </div>
          </div>
          <div>
            <span className="font-semibold">Turns:</span>
            <p>{circuit.turns}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CircuitDetails;