import React from 'react';
import { RuleCard, ExampleProblem, PracticeProblem } from '../components/TheoryComponents';
import DefiniteProportionsSimulator from '../components/DefiniteProportionsSimulator';
import { module3Rules, module3Examples, module3Practices } from '../data/module3Data';

const Module3 = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Módulo 3: Leyes Ponderales Clásicas</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Fundamentos de Lavoisier y Proust en la conservación de la masa.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Fundamento Teórico</h2>
        <p>Análisis de sistemas químicos cerrados y estequiometría de reactivos limitantes.</p>
        
        {module3Rules.map(rule => (
          <RuleCard 
            key={rule.id}
            title={rule.title}
            content={rule.content}
            note={rule.note}
          />
        ))}
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <DefiniteProportionsSimulator />
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Problemas de Ejemplo</h2>
        <p>Análisis estructurado y aplicación de las Leyes Ponderales en sistemas termodinámicos.</p>
        
        {module3Examples.map(ex => (
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
        <p>Ejercicios de evaluación enfocados en el cálculo estequiométrico avanzado.</p>
        
        {module3Practices.map(prac => (
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

export default Module3;
