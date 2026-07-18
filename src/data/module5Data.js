export const module5Rules = [
  {
    id: 'm5-rule1',
    title: 'Anatomía de una Ecuación Química',
    content: 'Una ecuación química es la representación simbólica de una reacción. Los reactivos se escriben a la izquierda y los productos a la derecha, separados por una flecha ($\\rightarrow$) que indica la dirección de la reacción. Cada sustancia se representa con su fórmula química.',
    note: 'Significado de los símbolos: Los subíndices (ej. $O_2$) indican el número de átomos de ese elemento en la molécula y NO deben modificarse al balancear. Las letras entre paréntesis indican el estado de agregación: (s) sólido, (l) líquido, (g) gas, (aq) acuoso.'
  },
  {
    id: 'm5-rule2',
    title: 'Coeficientes Estequiométricos y Balanceo',
    content: 'Para cumplir con la Ley de Conservación de la Masa (Lavoisier), la cantidad de átomos de cada elemento debe ser igual en los reactivos y en los productos. Para lograr esto, se colocan números enteros grandes delante de las fórmulas, llamados coeficientes estequiométricos.',
    note: 'El coeficiente multiplica a toda la molécula. Por ejemplo, en $3H_2O$, el 3 indica que hay 3 moléculas de agua, lo que resulta en un total de $3 \\times 2 = 6$ átomos de Hidrógeno y $3 \\times 1 = 3$ átomos de Oxígeno.'
  },
  {
    id: 'm5-rule3',
    title: 'Proporciones Estequiométricas',
    content: 'Los coeficientes de una ecuación balanceada no solo indican la proporción de moléculas, sino también la proporción en moles. Esta proporción molar es la base de todos los cálculos estequiométricos.',
    note: 'Ejemplo: En $N_2 + 3H_2 \\rightarrow 2NH_3$, la proporción es 1 mol de $N_2$ reacciona con 3 moles de $H_2$ para producir 2 moles de $NH_3$. Esta relación $1:3:2$ se mantiene constante para cualquier cantidad de sustancia.'
  }
];

export const module5Examples = [
  {
    id: 'm5-ex1',
    title: 'Ejemplo 1: Interpretación de una Ecuación',
    problem: 'Explique el significado completo de la siguiente ecuación: $CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(l)$.',
    analysis: 'Se debe desglosar la ecuación identificando reactivos, productos, coeficientes, subíndices y estados de agregación.',
    steps: [
      'Identificación de sustancias: Reactivos = Metano ($CH_4$) y Oxígeno ($O_2$). Productos = Dióxido de Carbono ($CO_2$) y Agua ($H_2O$).',
      'Estados físicos: (g) indica que metano, oxígeno y dióxido de carbono son gases. (l) indica que el agua es líquida.',
      'Lectura molecular: 1 molécula de metano reacciona con 2 moléculas de oxígeno para formar 1 molécula de dióxido de carbono y 2 moléculas de agua.',
      'Lectura molar: 1 mol de gas metano reacciona con 2 moles de gas oxígeno para producir 1 mol de gas dióxido de carbono y 2 moles de agua líquida.'
    ]
  },
  {
    id: 'm5-ex2',
    title: 'Ejemplo 2: Balanceo por Tanteo',
    problem: 'Balancee la siguiente ecuación de combustión del etano: $C_2H_6 + O_2 \\rightarrow CO_2 + H_2O$.',
    analysis: 'El método de tanteo implica ajustar los coeficientes paso a paso, usualmente comenzando por el metal o elemento que aparece menos veces, dejando el Oxígeno y el Hidrógeno para el final.',
    steps: [
      'Balance de Carbono (C): Hay 2 átomos en reactivos y 1 en productos. Se coloca un 2 frente al $CO_2$. Ecuación parcial: $C_2H_6 + O_2 \\rightarrow 2CO_2 + H_2O$.',
      'Balance de Hidrógeno (H): Hay 6 átomos en reactivos y 2 en productos. Se coloca un 3 frente al $H_2O$. Ecuación parcial: $C_2H_6 + O_2 \\rightarrow 2CO_2 + 3H_2O$.',
      'Balance de Oxígeno (O): En productos hay $(2 \\times 2) + (3 \\times 1) = 7$ átomos. En reactivos hay 2. Se necesita un coeficiente de $7/2$ para el $O_2$.',
      'Eliminación de fracciones: Se multiplica toda la ecuación por 2 para tener coeficientes enteros. Resultado: $2C_2H_6 + 7O_2 \\rightarrow 4CO_2 + 6H_2O$.'
    ]
  },
  {
    id: 'm5-ex3',
    title: 'Ejemplo 3: Proporciones Molares',
    problem: 'Dada la reacción balanceada $4Fe + 3O_2 \\rightarrow 2Fe_2O_3$, ¿cuántos moles de $O_2$ se necesitan para que reaccionen completamente $2.5\\text{ moles}$ de Hierro ($Fe$)?',
    analysis: 'Se utiliza la proporción estequiométrica (los coeficientes de la ecuación) como factor de conversión entre las especies químicas.',
    steps: [
      'Establecer la proporción teórica: Según la ecuación, 4 moles de $Fe$ reaccionan con 3 moles de $O_2$.',
      'Formular el factor de conversión: $\\frac{3\\text{ moles } O_2}{4\\text{ moles } Fe}$.',
      'Aplicar el factor a la cantidad dada: $2.5\\text{ moles } Fe \\times \\frac{3\\text{ moles } O_2}{4\\text{ moles } Fe}$.',
      'Cálculo final: $2.5 \\times 0.75 = 1.875\\text{ moles de } O_2$.'
    ]
  }
];

export const module5Practices = [
  {
    id: 'm5-prac1',
    title: 'Práctica 1: Significado de los Subíndices y Coeficientes',
    statement: 'En la fórmula $3Ca_3(PO_4)_2$, determine el número total de átomos de Fósforo (P) y de Oxígeno (O).',
    answer: 'Total: 6 átomos de Fósforo y 24 átomos de Oxígeno.',
    explanation: 'El subíndice fuera del paréntesis multiplica lo de adentro: en una sola molécula hay $1 \\times 2 = 2$ átomos de P y $4 \\times 2 = 8$ átomos de O. Luego, el coeficiente 3 multiplica a toda la molécula: Total P = $3 \\times 2 = 6$. Total O = $3 \\times 8 = 24$.'
  },
  {
    id: 'm5-prac2',
    title: 'Práctica 2: Balanceo Simple',
    statement: 'Balancee la síntesis del amoníaco: $N_2 + H_2 \\rightarrow NH_3$ e indique la suma total de los coeficientes estequiométricos.',
    answer: 'Ecuación balanceada: $N_2 + 3H_2 \\rightarrow 2NH_3$. Suma de coeficientes = 6.',
    explanation: 'Para balancear el nitrógeno, colocamos un 2 frente al $NH_3$ ($N_2 + H_2 \\rightarrow 2NH_3$). Ahora hay 6 átomos de hidrógeno en los productos, por lo que colocamos un 3 frente al $H_2$ en los reactivos. La ecuación queda $1N_2 + 3H_2 \\rightarrow 2NH_3$. La suma de los coeficientes es $1 + 3 + 2 = 6$.'
  },
  {
    id: 'm5-prac3',
    title: 'Práctica 3: Uso de la Proporción',
    statement: 'Para la reacción $2KClO_3 \\rightarrow 2KCl + 3O_2$, ¿cuántos moles de $KClO_3$ se descomponen si se producen exactamente $6.0\\text{ moles}$ de $O_2$?',
    answer: 'Se descomponen $4.0\\text{ moles}$ de $KClO_3$.',
    explanation: 'La relación molar según la ecuación es de 2 moles de $KClO_3$ por cada 3 moles de $O_2$. Aplicamos la proporción: $6.0\\text{ moles } O_2 \\times \\frac{2\\text{ moles } KClO_3}{3\\text{ moles } O_2} = \\frac{12.0}{3} = 4.0\\text{ moles de } KClO_3$.'
  }
];
