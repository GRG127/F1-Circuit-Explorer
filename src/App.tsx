import React, { useState } from 'react';
import { Map } from 'lucide-react';
import CircuitMap from './components/CircuitMap';
import CircuitDetails from './components/CircuitDetails';
import { circuits } from './data/circuits';
import { Circuit } from './types/circuit';

function App() {
  const [selectedCircuit, setSelectedCircuit] = useState<Circuit | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Map className="w-8 h-8 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">F1 Circuit Explorer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CircuitMap
              circuits={circuits}
              onCircuitSelect={setSelectedCircuit}
            />
          </div>
          <div>
            {selectedCircuit ? (
              <CircuitDetails circuit={selectedCircuit} />
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Circuit
                </h3>
                <p className="text-gray-600">
                  Click on any circuit marker on the map to view it's details.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;