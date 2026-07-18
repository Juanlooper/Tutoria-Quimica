import React from 'react';
import { RuleCard, ExampleProblem, PracticeProblem } from '../components/TheoryComponents';
import StoichiometryConversions from '../components/StoichiometryConversions';
import { module4Rules, module4Examples, module4Practices } from '../data/module4Data';

const Module4 = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Módulo 4: Conversiones con Mol, Masa molar y Volumen molar</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Fundamentos cuantitativos químicos y análisis estequiométrico.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Fundamento Teórico</h2>
        <p>El mol como unidad base del Sistema Internacional y conversiones estequiométricas.</p>
        
        {module4Rules.map(rule => (
          <RuleCard 
            key={rule.id}
            title={rule.title}
            content={rule.content}
            note={rule.note}
          />
        ))}
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <StoichiometryConversions />
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Problemas de Ejemplo</h2>
        <p>Aplicación rigurosa del análisis dimensional continuo para conversiones cuantitativas.</p>
        
        {module4Examples.map(ex => (
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
        <p>Ejercicios de validación enfocados en el dominio de la interconversión molar.</p>
        
        {module4Practices.map(prac => (
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

export default Module4;
