import React from 'react';
import { RuleCard, ExampleProblem, PracticeProblem } from '../components/TheoryComponents';
import { module5Rules, module5Examples, module5Practices } from '../data/module5Data';

const Module5 = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Módulo 5: Ecuaciones Químicas, Balanceo y Proporciones</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Interpretación de reacciones, la ley de conservación aplicada y estequiometría molar.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Fundamento Teórico</h2>
        <p>Anatomía de las ecuaciones químicas y los principios del balanceo de materia.</p>
        
        {module5Rules.map(rule => (
          <RuleCard 
            key={rule.id}
            title={rule.title}
            content={rule.content}
            note={rule.note}
          />
        ))}
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Problemas de Ejemplo</h2>
        <p>Ejemplos guiados sobre cómo leer, balancear y extraer proporciones de las ecuaciones.</p>
        
        {module5Examples.map(ex => (
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
        <h2>Problemas de Práctica</h2>
        <p>Ejercicios para fortalecer el dominio sobre el balanceo y el uso de coeficientes.</p>
        
        {module5Practices.map(prac => (
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

export default Module5;
