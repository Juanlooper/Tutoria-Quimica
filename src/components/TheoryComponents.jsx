import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export const MarkdownMath = ({ children }) => (
  <ReactMarkdown 
    remarkPlugins={[remarkMath]} 
    rehypePlugins={[rehypeKatex]}
    components={{ p: React.Fragment }}
  >
    {children}
  </ReactMarkdown>
);

export const RuleCard = ({ title, content, note }) => (
  <div className="card">
    <h4 style={{ color: 'var(--color-primary)' }}>{title}</h4>
    <div style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
      <MarkdownMath>{content}</MarkdownMath>
    </div>
    {note && (
      <div style={{ 
        backgroundColor: '#F3F4F6', 
        padding: '0.75rem', 
        borderLeft: '4px solid var(--color-primary)',
        marginTop: '1rem',
        fontSize: '0.95rem'
      }}>
        <strong>Ojo:</strong> <MarkdownMath>{note}</MarkdownMath>
      </div>
    )}
  </div>
);

export const ExampleProblem = ({ title, problem, analysis, steps }) => (
  <div className="card" style={{ borderLeft: '4px solid var(--color-accent)' }}>
    <h4>{title}</h4>
    <div style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
      <strong>Problema:</strong> <MarkdownMath>{problem}</MarkdownMath>
    </div>
    {analysis && (
      <div style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '0.5rem' }}>
        <strong>Justificación Analítica:</strong> <MarkdownMath>{analysis}</MarkdownMath>
      </div>
    )}
    <div style={{ marginTop: '1rem' }}>
      <strong>Solución Paso a Paso:</strong>
      <ol style={{ marginLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
        {steps.map((step, index) => (
          <li key={index} style={{ marginBottom: '0.75rem' }}><MarkdownMath>{step}</MarkdownMath></li>
        ))}
      </ol>
    </div>
  </div>
);

export const PracticeProblem = ({ title, statement, answer, explanation }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="card">
      <h4>{title}</h4>
      <div style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
        <strong>Enunciado:</strong> <MarkdownMath>{statement}</MarkdownMath>
      </div>
      
      {!showAnswer ? (
        <button 
          className="btn btn-secondary" 
          style={{ marginTop: '1rem' }}
          onClick={() => setShowAnswer(true)}
        >
          Ver Respuesta
        </button>
      ) : (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: '#F0FDF4', 
          border: '1px solid var(--color-success)',
          borderRadius: '4px'
        }}>
          <div style={{ color: 'var(--color-success)', fontWeight: 600, marginBottom: '0.5rem', lineHeight: '1.6' }}>
            <MarkdownMath>{answer}</MarkdownMath>
          </div>
          <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>Procedimiento paso a paso:</strong>
            {(() => {
              if (Array.isArray(explanation)) {
                return (
                  <ol style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 0 0' }}>
                    {explanation.map((step, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <MarkdownMath>{step}</MarkdownMath>
                      </li>
                    ))}
                  </ol>
                );
              }
              if (typeof explanation === 'string') {
                let steps = explanation.split(/\.\s+/).filter(s => s.trim().length > 0);
                steps = steps.map(s => s.endsWith('.') ? s : s + '.');
                if (steps.length > 1) {
                  return (
                    <ol style={{ paddingLeft: '1.5rem', margin: '0.5rem 0 0 0' }}>
                      {steps.map((step, idx) => (
                        <li key={idx} style={{ marginBottom: '0.5rem' }}>
                          <MarkdownMath>{step}</MarkdownMath>
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <div style={{ marginTop: '0.5rem' }}>
                    <MarkdownMath>{explanation}</MarkdownMath>
                  </div>
                );
              }
              return null;
            })()}
          </div>
          <button 
            className="btn btn-secondary" 
            style={{ marginTop: '1rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
            onClick={() => setShowAnswer(false)}
          >
            Ocultar Respuesta
          </button>
        </div>
      )}
    </div>
  );
};
