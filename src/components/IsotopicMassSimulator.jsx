import React, { useState } from 'react';

const IsotopicMassSimulator = () => {
  const [percentA, setPercentA] = useState(75);
  const percentB = 100 - percentA;

  // Mass A = 35, Mass B = 37 (Cloro example)
  const massA = 35.0;
  const massB = 37.0;

  const averageMass = ((massA * percentA) + (massB * percentB)) / 100;

  return (
    <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
      <h3 style={{ textAlign: 'center', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
        Simulador de Masa Atómica Promedio
      </h3>
      <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        El promedio ponderado se desplaza matemáticamente hacia el isótopo con mayor porcentaje de abundancia natural.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center', width: '30%' }}>
          <div style={{ fontWeight: 'bold', color: '#0369A1' }}>Isótopo Ligerio (35 uma)</div>
          <div style={{ fontSize: '1.5rem', color: '#0284C7' }}>{percentA}%</div>
        </div>
        
        <div style={{ textAlign: 'center', width: '40%' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Masa Promedio
          </div>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            {averageMass.toFixed(3)} uma
          </div>
        </div>

        <div style={{ textAlign: 'center', width: '30%' }}>
          <div style={{ fontWeight: 'bold', color: '#B45309' }}>Isótopo Pesado (37 uma)</div>
          <div style={{ fontSize: '1.5rem', color: '#D97706' }}>{percentB}%</div>
        </div>
      </div>

      <div style={{ padding: '0 2rem' }}>
        <input 
          type="range" 
          min="0" max="100" 
          value={percentA} 
          onChange={(e) => setPercentA(Number(e.target.value))}
          style={{ width: '100%', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.5rem' }}>
          <span>100% Ligerio</span>
          <span>50/50</span>
          <span>100% Pesado</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px dashed #CBD5E1' }}>
        <div style={{ fontFamily: 'monospace', textAlign: 'center', color: '#334155' }}>
          Masa Promedio = (35.0 × {percentA/100}) + (37.0 × {percentB/100}) = {averageMass.toFixed(3)}
        </div>
      </div>
    </div>
  );
};

export default IsotopicMassSimulator;
