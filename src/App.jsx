import React, { useState } from 'react';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';

function App() {
  const [activeModule, setActiveModule] = useState(1);

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Global Navigation with Dropdown */}
      <nav className="navbar" style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem 2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary-dark)', fontFamily: 'var(--font-serif)' }}>
          Fundamentos de Química
        </div>
        
        <div>
          <select 
            className="navbar-select"
            value={activeModule}
            onChange={(e) => setActiveModule(Number(e.target.value))}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              border: '1px solid #CBD5E1',
              backgroundColor: 'white',
              color: 'var(--color-text-main)',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              outline: 'none',
              minWidth: '250px'
            }}
          >
            {[
              { id: 1, title: "Módulo 1: Número atómico, masa, neutrones, electrones e isótopos" },
              { id: 2, title: "Módulo 2: Masa atómica relativa y masa atómica promedio" },
              { id: 3, title: "Módulo 3: Ley de conservación de la masa y proporción constante" },
              { id: 4, title: "Módulo 4: Conversiones con Mol, Masa molar y Volumen molar" }
            ].map((mod) => (
              <option key={mod.id} value={mod.id}>
                {mod.title}
              </option>
            ))}
          </select>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem 1rem' }}>
        {activeModule === 1 && <Module1 />}
        {activeModule === 2 && <Module2 />}
        {activeModule === 3 && <Module3 />}
        {activeModule === 4 && <Module4 />}
      </main>

    </div>
  );
}

export default App;
