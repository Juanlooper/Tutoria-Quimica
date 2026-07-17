import React from 'react';
import { MarkdownMath } from './TheoryComponents';

const StoichiometryConversions = () => {
  return (
    <div className="card" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', padding: '2rem' }}>
      <h3 style={{ textAlign: 'center', color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
        Diagrama de Conversiones Estequiométricas
      </h3>
      <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        Las conversiones entre masa, volumen y número de partículas requieren invariablemente la normalización a moles.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        <div style={{
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          padding: '1.5rem 3rem',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: 'var(--shadow-md)',
          zIndex: 10,
          position: 'relative'
        }}>
          <MarkdownMath>MOL ($n$)</MarkdownMath>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%', maxWidth: '800px', position: 'relative' }}>
          
          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ height: '40px', width: '4px', backgroundColor: '#CBD5E1', margin: '0 auto' }}></div>
            <div style={{ backgroundColor: '#DBEAFE', padding: '1rem', borderRadius: '12px', border: '2px solid #3B82F6', textAlign: 'center', width: '100%' }}>
              <div style={{ fontWeight: 'bold', color: '#1E3A8A', marginBottom: '0.5rem' }}>Masa (g)</div>
              <div style={{ fontSize: '0.9rem', color: '#334155' }}>
                <strong>Factor:</strong> <MarkdownMath>Masa Molar ($M$)</MarkdownMath>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ height: '40px', width: '4px', backgroundColor: '#CBD5E1', margin: '0 auto' }}></div>
            <div style={{ backgroundColor: '#FEF3C7', padding: '1rem', borderRadius: '12px', border: '2px solid #F59E0B', textAlign: 'center', width: '100%' }}>
              <div style={{ fontWeight: 'bold', color: '#92400E', marginBottom: '0.5rem' }}>Entidades elementales</div>
              <div style={{ fontSize: '0.9rem', color: '#334155' }}>
                <strong>Factor:</strong> <MarkdownMath>Constante de Avogadro ($N_A$)</MarkdownMath>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ height: '40px', width: '4px', backgroundColor: '#CBD5E1', margin: '0 auto' }}></div>
            <div style={{ backgroundColor: '#D1FAE5', padding: '1rem', borderRadius: '12px', border: '2px solid #10B981', textAlign: 'center', width: '100%' }}>
              <div style={{ fontWeight: 'bold', color: '#064E3B', marginBottom: '0.5rem' }}>Volumen Gas (CNPT)</div>
              <div style={{ fontSize: '0.9rem', color: '#334155' }}>
                <strong>Factor:</strong> <MarkdownMath>Volumen Molar ($V_m$)</MarkdownMath>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StoichiometryConversions;
