import React, { useState, useEffect } from 'react';

const examples = [
  {
    id: 'water',
    name: 'Agua (H₂O)',
    element1: 'Hidrógeno (H₂)',
    element2: 'Oxígeno (O₂)',
    ratio: 8.0, // mass2 / mass1 = O / H = 8 / 1
    desc: '1 g de Hidrógeno por cada 8 g de Oxígeno (1:8)',
    defaultMass1: 2,
    defaultMass2: 16,
    max1: 20,
    max2: 100,
    maxProduct: 120,
    step1: 0.5,
    step2: 1
  },
  {
    id: 'co2',
    name: 'Dióxido de Carbono (CO₂)',
    element1: 'Carbono (C)',
    element2: 'Oxígeno (O₂)',
    ratio: 2.6667, // O / C = 32 / 12 = 8 / 3 ≈ 2.6667
    desc: '3 g de Carbono por cada 8 g de Oxígeno (3:8)',
    defaultMass1: 12,
    defaultMass2: 32,
    max1: 30,
    max2: 100,
    maxProduct: 130,
    step1: 0.5,
    step2: 1
  },
  {
    id: 'nh3',
    name: 'Amoníaco (NH₃)',
    element1: 'Nitrógeno (N₂)',
    element2: 'Hidrógeno (H₂)',
    ratio: 0.2143, // H / N = 3 / 14 ≈ 0.2143
    desc: '14 g de Nitrógeno por cada 3 g de Hidrógeno (14:3)',
    defaultMass1: 14,
    defaultMass2: 3,
    max1: 50,
    max2: 20,
    maxProduct: 70,
    step1: 0.5,
    step2: 0.1
  },
  {
    id: 'mgo',
    name: 'Óxido de Magnesio (MgO)',
    element1: 'Magnesio (Mg)',
    element2: 'Oxígeno (O₂)',
    ratio: 0.6584, // O / Mg = 16 / 24.305 ≈ 0.6584
    desc: '24.3 g de Magnesio por cada 16 g de Oxígeno (~3:2)',
    defaultMass1: 24.3,
    defaultMass2: 16,
    max1: 100,
    max2: 100,
    maxProduct: 200,
    step1: 1,
    step2: 1
  }
];

const DefiniteProportionsSimulator = () => {
  const [selectedExampleId, setSelectedExampleId] = useState(examples[0].id);
  
  const example = examples.find(ex => ex.id === selectedExampleId) || examples[0];

  const [mass1, setMass1] = useState(example.defaultMass1);
  const [mass2, setMass2] = useState(example.defaultMass2);

  useEffect(() => {
    setMass1(example.defaultMass1);
    setMass2(example.defaultMass2);
  }, [example.id]);

  const ratio = example.ratio;

  const required2ForAll1 = mass1 * ratio;
  
  let productMass = 0;
  let excess1 = 0;
  let excess2 = 0;

  if (required2ForAll1 <= mass2) {
    productMass = mass1 + required2ForAll1;
    excess2 = mass2 - required2ForAll1;
    excess1 = 0;
  } else {
    const required1ForAll2 = mass2 / ratio;
    productMass = mass2 + required1ForAll2;
    excess1 = mass1 - required1ForAll2;
    excess2 = 0;
  }

  const { maxProduct, max1, max2 } = example;

  return (
    <div className="card" style={{ backgroundColor: '#1E293B', color: 'white', borderColor: '#334155' }}>
      <div style={{ padding: '0 0 1rem 0' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: 'white' }}>
          Simulador de Proporciones Definidas
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
          Los elementos se combinan en proporciones fijas de masa.
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <label style={{ color: '#CBD5E1', fontSize: '0.875rem' }}>Seleccionar compuesto:</label>
          <select 
            value={selectedExampleId} 
            onChange={(e) => setSelectedExampleId(e.target.value)}
            style={{ 
              backgroundColor: '#0F172A', 
              color: 'white', 
              border: '1px solid #475569', 
              padding: '0.5rem', 
              borderRadius: '0.25rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {examples.map(ex => (
              <option key={ex.id} value={ex.id}>{ex.name}</option>
            ))}
          </select>
        </div>
        
        <p style={{ color: '#60A5FA', fontSize: '0.875rem', marginTop: '1rem', fontStyle: 'italic' }}>
          Proporción teórica: {example.desc}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', borderTop: '1px solid #334155', paddingTop: '1.5rem', '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
        
        {/* Controls */}
        <div>
          <div style={{ backgroundColor: '#334155', padding: '1.5rem', borderRadius: '0.75rem', borderLeft: '4px solid #60A5FA' }}>
            <h4 style={{ color: '#93C5FD', marginTop: 0, marginBottom: '1.5rem' }}>Reactivos Iniciales</h4>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                <span>Masa de {example.element1}</span>
                <span style={{ fontWeight: 'bold', color: 'white' }}>{mass1.toFixed(1)} g</span>
              </div>
              <input 
                type="range" 
                min="0" max={max1} step={example.step1} 
                value={mass1} 
                onChange={(e) => setMass1(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }} 
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                <span>Masa de {example.element2}</span>
                <span style={{ fontWeight: 'bold', color: 'white' }}>{mass2.toFixed(1)} g</span>
              </div>
              <input 
                type="range" 
                min="0" max={max2} step={example.step2} 
                value={mass2} 
                onChange={(e) => setMass2(Number(e.target.value))}
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
              <div style={{ width: '100%', backgroundColor: '#22D3EE', opacity: 0.8, height: `${Math.min(100, (productMass / maxProduct) * 100)}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: '#0F172A', fontWeight: 'bold', fontSize: '0.75rem', textShadow: '0px 0px 3px rgba(255,255,255,0.8)' }}>Producto</div>
            </div>
            
            <div style={{ width: '5rem', backgroundColor: '#1E293B', border: '2px dashed #475569', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', backgroundColor: '#93C5FD', opacity: 0.5, height: `${Math.min(100, (excess1 / max1) * 100)}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>Exceso 1</div>
            </div>

            <div style={{ width: '5rem', backgroundColor: '#1E293B', border: '2px dashed #475569', borderBottomLeftRadius: '0.75rem', borderBottomRightRadius: '0.75rem', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', backgroundColor: '#FCA5A5', opacity: 0.5, height: `${Math.min(100, (excess2 / max2) * 100)}%`, transition: 'height 0.5s ease-in-out' }}></div>
              <div style={{ position: 'absolute', width: '100%', textAlign: 'center', bottom: '0.5rem', color: 'white', fontWeight: 'bold', fontSize: '0.75rem' }}>Exceso 2</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'rgba(22, 78, 99, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#67E8F9' }}>Masa Producto</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{productMass.toFixed(1)} g</div>
            </div>
            <div style={{ backgroundColor: 'rgba(30, 58, 138, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#93C5FD' }}>Exceso {example.element1.split(' ')[0]}</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{excess1.toFixed(1)} g</div>
            </div>
            <div style={{ backgroundColor: 'rgba(127, 29, 29, 0.5)', padding: '0.5rem', borderRadius: '0.25rem' }}>
              <div style={{ fontSize: '0.65rem', color: '#FCA5A5' }}>Exceso {example.element2.split(' ')[0]}</div>
              <div style={{ fontWeight: 'bold', color: 'white', fontSize: '1.125rem' }}>{excess2.toFixed(1)} g</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DefiniteProportionsSimulator;

