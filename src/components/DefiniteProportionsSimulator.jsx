import React, { useState } from 'react';

const DefiniteProportionsSimulator = () => {
  const [massH, setMassH] = useState(2);
  const [massO, setMassO] = useState(16);

  // Proust proportion: 1g H needs 8g O (H:O = 1:8)
  const ratio = 8.0;

  const requiredOForAllH = massH * ratio;
  
  let productMass = 0;
  let excessH = 0;
  let excessO = 0;

  if (requiredOForAllH <= massO) {
    productMass = massH + requiredOForAllH;
    excessO = massO - requiredOForAllH;
    excessH = 0;
  } else {
    const requiredHForAllO = massO / ratio;
    productMass = massO + requiredHForAllO;
    excessH = massH - requiredHForAllO;
    excessO = 0;
  }

  const maxProduct = 180;
  const maxExcessH = 20;
  const maxExcessO = 100;

  return (
    <div className="card" style={{ backgroundColor: '#1E293B', color: 'white', borderColor: '#334155' }}>
      <div style={{ padding: '0 0 1rem 0' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: 'white' }}>
          Simulador de Proporciones Definidas
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Los elementos se combinan en proporciones fijas de masa. En el caso del agua ($H_2O$), la proporción teórica es siempre <strong>1 g de Hidrógeno por cada 8 g de Oxígeno (1:8)</strong>.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', borderTop: '1px solid #334155', paddingTop: '1.5rem', '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
        
        {/* Controls */}
        <div>
          <div style={{ backgroundColor: '#334155', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #60A5FA' }}>
            <h4 style={{ color: '#93C5FD', marginTop: 0, marginBottom: '1.5rem' }}>Reactivos Iniciales</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                <span>Masa de Hidrógeno ($H_2$)</span>
                <span style={{ fontWeight: 'bold', color: 'white' }}>{massH.toFixed(1)} g</span>
              </div>
              <input 
                type="range" 
                min="0" max="20" step="0.5" 
                value={massH} 
                onChange={(e) => setMassH(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }} 
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                <span>Masa de Oxígeno ($O_2$)</span>
                <span style={{ fontWeight: 'bold', color: 'white' }}>{massO.toFixed(1)} g</span>
              </div>
              <input 
                type="range" 
                min="0" max="100" step="1" 
                value={massO} 
                onChange={(e) => setMassO(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }} 
              />
            </div>
          </div>
        </div>

        {/* Visual Results */}
        <div style={{ backgroundColor: '#0F172A', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #334155', position: 'relative' }}>
          <h4 style={{ textAlign: 'center', color: '#CBD5E1', margin: '0 0 1.5rem 0', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            Resultados Teóricos
          </h4>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: '12rem', marginBottom: '1.5rem', borderBottom: '2px solid #334155', paddingBottom: '0.5rem' }}>
            
            <div style={{ width: '5rem', backgroundColor: '#1E293B', border: '2px solid #475569', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', backgroundColor: '#22D3EE', opacity: 0.8, height: `${(productMass / maxProduct) * 100}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: '#0F172A', fontWeight: 'bold', fontSize: '0.75rem', textShadow: '0px 0px 3px rgba(255,255,255,0.8)' }}>Producto</div>
            </div>
            
            <div style={{ width: '5rem', backgroundColor: '#1E293B', border: '2px dashed #475569', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', backgroundColor: '#93C5FD', opacity: 0.5, height: `${(excessH / maxExcessH) * 100}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>Exceso H</div>
            </div>

            <div style={{ width: '5rem', backgroundColor: '#1E293B', border: '2px dashed #475569', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', backgroundColor: '#FCA5A5', opacity: 0.5, height: `${(excessO / maxExcessO) * 100}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>Exceso O</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(22, 78, 99, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#67E8F9' }}>Masa Producto</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{productMass.toFixed(1)} g</div>
            </div>
            <div style={{ backgroundColor: 'rgba(30, 58, 138, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#93C5FD' }}>Reactivo Exceso (H)</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{excessH.toFixed(1)} g</div>
            </div>
            <div style={{ backgroundColor: 'rgba(127, 29, 29, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#FCA5A5' }}>Reactivo Exceso (O)</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{excessO.toFixed(1)} g</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DefiniteProportionsSimulator;
