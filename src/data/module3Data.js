export const module3Rules = [
  {
    id: 'm3-rule1',
    title: 'Ley de la Conservación de la Masa (Lavoisier, 1789)',
    content: 'Este principio establece que en un sistema aislado (cerrado) durante una reacción química ordinaria, la masa total del sistema permanece constante. Matemáticamente, la sumatoria de las masas de los reactivos equivale rigurosamente a la sumatoria de las masas de los productos ($\\Sigma \\text{Masa}_{Reactivos} = \\Sigma \\text{Masa}_{Productos}$).',
    note: 'Análisis de Sistemas Abiertos: En sistemas no confinados, la pérdida aparente de masa se atribuye invariablemente a la fuga de productos en fase gaseosa (ej. $CO_2$ o vapor de agua). La masa no desaparece, simplemente se dispersa en el entorno.'
  },
  {
    id: 'm3-rule2',
    title: 'Ley de las Proporciones Definidas (Proust, 1799)',
    content: 'Postula que muestras diferentes de un mismo compuesto químico puro contienen siempre los mismos elementos en idéntica proporción de masa. A modo de ilustración, el agua pura ($H_2O$) mantiene una relación constante de masa de $1\\text{ g}$ de Hidrógeno por cada $8\\text{ g}$ de Oxígeno (Razón $1:8$), independientemente de su método de síntesis.',
    note: 'Limitación Estequiométrica: La alteración arbitraria de proporciones iniciales de reactivos no modifica la composición del producto final. El elemento que se consume en su totalidad se denomina reactivo limitante, mientras que la masa sobrante del otro elemento constituye el reactivo en exceso.'
  },
  {
    id: 'm3-rule3',
    title: 'El Mol y la Masa Molar',
    content: 'El mol es la unidad básica del SI para medir la cantidad de sustancia. Un mol contiene exactamente el número de Avogadro ($6.022 \\times 10^{23}$) de entidades elementales (átomos, moléculas, iones). La masa molar es la masa de un mol de una sustancia, expresada en g/mol, y es numéricamente equivalente a su masa atómica o molecular en uma.',
    note: 'Conversión fundamental: Masa (g) $\\leftrightarrow$ Moles (mol) $\\leftrightarrow$ Número de partículas (átomos/moléculas). Para convertir masa a moles se divide entre la masa molar; para convertir moles a partículas se multiplica por el número de Avogadro.'
  }
];

export const module3Examples = [
  {
    id: 'm3-ex1',
    title: 'Ejemplo 1: Aplicación de la Ley de Lavoisier en Sistemas Abiertos',
    problem: 'En un reactor químico abierto al ambiente, se someten a pirólisis $50\\text{ g}$ de Carbonato de Calcio ($CaCO_3$). Finalizada la reacción, el residuo sólido (Óxido de Calcio, $CaO$) presenta una masa de $28\\text{ g}$. Determine la masa del gas liberado.',
    analysis: 'La resolución demanda la aplicación del balance de materia considerando la fuga volumétrica de un componente gaseoso.',
    steps: [
      'Planteamiento del balance de materia: $\\Sigma \\text{Masa}_{reactivos} = \\Sigma \\text{Masa}_{productos}$.',
      'Sustitución de variables: $50\\text{ g } (CaCO_3) = 28\\text{ g } (CaO) + \\text{Masa}_{gas}$.',
      'Despeje analítico: $\\text{Masa}_{gas} = 50 - 28 = 22\\text{ g}$.',
      'Conclusión: El sistema experimentó una pérdida de $22\\text{ g}$ atribuible a la volatilización del gas dióxido de carbono ($CO_2$).'
    ]
  },
  {
    id: 'm3-ex2',
    title: 'Ejemplo 2: Verificación Analítica mediante Ley de Proust',
    problem: 'Se evalúan dos muestras minerales. La Muestra A, compuesta de cobre y oxígeno, reporta $63.5\\text{ g}$ de Cu y $16.0\\text{ g}$ de O. La Muestra B reporta $127.0\\text{ g}$ de Cu y $32.0\\text{ g}$ de O. Determine mediante cálculo si ambas muestras corresponden a la misma especie química.',
    analysis: 'La demostración de identidad química requiere comprobar la equivalencia matemática de la razón de masa entre constituyentes.',
    steps: [
      'Establecimiento del criterio: La igualdad en las razones másicas confirmará la identidad del compuesto (Ley de Proporciones Definidas).',
      'Cálculo de la razón para la Muestra A: $\\frac{63.5}{16.0} = 3.968\\text{ (Razón Cu/O)}$.',
      'Cálculo de la razón para la Muestra B: $\\frac{127.0}{32.0} = 3.968$.',
      'Conclusión: La igualdad en las razones fraccionales demuestra que ambas muestras corresponden a la misma especie química (Óxido de Cobre II).'
    ]
  },
  {
    id: 'm3-ex3',
    title: 'Ejemplo 3: Cálculo de Composición Centesimal',
    problem: 'La literatura química reporta que el Metano ($CH_4$) mantiene una composición constante de $75\\%$ en masa de Carbono y $25\\%$ de Hidrógeno. Para la síntesis industrial de $200\\text{ g}$ de dicho gas, cuantifique la masa requerida de cada reactivo elemental.',
    analysis: 'El problema requiere la aplicación de las fracciones de composición porcentual a una masa total escalada.',
    steps: [
      'Postulado de Proust: La constancia proporcional permite extrapolar los porcentajes a cualquier volumen de masa total.',
      'Cálculo de la fracción de Carbono: $200\\text{ g} \\times 0.75 = 150\\text{ g}$ de Carbono.',
      'Cálculo de la fracción de Hidrógeno: $200\\text{ g} \\times 0.25 = 50\\text{ g}$ de Hidrógeno.',
      'Verificación mediante principio de Lavoisier: $150\\text{ g} + 50\\text{ g} = 200\\text{ g}$.',
      'Conclusión: La estequiometría de la reacción demanda exactamente $150\\text{ g}$ de C y $50\\text{ g}$ de H.'
    ]
  },
  {
    id: 'm3-ex4',
    title: 'Ejemplo 4: Conservación de Masa en Matriz Impura',
    problem: 'Se calcina al aire libre una muestra mineral de $120.0\\text{ g}$ que contiene Carbonato de Magnesio ($MgCO_3$) y arena inerte. Finalizada la descomposición térmica total del carbonato, el residuo sólido pesa $86.5\\text{ g}$. Si la reacción química pura es $MgCO_3 \\rightarrow MgO + CO_2\\uparrow$, y la masa molar del $MgCO_3$ es $84.3\\text{ g/mol}$ frente a $44.0\\text{ g/mol}$ del $CO_2$, calcule el porcentaje de pureza de la muestra mineral original.',
    analysis: 'El problema requiere aislar la masa del gas evaporado mediante Lavoisier, y a partir de esta, retroceder algebraicamente usando proporciones (Proust) para deducir la masa del reactivo activo.',
    steps: [
      'Aplicación de Lavoisier para el gas fugitivo: Toda pérdida de masa es exclusivamente atribuible al gas. $\\text{Masa}_{CO_2} = 120.0\\text{ g} - 86.5\\text{ g} = 33.5\\text{ g}$.',
      'Análisis de la proporción teórica: Por cada $84.3\\text{ g}$ de Carbonato puro que reacciona, se liberan $44.0\\text{ g}$ de $CO_2$.',
      'Cálculo de la masa de reactivo puro (Proust cruzado): $\\frac{\\text{Masa}_{MgCO_3}}{33.5\\text{ g } CO_2} = \\frac{84.3\\text{ g } MgCO_3}{44.0\\text{ g } CO_2}$.',
      'Despeje de la masa pura: $\\text{Masa}_{MgCO_3} = 33.5 \\times \\frac{84.3}{44.0} = 64.18\\text{ g}$.',
      'Cálculo de la pureza: $\\text{Porcentaje de pureza} = \\frac{64.18\\text{ g (puro)}}{120.0\\text{ g (muestra total)}} \\times 100 = 53.48\\%$.',
      'Conclusión: El mineral original tenía una ley de pureza del $53.48\\%$ de Carbonato, siendo el resto ($55.82\\text{ g}$) impurezas inertes.'
    ]
  },
  {
    id: 'm3-ex5',
    title: 'Ejemplo 5: Lavoisier en Reacción de Precipitación',
    problem: 'En un matraz sellado, se mezclan $50.0\\text{ g}$ de una solución de Nitrato de Plata ($AgNO_3$) con $50.0\\text{ g}$ de una solución de Cloruro de Sodio ($NaCl$). Tras la reacción, se forma un sólido blanco ($AgCl$) en el fondo y queda una fase disuelta ($NaNO_3$). Determine la masa total del matraz al finalizar el experimento.',
    analysis: 'El principio de Lavoisier no discrimina entre fases (sólido, líquido o gas) siempre que el sistema esté termodinámicamente aislado o confinado.',
    steps: [
      'Identificación del sistema: El matraz está sellado (sistema cerrado). No hay fuga ni ingreso de masa.',
      'Suma de la masa inicial: $\\text{Masa}_{AgNO_3 (aq)} + \\text{Masa}_{NaCl (aq)} = 50.0\\text{ g} + 50.0\\text{ g} = 100.0\\text{ g}$.',
      'Aplicación del axioma de conservación: $\\Sigma \\text{Masa}_{Final} = \\Sigma \\text{Masa}_{Inicial}$.',
      'Masa final del sistema: El precipitado más la solución residual sumarán idénticamente $100.0\\text{ g}$.',
      'Conclusión: En reacciones confinadas donde cambian las fases, la masa macroscópica se preserva con exactitud del 100%.'
    ]
  },
  {
    id: 'm3-ex6',
    title: 'Ejemplo 6: Conservación de Masa Secuencial',
    problem: 'Se somete a descomposición térmica $100.0\\text{ g}$ de un mineral hipotético $AB_2C$. En una primera etapa a $200^\\circ\\text{C}$, pierde gas $C$, dejando un sólido $AB_2$ que pesa $80.0\\text{ g}$. En una segunda etapa a $500^\\circ\\text{C}$, se descompone dejando un residuo sólido $A$ de $55.0\\text{ g}$. Determine la masa total de gases liberados.',
    analysis: 'La ley de Lavoisier es transitiva y aplicable a procesos de múltiples etapas secuenciales.',
    steps: [
      'Primera etapa (Gas C): La pérdida de masa se atribuye al gas. $\\text{Masa}_C = 100.0\\text{ g} - 80.0\\text{ g} = 20.0\\text{ g}$.',
      'Segunda etapa (Gas B_2): El sólido $AB_2$ pierde masa para dejar el residuo $A$. $\\text{Masa}_{B_2} = 80.0\\text{ g} - 55.0\\text{ g} = 25.0\\text{ g}$.',
      'Masa total de gases fugados: $20.0\\text{ g} + 25.0\\text{ g} = 45.0\\text{ g}$.',
      'Verificación global: $\\text{Residuo final} + \\text{Gases totales} = 55.0\\text{ g} + 45.0\\text{ g} = 100.0\\text{ g}$.'
    ]
  },
  {
    id: 'm3-ex7',
    title: 'Ejemplo 7: Proporciones Múltiples de Dalton',
    problem: 'Se analizan dos óxidos de Carbono. En el Óxido I ($CO$), por cada $12.01\\text{ g}$ de Carbono hay $16.00\\text{ g}$ de Oxígeno. En el Óxido II ($CO_2$), por cada $12.01\\text{ g}$ de Carbono hay $32.00\\text{ g}$ de Oxígeno. Demuestre que se cumple la Ley de Proporciones Múltiples.',
    analysis: 'La ley establece que si dos elementos forman más de un compuesto, las masas de uno que se combinan con una masa fija del otro guardan una relación de números enteros simples.',
    steps: [
      'Fijar la masa de referencia: Se establece el Carbono como masa fija ($12.01\\text{ g}$).',
      'Aislar las masas variables: La masa de Oxígeno en el Óxido I es $16.00\\text{ g}$. En el Óxido II es $32.00\\text{ g}$.',
      'Relacionar matemáticamente: Razón de masa de Oxígeno (Óxido II / Óxido I) = $\\frac{32.00}{16.00}$.',
      'Resolución de la razón: $\\frac{32.00}{16.00} = 2.00$.',
      'Conclusión: La razón es 2:1 (número entero simple). La ley queda demostrada.'
    ]
  },
  {
    id: 'm3-ex8',
    title: 'Ejemplo 8: Ley de Proust con Reactivos Comerciales',
    problem: 'Se exige mezclar Sodio ($Na$) y Cloro ($Cl_2$) en proporción de $1.00\\text{ g}$ Na : $1.54\\text{ g}$ de $Cl_2$. Si se dispone de $50.0\\text{ g}$ de $Na$, ¿cuántos gramos de reactivo comercial de Cloro al $80\\%$ de pureza se deben adquirir para que reaccione todo el Sodio?',
    analysis: 'Se amalgaman la ley de Proporciones Definidas con los ajustes prácticos de pureza.',
    steps: [
      'Escalamiento por Proust: $50.0\\text{ g}$ de Na requerirán: $50.0 \\times 1.54 = 77.0\\text{ g}$ de $Cl_2$ puro.',
      'Ajuste por impurezas: El reactivo es $80\\%$ puro, así que su masa debe ser mayor a $77.0\\text{ g}$.',
      'Cálculo de masa comercial: $\\text{Masa}_{comercial} = \\frac{\\text{Masa pura}}{\\text{Fracción de pureza}} = \\frac{77.0}{0.80}$.',
      'Resolución: $\\frac{77.0}{0.80} = 96.25\\text{ g}$.',
      'Conclusión: Se requieren $96.25\\text{ g}$ del reactivo impuro para suministrar los $77.0\\text{ g}$ puros necesarios.'
    ]
  },
  {
    id: 'm3-ex9',
    title: 'Ejemplo 9: Conservación de Masa con Rendimiento Químico',
    problem: 'Reaccionan $10.0\\text{ g}$ de reactivo A con $15.0\\text{ g}$ de reactivo B (estequiometría exacta). Si el rendimiento de la reacción es del $70\\%$, determine la masa de producto C y la masa de los reactivos remanentes. Verifique a Lavoisier.',
    analysis: 'Un rendimiento menor al 100% no implica destrucción de masa, sino que una fracción no se transforma en producto.',
    steps: [
      'Masa inicial total del sistema: $10.0\\text{ g} + 15.0\\text{ g} = 25.0\\text{ g}$.',
      'Producto teórico (Rendimiento 100%): Por Lavoisier, la conversión total daría $25.0\\text{ g}$ de C.',
      'Producto real (Rendimiento 70%): $25.0\\text{ g} \\times 0.70 = 17.5\\text{ g}$ de producto C.',
      'Reactivos sin reaccionar: El $30\\%$ inicial no se convirtió: $25.0\\text{ g} \\times 0.30 = 7.5\\text{ g}$.',
      'Verificación global: $\\text{Producto final} + \\text{Reactivos intactos} = 17.5\\text{ g} + 7.5\\text{ g} = 25.0\\text{ g}$. Lavoisier se cumple con rigor.'
    ]
  },
  {
    id: 'm3-ex10',
    title: 'Ejemplo 10: Cálculo de Masa Molar y Moles',
    problem: 'Determine la masa molar del ácido sulfúrico ($H_2SO_4$) y calcule cuántos moles hay en $49.0\\text{ g}$ de este compuesto. (Masas atómicas: $H = 1.01$, $S = 32.07$, $O = 16.00$).',
    analysis: 'Primero se debe calcular la masa molar sumando las masas atómicas de todos los elementos presentes en la fórmula, y luego usar este valor como factor de conversión.',
    steps: [
      'Cálculo de la masa molar: $(2 \\times 1.01) + (1 \\times 32.07) + (4 \\times 16.00)$.',
      'Resolución parcial: $2.02 + 32.07 + 64.00 = 98.09\\text{ g/mol}$.',
      'Conversión de masa a moles: Moles = $\\frac{\\text{Masa}}{\\text{Masa Molar}} = \\frac{49.0\\text{ g}}{98.09\\text{ g/mol}}$.',
      'Cálculo final: Moles = $0.4995\\text{ moles}$.',
      'Conclusión: En $49.0\\text{ g}$ de $H_2SO_4$ hay aproximadamente $0.5\\text{ moles}$ de la sustancia.'
    ]
  },
  {
    id: 'm3-ex11',
    title: 'Ejemplo 11: De Masa a Número de Moléculas y Átomos',
    problem: 'Una muestra contiene $9.0\\text{ g}$ de agua ($H_2O$). ¿Cuántas moléculas de agua hay en la muestra? ¿Cuántos átomos de hidrógeno en total? (Masa molar $H_2O = 18.02\\text{ g/mol}$).',
    analysis: 'Se requiere una conversión en dos pasos: primero de masa a moles usando la masa molar, y luego de moles a moléculas usando el número de Avogadro ($6.022 \\times 10^{23}$).',
    steps: [
      'Conversión a moles: $\\frac{9.0\\text{ g}}{18.02\\text{ g/mol}} = 0.499\\text{ moles de } H_2O$.',
      'Conversión a moléculas: $0.499\\text{ moles} \\times (6.022 \\times 10^{23}\\text{ moléculas/mol}) = 3.01 \\times 10^{23}\\text{ moléculas}$.',
      'Análisis de la composición: Cada molécula de agua tiene 2 átomos de hidrógeno.',
      'Cálculo de átomos de H: $3.01 \\times 10^{23}\\text{ moléculas} \\times 2 = 6.02 \\times 10^{23}\\text{ átomos de H}$.'
    ]
  }
];

export const module3Practices = [
  {
    id: 'm3-prac1',
    title: 'Práctica 1: Análisis de Estequiometría Limitante',
    statement: 'La estequiometría de formación del Sulfuro de Hierro ($FeS$) requiere $7\\text{ g}$ de Hierro por cada $4\\text{ g}$ de Azufre. Si en un reactor se combinan $14\\text{ g}$ de Hierro con $10\\text{ g}$ de Azufre, calcule la masa del producto obtenido y la masa del reactivo residual.',
    answer: 'Producto obtenido: $22\\text{ g}$ de $FeS$. Reactivo residual: $2\\text{ g}$ de Azufre.',
    explanation: 'Análisis proporcional: La razón teórica es $7\\text{ g Fe} : 4\\text{ g S}$. Operando con $14\\text{ g}$ de Hierro (factor de escala $2x$), la masa estequiométrica requerida de Azufre es de $4 \\times 2 = 8\\text{ g}$. Disponiendo de $10\\text{ g}$ de Azufre, este elemento actúa como reactivo en exceso. Masa remanente de Azufre = $10 - 8 = 2\\text{ g}$. Masa del producto = $14\\text{ g (Fe)} + 8\\text{ g (S)} = 22\\text{ g}$.'
  },
  {
    id: 'm3-prac2',
    title: 'Práctica 2: Balance de Materia Algebraico',
    statement: 'En un sistema termodinámicamente cerrado, reaccionan totalmente $X\\text{ g}$ de Sodio ($Na$) con $35.5\\text{ g}$ de Cloro diatómico ($Cl_2$) para producir exactamente $58.5\\text{ g}$ de Cloruro de Sodio ($NaCl$). Asumiendo conversión total y ausencia de reactivos residuales, determine el valor de la variable $X$.',
    answer: '$23.0\\text{ g}$ de Sodio.',
    explanation: 'Aplicación estricta del Principio de Conservación de la Masa: $\\Sigma \\text{Masa}_{reactivos} = \\Sigma \\text{Masa}_{productos}$. Matemáticamente: $X + 35.5 = 58.5$. Despejando la incógnita: $X = 58.5 - 35.5 = 23.0\\text{ g}$ de Sodio.'
  },
  {
    id: 'm3-prac3',
    title: 'Práctica 3: Ley de Proust con Composición Porcentual',
    statement: 'El Sulfuro de Plomo II ($PbS$) presenta sistemáticamente una fracción másica de Azufre equivalente al $13.4\\%$. Si de una muestra pura de este mineral se logró recuperar exitosamente $86.6\\text{ kg}$ de Plomo ($Pb$) metálico, calcule la masa original total de la muestra mineral.',
    answer: 'Masa original total: $100\\text{ kg}$.',
    explanation: 'Dado que el compuesto es binario, la fracción másica del Plomo equivale a la unidad menos la fracción del Azufre: $100\\% - 13.4\\% = 86.6\\%$. Si la fracción correspondiente al $86.6\\%$ equivale a $86.6\\text{ kg}$, el $100\\%$ (masa de la muestra) se obtiene dividiendo la masa parcial entre su fracción decimal: $\\frac{86.6\\text{ kg}}{0.866} = 100\\text{ kg}$.'
  },
  {
    id: 'm3-prac4',
    title: 'Práctica 4: Ley de Proporciones Múltiples (Dalton/Proust)',
    statement: 'Dos compuestos gaseosos distintos (Gas A y Gas B) están formados exclusivamente por Nitrógeno y Oxígeno. El Gas A contiene $63.65\\%$ de Nitrógeno por masa. El Gas B contiene $46.68\\%$ de Nitrógeno por masa. Calcule la razón de las masas de Oxígeno que se combinan con $1.000\\text{ g}$ de Nitrógeno en cada compuesto, y verifique si la relación entre estas masas es un número entero simple.',
    answer: 'La razón de masas de Oxígeno entre el Compuesto B y el A es exactamente 2. (Relación entera 2:1).',
    explanation: 'Para el Gas A: Si $N = 63.65\\%$, el $O = 36.35\\%$. La masa de Oxígeno por $1\\text{ g}$ de Nitrógeno es $\\frac{36.35}{63.65} = 0.571\\text{ g de O}$. Para el Gas B: Si $N = 46.68\\%$, el $O = 53.32\\%$. La masa de Oxígeno por $1\\text{ g}$ de Nitrógeno es $\\frac{53.32}{46.68} = 1.142\\text{ g de O}$. Al comparar ambas masas de Oxígeno relativas al mismo peso de Nitrógeno ($1\\text{ g}$): $\\frac{1.142}{0.571} = 2.00$. Esto demuestra empíricamente la Ley de Proporciones Múltiples.'
  },
  {
    id: 'm3-prac5',
    title: 'Práctica 5: Comprobación de Lavoisier con Reactivo Limitante',
    statement: 'En un contenedor hermético de reacción se introducen $40.0\\text{ g}$ de Magnesio metálico ($Mg$) y $50.0\\text{ g}$ de Oxígeno gaseoso ($O_2$) para formar Óxido de Magnesio ($MgO$). Si la proporción estequiométrica ideal establece que $24.3\\text{ g}$ de $Mg$ reaccionan exactamente con $16.0\\text{ g}$ de Oxígeno, calcule la masa total del producto obtenido y la masa del reactivo en exceso sobrante. Compruebe algebraicamente que se cumple la Ley de Lavoisier.',
    answer: 'Producto obtenido: $66.34\\text{ g}$. Reactivo residual: $23.66\\text{ g}$ de Oxígeno. La suma coincide con los $90.0\\text{ g}$ iniciales.',
    explanation: 'Evaluación del limitante: $40.0\\text{ g}$ de $Mg$ requerirían $40.0 \\times \\frac{16.0}{24.3} = 26.34\\text{ g}$ de $O_2$. Como se introdujeron $50.0\\text{ g}$ de Oxígeno, el $O_2$ es el reactivo en exceso y el Magnesio es el limitante. La reacción se detiene cuando los $40.0\\text{ g}$ de Magnesio se consumen completamente, acoplándose con $26.34\\text{ g}$ de Oxígeno. Masa del producto ($MgO$): $40.0 + 26.34 = 66.34\\text{ g}$. Masa de Oxígeno sobrante: $50.0 - 26.34 = 23.66\\text{ g}$. Comprobación de Lavoisier: $Masa_{inicial} = 40.0 + 50.0 = 90.0\\text{ g}$. $Masa_{final} = 66.34 (MgO) + 23.66 (O_2 residual) = 90.0\\text{ g}$.'
  },
  {
    id: 'm3-prac6',
    title: 'Práctica 6: Tríada de Proporciones Múltiples',
    statement: 'Existen tres óxidos de Nitrógeno ($N$). En $N_2O$, $28\\text{ g}$ de N se unen a $16\\text{ g}$ de O. En $NO$, $14\\text{ g}$ de N se unen a $16\\text{ g}$ de O. En $NO_2$, $14\\text{ g}$ de N se unen a $32\\text{ g}$ de O. Fije la masa de Nitrógeno en $14\\text{ g}$ para todos y demuestre la relación de números enteros para el Oxígeno.',
    answer: 'Al fijar el N en $14\\text{ g}$, las masas de Oxígeno son 8g, 16g y 32g. Razón (1:2:4).',
    explanation: 'Primero, estandarizamos el $N_2O$: Si $28\\text{ g}$ N se unen a $16\\text{ g}$ O, al dividir entre 2 obtenemos que $14\\text{ g}$ N se unen a $8\\text{ g}$ O. Para el $NO$, ya tenemos que $14\\text{ g}$ N se unen a $16\\text{ g}$ O. Para el $NO_2$, $14\\text{ g}$ N se unen a $32\\text{ g}$ O. Comparando las masas de Oxígeno ($8\\text{ g}$, $16\\text{ g}$, $32\\text{ g}$) con la masa fija de Nitrógeno ($14\\text{ g}$), y dividiendo todo entre el menor ($8\\text{ g}$), se obtiene la razón entera de 1:2:4. Esto corrobora la Ley de Dalton.'
  },
  {
    id: 'm3-prac7',
    title: 'Práctica 7: Combustión en Domo Hermético',
    statement: 'Se introducen $5.00\\text{ kg}$ de madera seca y $10.0\\text{ kg}$ de Oxígeno puro en una cápsula sellada de acero. Tras encender la madera con un láser, la reacción procede hasta extinguirse. Se recuperan $1.5\\text{ kg}$ de cenizas sólidas. Determine la masa total de la mezcla de gases en el interior de la cápsula.',
    answer: 'La mezcla de gases masará exactamente $13.5\\text{ kg}$.',
    explanation: 'Al tratarse de una cápsula sellada, estamos frente a un sistema termodinámicamente aislado donde no hay escape de masa. La masa inicial de reactivos es $5.0\\text{ kg} + 10.0\\text{ kg} = 15.0\\text{ kg}$. Por Lavoisier, la masa final debe ser obligatoriamente $15.0\\text{ kg}$. Restando la porción que se condensa como cenizas sólidas ($1.5\\text{ kg}$), los gases residuales ocupan la masa faltante: $15.0 - 1.5 = 13.5\\text{ kg}$.'
  },
  {
    id: 'm3-prac8',
    title: 'Práctica 8: Extracción de Menas y Ley de Proust',
    statement: 'La Hematita ($Fe_2O_3$) pura contiene un $69.94\\%$ de Hierro. Un yacimiento en Brasil y otro en Australia reportan poseer Hematita pura. Si de $200\\text{ Toneladas}$ de Brasil se extraen $139.88\\text{ Toneladas}$ de Hierro, ¿cuánto Hierro se extraerá de $50\\text{ Toneladas}$ de la mina australiana?',
    answer: 'Se extraerán exactamente $34.97\\text{ Toneladas}$ de Hierro.',
    explanation: 'Por la Ley de Proporciones Definidas (Proust), la procedencia geográfica de una especie química pura no altera su composición porcentual intrínseca. Si la Hematita es el mismo compuesto en Australia, su contenido en Hierro debe ser inexorablemente del $69.94\\%$. Para las $50\\text{ Toneladas}$, calculamos: $50\\text{ Ton} \\times 0.6994 = 34.97\\text{ Toneladas}$ de Hierro metálico extraíble.'
  },
  {
    id: 'm3-prac9',
    title: 'Práctica 9: Estequiometría Ponderal Simple',
    statement: 'En la síntesis de Bromuro de Aluminio ($AlBr_3$), la proporción fija de combinación es $1.0\\text{ g}$ de Aluminio ($Al$) por cada $8.89\\text{ g}$ de Bromo ($Br_2$). Si dispongo de $10.0\\text{ g}$ de Aluminio y exceso de Bromo, ¿qué masa total de Bromuro de Aluminio se formará?',
    answer: 'Se formarán $98.9\\text{ g}$ de Bromuro de Aluminio.',
    explanation: 'Primero determinamos por Proust cuánta masa de Bromo se consumirá. Si la razón es $1\\text{ g}$ Al : $8.89\\text{ g}$ Bromo, entonces $10.0\\text{ g}$ de Al reaccionarán exactamente con $10.0 \\times 8.89 = 88.9\\text{ g}$ de Bromo. Una vez conocidos ambos reactivos consumidos, aplicamos Lavoisier: la masa del producto será la sumatoria estricta de los reactivos activos. Masa de $AlBr_3$ = $10.0\\text{ g (Al)} + 88.9\\text{ g (Br)} = 98.9\\text{ g}$.'
  },
  {
    id: 'm3-prac10',
    title: 'Práctica 10: Composición Centesimal Intacta',
    statement: 'Un estudiante analiza Carbonato de Sodio ($Na_2CO_3$) y halla experimentalmente que contiene $43.38\\%$ de Sodio y $11.33\\%$ de Carbono. Asumiendo que su análisis es perfecto, ¿cuál debe ser inexorablemente el porcentaje en masa del Oxígeno en el compuesto?',
    answer: 'El Oxígeno debe constituir el $45.29\\%$ de la masa.',
    explanation: 'Este es un corolario directo de la conservación de la masa (Lavoisier) extrapolado a la composición de un compuesto (Proust). Si un compuesto se asume puro, la sumatoria de los porcentajes másicos de todos sus elementos constituyentes debe equivaler al $100\\%$ entero. Por ende, $\\% O = 100\\% - (43.38\\% + 11.33\\%) = 100\\% - 54.71\\% = 45.29\\%$.'
  },
  {
    id: 'm3-prac11',
    title: 'Práctica 11: Determinación de Moles desde la Masa',
    statement: 'Calcule la cantidad de moles presentes en una muestra de $100\\text{ g}$ de glucosa ($C_6H_{12}O_6$). Utilice las siguientes masas atómicas: C = 12.01, H = 1.01, O = 16.00.',
    answer: 'La muestra contiene $0.555\\text{ moles}$ de glucosa.',
    explanation: 'Primero determinamos la masa molar de la glucosa: $(6 \\times 12.01) + (12 \\times 1.01) + (6 \\times 16.00) = 72.06 + 12.12 + 96.00 = 180.18\\text{ g/mol}$. Luego dividimos la masa entre la masa molar: $\\frac{100\\text{ g}}{180.18\\text{ g/mol}} = 0.555\\text{ moles}$.'
  },
  {
    id: 'm3-prac12',
    title: 'Práctica 12: Cálculo de Átomos en un Elemento Puro',
    statement: 'Un anillo de oro puro de 24 quilates tiene una masa de $3.94\\text{ g}$. Si la masa molar del oro (Au) es $197.0\\text{ g/mol}$, ¿cuántos átomos de oro componen el anillo? ($N_A = 6.022 \\times 10^{23}$)',
    answer: 'El anillo está compuesto por $1.20 \\times 10^{22}$ átomos de oro.',
    explanation: 'Primero, se convierte la masa a moles: $\\frac{3.94\\text{ g}}{197.0\\text{ g/mol}} = 0.0200\\text{ moles}$. Segundo, se multiplica por el número de Avogadro: $0.0200\\text{ moles} \\times (6.022 \\times 10^{23}\\text{ átomos/mol}) = 1.2044 \\times 10^{22}\\text{ átomos}$.'
  }
];
