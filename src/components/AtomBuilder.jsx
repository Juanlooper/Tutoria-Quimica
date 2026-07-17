import React, { useState, useEffect } from 'react';
import { elementsData } from '../data/module1Data';

const AtomBuilder = () => {
  const [selectedElement, setSelectedElement] = useState(elementsData[4]); // Oxígeno default
  const [mass, setMass] = useState(selectedElement.defaultA);
  
  // Update mass if element changes
  const handleElementChange = (e) => {
    const el = elementsData.find(el => el.symbol === e.target.value);
    if (el) {
      setSelectedElement(el);
      setMass(el.defaultA);
    }
  };

  const handleMassChange = (e) => {
    setMass(Number(e.target.value));
  };

  const protons = selectedElement.z;
  const electrons = selectedElement.z; // assuming neutral
  const neutrons = mass - protons;
  
  const hasError = mass < protons;

  return (
    <div className="card atom-builder-card">
      <h3 style={{ textAlign: 'center', color: 'var(--color-primary)' }}>Simulador: Construye tu Átomo</h3>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Elemento:</label>
          <select 
            value={selectedElement.symbol} 
            onChange={handleElementChange}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}
          >
            {elementsData.map(el => (
              <option key={el.symbol} value={el.symbol}>
                {el.name} ({el.symbol})
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Masa (A):</label>
          <input 
            type="number" 
            value={mass} 
            onChange={handleMassChange}
            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem', width: '80px' }}
          />
        </div>
      </div>

      {hasError && (
        <div className="alert-error">
          ¡Error Físico! El número de masa (A) no puede ser menor que el número de protones (Z). Necesitas al menos la misma cantidad de masa que de protones.
        </div>
      )}

      <div className="atom-display">
        <div className="atom-numbers">
          <div>{mass}</div>
          <div>{protons}</div>
        </div>
        <div className="atom-symbol-huge">
          {selectedElement.symbol}
        </div>
      </div>

      <div className="gauges-container">
        <div className="gauge">
          <div className="gauge-value">{protons}</div>
          <div className="gauge-label">Protones (p⁺)</div>
        </div>
        <div className="gauge">
          <div className="gauge-value" style={{ color: hasError ? 'var(--color-error)' : 'var(--color-text-main)' }}>
            {neutrons}
          </div>
          <div className="gauge-label">Neutrones (n⁰)</div>
        </div>
        <div className="gauge">
          <div className="gauge-value">{electrons}</div>
          <div className="gauge-label">Electrones (e⁻)</div>
        </div>
      </div>
    </div>
  );
};

export default AtomBuilder;
