import React from 'react';
import AtomBuilder from '../components/AtomBuilder';
import { RuleCard, ExampleProblem, PracticeProblem } from '../components/TheoryComponents';
import { rulesData, examplesData, practicesData } from '../data/module1Data';

const Module1 = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Módulo 1: Anatomía del Átomo e Isótopos</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Fundamentos estructurales y caracterización isotópica.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>1. Teoría: Conceptos Fundamentales</h2>
        <p>
          El átomo se modela como un sistema dinámico sujeto a principios rigurosos de cuantificación de carga y masa. La comprensión de sus entidades subatómicas y sus relaciones matemáticas es esencial para el análisis estequiométrico avanzado.
        </p>
        
        <div className="card" style={{ backgroundColor: '#FAFAFA' }}>
          <h4>Estructura Bipartita del Átomo</h4>
          <p>El modelo atómico estándar se divide en dos regiones principales:</p>
          <ul>
            <li style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}><strong>Núcleo Atómico:</strong> Región central extremadamente densa con carga neta positiva. Contiene los nucleones (protones y neutrones) y concentra virtualmente la totalidad de la masa atómica.</li>
            <li style={{ marginLeft: '1.5rem' }}><strong>Corteza Electrónica:</strong> Espacio volumétrico periférico donde orbitan los electrones. Estas partículas elementales poseen masa despreciable y carga negativa.</li>
          </ul>
        </div>

        {rulesData.map(rule => (
          <RuleCard 
            key={rule.id}
            title={rule.title}
            content={rule.content}
            note={rule.note}
          />
        ))}
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>2. Simulación: Arquitectura Atómica</h2>
        <p>
          Herramienta computacional para analizar la relación entre las partículas subatómicas, el número de masa (A) y la identidad elemental.
        </p>
        <AtomBuilder />
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>3. Teoría: Isótopos</h2>
        <div className="card">
          <h4>Caracterización de Isótopos</h4>
          <p>
            Los isótopos son especies químicas correspondientes al mismo elemento que difieren exclusivamente en su masa atómica debido a una variación en la población de neutrones nucleares.
          </p>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--color-primary)', backgroundColor: '#F9FAFB', margin: '1rem 0' }}>
            <strong>Definición Formal:</strong><br />
            Átomos con idéntico número atómico ($Z$) pero diferente número de masa ($A$).
          </div>
          <p><strong>Ejemplo Analítico:</strong></p>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Carbono-12: 6 protones, 6 neutrones. (Isótopo estable primario).</li>
            <li>Carbono-14: 6 protones, 8 neutrones. (Isótopo radioactivo utilizado en datación radiométrica).</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>4. Problemas de Ejemplo</h2>
        <p>Resolución analítica paso a paso para ejercicios de deducción subatómica.</p>
        
        {examplesData.map(ex => (
          <ExampleProblem 
            key={ex.id}
            title={ex.title}
            problem={ex.problem}
            analysis={ex.analysis}
            steps={ex.steps}
          />
        ))}
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>5. Problemas de Práctica</h2>
        <p>Ejercicios de evaluación para validar la comprensión de los modelos teóricos.</p>
        
        {practicesData.map(prac => (
          <PracticeProblem 
            key={prac.id}
            title={prac.title}
            statement={prac.statement}
            answer={prac.answer}
            explanation={prac.explanation}
          />
        ))}
      </section>
      
      <footer style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--color-border)' }}>
        <p>© 2026 Tutoría de Química desarrollada por Juan Rodriguez.</p>
      </footer>
    </div>
  );
};

export default Module1;
