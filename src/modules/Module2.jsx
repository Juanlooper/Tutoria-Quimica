import React from 'react';
import { RuleCard, ExampleProblem, PracticeProblem, MarkdownMath } from '../components/TheoryComponents';
import IsotopicMassSimulator from '../components/IsotopicMassSimulator';
import { module2Rules, module2Examples, module2Practices } from '../data/module2Data';

const Module2 = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Módulo 2: Masas Atómicas (Relativa vs. Promedio)</h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
          Entiende la diferencia clave entre la masa de un átomo y el promedio de la tabla periódica.
        </p>
      </header>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Teoría Fundamental y Avanzada</h2>
        {module2Rules.map(rule => (
          <RuleCard 
            key={rule.id}
            title={rule.title}
            content={rule.content}
            note={rule.note}
          />
        ))}

        <div className="card" style={{ backgroundColor: '#F0F9FF', borderLeft: '4px solid #0284C7' }}>
          <h4 style={{ color: '#0284C7' }}>Ecuación Analítica para Masa Promedio</h4>
          <div style={{ fontSize: '1.2rem', textAlign: 'center', margin: '1rem 0', color: '#0369A1' }}>
            <MarkdownMath>
              {`$M_{\\text{promedio}} = \\frac{(\\text{Masa}_1 \\times \\%_1) + (\\text{Masa}_2 \\times \\%_2) + \\dots}{100}$`}
            </MarkdownMath>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#0369A1' }}>
            (Nota: El uso de abundancias fraccionales decimales omite la necesidad de dividir entre 100).
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Simulación Interactiva: Equilibrio Isotópico</h2>
        <p>El cálculo de la masa promedio puede visualizarse como un sistema en equilibrio. Ajuste las abundancias relativas para analizar la desviación de la masa teórica.</p>
        <IsotopicMassSimulator />
      </section>

      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2>Problemas de Ejemplo</h2>
        <p>Análisis detallado paso a paso para la resolución estructurada de problemas tipo.</p>
        
        {module2Examples.map(ex => (
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
        <p>Ejercicios diseñados para evaluar la retención de los principios estequiométricos fundamentales.</p>
        
        {module2Practices.map(prac => (
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

export default Module2;
