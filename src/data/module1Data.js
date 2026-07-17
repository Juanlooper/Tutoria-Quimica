export const rulesData = [
  {
    id: 'm1-rule1',
    title: 'Principio de Neutralidad Eléctrica',
    content: 'Un átomo en estado neutro posee un balance exacto de cargas. Esto implica que la cantidad de partículas subatómicas con carga positiva en el núcleo se contrarresta exactamente con la cantidad de partículas con carga negativa en la corteza.',
    note: 'Ecuación fundamental para átomos neutros: $\\text{Protones } (p^+) = \\text{Electrones } (e^-)$. La alteración de este balance genera la formación de iones.'
  },
  {
    id: 'm1-rule2',
    title: 'El Número Atómico ($Z$)',
    content: 'El número atómico, denotado como $Z$, representa la cantidad absoluta de protones en el núcleo de un átomo. Esta magnitud es la que define la identidad química del elemento en la tabla periódica.',
    note: 'Ecuación fundamental: $Z = p^+$. Este valor es invariante para un elemento específico.'
  },
  {
    id: 'm1-rule3',
    title: 'El Número de Masa ($A$)',
    content: 'El número de masa, denotado como $A$, corresponde a la suma total de nucleones (protones y neutrones) presentes en el núcleo atómico, donde se concentra virtualmente toda la masa del átomo.',
    note: 'Ecuación fundamental: $A = p^+ + n^0$. Debe ser siempre un número entero y no debe confundirse con la masa atómica promedio.'
  }
];

export const examplesData = [
  {
    id: 'm1-ex1',
    title: 'Ejemplo 1: Cálculo de Partículas Subatómicas',
    problem: 'Determinar el número de protones, neutrones y electrones para un átomo de Magnesio ($Mg$) neutro, cuyo número atómico es $Z = 12$ y su número de masa es $A = 25$.',
    analysis: 'El procedimiento requiere la aplicación sistemática de las definiciones de $Z$ y $A$ para deducir las variables desconocidas.',
    steps: [
      'Protones: Basado en la definición, $p^+ = Z$. Por lo tanto, $p^+ = 12$.',
      'Electrones: Dado el estado neutro, $e^- = p^+$. Por lo tanto, $e^- = 12$.',
      'Neutrones: Utilizando la ecuación $A = p^+ + n^0$, se despeja $n^0 = A - p^+$. Resultando en $n^0 = 25 - 12 = 13$.'
    ]
  },
  {
    id: 'm1-ex2',
    title: 'Ejemplo 2: Definición Estructural de Isótopos',
    problem: 'Analizar las especies químicas Carbono-12 (${}^{12}_{6}\\text{C}$), Carbono-13 (${}^{13}_{6}\\text{C}$) y Carbono-14 (${}^{14}_{6}\\text{C}$). Identificar sus similitudes y diferencias a nivel subatómico.',
    analysis: 'Se requiere contrastar las variables fundamentales ($Z$ y $A$) para comprender la naturaleza de las especies isotópicas.',
    steps: [
      'Similitudes: Todas las especies poseen el mismo número atómico ($Z = 6$), lo que indica que tienen 6 protones. Al ser neutros, también poseen 6 electrones. Constituyen el mismo elemento químico.',
      'Diferencias: El número de masa ($A$) varía (12, 13 y 14 respectivamente).',
      'Conclusión: Dado que el número de protones es constante, la variación en $A$ se debe exclusivamente a un número diferente de neutrones (6, 7 y 8 neutrones respectivamente).'
    ]
  },
  {
    id: 'm1-ex3',
    title: 'Ejemplo 3: Análisis de Isóbaros',
    problem: 'El Argón-40 (${}^{40}_{18}\\text{Ar}$) y el Calcio-40 (${}^{40}_{20}\\text{Ca}$) poseen el mismo número de masa ($A = 40$). ¿Constituyen estas especies isótopos del mismo elemento? Justifique su respuesta.',
    analysis: 'Se evalúa la distinción estricta entre número de masa e identidad química.',
    steps: [
      'Definición: Los isótopos son átomos del mismo elemento, por tanto, requieren poseer el mismo número atómico ($Z$).',
      'Evaluación: El Argón presenta $Z = 18$ mientras que el Calcio presenta $Z = 20$.',
      'Conclusión: Al diferir en su número atómico, son elementos distintos. Las especies de distintos elementos con idéntico número de masa se denominan isóbaros.'
    ]
  },
  {
    id: 'm1-ex4',
    title: 'Ejemplo 4: Deducción de Identidad Isotópica',
    problem: 'Una especie atómica "X" presenta $Z=17$ y $A=35$. Una especie atómica neutra "Y" contiene 17 electrones y 20 neutrones. Determinar la relación estructural entre ambas especies.',
    analysis: 'Se requiere calcular las variables fundamentales de la especie "Y" antes de poder establecer una comparativa.',
    steps: [
      'Análisis de la especie X: Posee $Z=17$ (17 protones) y $A=35$.',
      'Análisis de la especie Y: Al ser una especie neutra con 17 electrones, se deduce que posee 17 protones ($Z=17$).',
      'Cálculo de masa para Y: $A = \\text{protones} + \\text{neutrones} = 17 + 20 = 37$.',
      'Comparativa: Ambas especies comparten $Z=17$ (Cloro), pero difieren en su número de masa (35 frente a 37).',
      'Conclusión: Las especies X e Y son isótopos del mismo elemento.'
    ]
  },
  {
    id: 'm1-ex5',
    title: 'Ejemplo 5: Transmutación Nuclear Isotópica',
    problem: 'Se aísla una muestra del isótopo inestable Uranio-238 (${}^{238}_{92}\\text{U}$). Dicho núcleo experimenta una transmutación alfa (pérdida de un núcleo de Helio, ${}^{4}_{2}\\text{He}$) seguida de dos emisiones beta (cada una equivalente a la conversión de un neutrón en un protón con expulsión de un electrón). Determine el número atómico ($Z$) y de masa ($A$) del isótopo resultante y evalúe si la especie final es un isótopo del Uranio original.',
    analysis: 'Se requiere realizar un balance algebraico de nucleones a través de eventos radiactivos sucesivos.',
    steps: [
      'Identificación inicial: Para el ${}^{238}_{92}\\text{U}$, $Z_0 = 92$ y $A_0 = 238$.',
      'Análisis de Emisión Alfa: La pérdida de una partícula alfa (${}^{4}_{2}\\text{He}$) sustrae 2 protones y 4 unidades de masa. $Z_1 = 92 - 2 = 90$, y $A_1 = 238 - 4 = 234$. La especie transitoria es ${}^{234}_{90}\\text{Th}$ (Torio).',
      'Análisis de Emisiones Beta: Cada emisión beta transforma un neutrón en un protón. Al ocurrir dos emisiones beta consecutivas, el número atómico se incrementa en 2 unidades ($Z_2 = 90 + 2 = 92$), mientras que el número de masa permanece constante ($A_2 = 234$).',
      'Determinación del isótopo final: El núcleo resultante presenta $Z = 92$ y $A = 234$, correspondiendo al Uranio-234 (${}^{234}_{92}\\text{U}$).',
      'Conclusión: Al compartir idéntico número atómico ($Z=92$) pero distinto número de masa ($A=234$ frente a $238$), el producto final constituye efectivamente un isótopo de la especie original.'
    ]
  },
  {
    id: 'm1-ex6',
    title: 'Ejemplo 6: Partículas Subatómicas en Moléculas Poliatómicas Complejas',
    problem: 'Considere una molécula individual de Sacarosa ($C_{12}H_{22}O_{11}$). Asumiendo que todos los átomos en la molécula corresponden a los isótopos más abundantes (Carbono-12, Hidrógeno-1 y Oxígeno-16), determine el número total absoluto de protones, neutrones y electrones presentes en la molécula neutra.',
    analysis: 'En una molécula poliatómica, el conteo total de partículas requiere multiplicar las partículas de cada átomo por su coeficiente estequiométrico molecular y sumar los totales.',
    steps: [
      'Análisis por elemento: Carbono-12 ($Z=6$, $A=12$): $6p^+$, $6n^0$, $6e^-$. Hidrógeno-1 ($Z=1$, $A=1$): $1p^+$, $0n^0$, $1e^-$. Oxígeno-16 ($Z=8$, $A=16$): $8p^+$, $8n^0$, $8e^-$.',
      'Cálculo de Protones Totales: $(12 \\times 6) + (22 \\times 1) + (11 \\times 8) = 72 + 22 + 88 = 182\\text{ protones}$.',
      'Cálculo de Neutrones Totales: $(12 \\times 6) + (22 \\times 0) + (11 \\times 8) = 72 + 0 + 88 = 160\\text{ neutrones}$.',
      'Cálculo de Electrones Totales: Por el Principio de Neutralidad Eléctrica de la molécula intacta, electrones = protones = $182\\text{ electrones}$.',
      'Conclusión: Una sola molécula neutra de Sacarosa contiene $182p^+$, $160n^0$ y $182e^-$.'
    ]
  },
  {
    id: 'm1-ex7',
    title: 'Ejemplo 7: Estructura Subatómica de Cationes Poliatómicos',
    problem: 'Analice el ión Amonio ($NH_4^+$). Si se asumen los isótopos Nitrógeno-14 e Hidrógeno-1, cuantifique el número total de protones, neutrones y electrones en dicho ión.',
    analysis: 'La carga iónica de una especie poliatómica afecta exclusivamente a la población total de electrones del sistema, dejando intactos a los nucleones.',
    steps: [
      'Contabilidad de Protones: Nitrógeno aporta $7p^+$. Cuatro Hidrógenos aportan $4 \\times 1 = 4p^+$. Total de protones = $7 + 4 = 11p^+$.',
      'Contabilidad de Neutrones: Nitrógeno-14 aporta $14-7 = 7n^0$. Hidrógeno-1 aporta $0n^0$. Total de neutrones = $7n^0$.',
      'Contabilidad de Electrones: Si la especie fuera neutra, tendría $11e^-$. Al presentar una carga catiónica de $+1$, se ha expulsado un electrón. $e^- = 11 - 1 = 10e^-$.',
      'Conclusión: El ión Amonio cuenta con $11p^+$, $7n^0$ y $10e^-$.'
    ]
  },
  {
    id: 'm1-ex8',
    title: 'Ejemplo 8: Diferenciación Isotópica Estructural en Uranio',
    problem: 'El Uranio natural se compone mayoritariamente de U-235 y U-238. Exprese numéricamente la diferencia exacta en la cantidad de partículas fundamentales entre un átomo neutro de U-238 y uno de U-235.',
    analysis: 'La comparación estructural entre isótopos requiere evaluar invarianzas en $Z$ y varianzas en $A$.',
    steps: [
      'Constantes ($Z$): Para cualquier isótopo del Uranio, el número atómico es invariable, $Z = 92$. Por lo tanto, ambos poseen 92 protones y 92 electrones.',
      'Variables ($A$ y neutrones): El U-235 tiene $235 - 92 = 143n^0$. El U-238 tiene $238 - 92 = 146n^0$.',
      'Diferencial: $\\Delta p^+ = 0$. $\\Delta e^- = 0$. $\\Delta n^0 = 146 - 143 = +3$.',
      'Conclusión: Estructuralmente, un átomo de Uranio-238 difiere de uno de Uranio-235 únicamente por la adición neta de 3 neutrones en su núcleo atómico.'
    ]
  },
  {
    id: 'm1-ex9',
    title: 'Ejemplo 9: Deducción Inversa de Identidad por Partículas Totales',
    problem: 'Un anión trivalente ($X^{3-}$) está compuesto por un total de 106 partículas subatómicas fundamentales (protones + neutrones + electrones). Si la especie neutra original $X$ posee 4 neutrones más que protones, deduzca el número atómico ($Z$) y el símbolo del elemento.',
    analysis: 'Se requiere plantear un sistema de ecuaciones algebraico vinculando la suma de partículas con las relaciones de neutralidad y el exceso neutrónico.',
    steps: [
      'Identificación de variables: $p^+ = Z$. $n^0 = Z + 4$. $e^- = Z + 3$ (por ser anión con carga $-3$).',
      'Ecuación principal de partículas totales: $p^+ + n^0 + e^- = 106$.',
      'Sustitución en función de Z: $Z + (Z + 4) + (Z + 3) = 106$.',
      'Ajuste y Resolución: $3Z + 7 = 106 \\Rightarrow 3Z = 99 \\Rightarrow Z = 33$.',
      'Identificación: El elemento con $Z=33$ es el Arsénico ($As$). El anión es $As^{3-}$ (Arseniuro).'
    ]
  },
  {
    id: 'm1-ex10',
    title: 'Ejemplo 10: Invarianza de Masa ante la Ionización',
    problem: 'Se oxida un átomo de Hierro neutro ($Fe$, $Z=26$, $A=56$) para formar el catión Férrico ($Fe^{3+}$). Sabiendo que la masa de un nucleón es $\\approx 1.0\\text{ uma}$ y la de un electrón es $\\approx 0.00055\\text{ uma}$, calcule analíticamente la pérdida de masa fraccional que sufre el átomo. ¿Justifica esto por qué los electrones no se cuentan en $A$?',
    analysis: 'Se demostrará cuantitativamente el impacto insignificante de la corteza electrónica en la masa macroscópica de una especie.',
    steps: [
      'Pérdida de partículas: La oxidación a $Fe^{3+}$ implica exclusivamente la expulsión de 3 electrones de valencia.',
      'Masa absoluta expulsada: $3 \\times 0.00055\\text{ uma} = 0.00165\\text{ uma}$.',
      'Masa inicial teórica aproximada del átomo neutro: $\\approx 56\\text{ uma}$.',
      'Pérdida de masa fraccional: $\\frac{0.00165}{56} \\times 100 = 0.0029\\%$.',
      'Conclusión: El átomo pierde menos del 0.003% de su masa total. Por rigor analítico, la masa atómica $A$ desprecia totalmente el mínimo aporte electrónico.'
    ]
  }
];

export const practicesData = [
  {
    id: 'm1-prac1',
    title: 'Práctica 1: Deducción Inversa',
    statement: 'Una especie atómica desconocida contiene 26 protones, 30 neutrones y 26 electrones. Determinar sus valores correspondientes de $Z$ y $A$.',
    answer: '$Z = 26$, $A = 56$.',
    explanation: 'El número atómico $Z$ equivale a la cantidad de protones ($26$). El número de masa $A$ se calcula mediante la adición de protones y neutrones ($26 + 30 = 56$).'
  },
  {
    id: 'm1-prac2',
    title: 'Práctica 2: Evaluación de Identidad',
    statement: 'Se presentan dos especies atómicas neutras. La especie 1 contiene 9 protones y 10 neutrones. La especie 2 contiene 10 protones y 9 neutrones. Determinar si constituyen isótopos del mismo elemento.',
    answer: 'Negativo, no constituyen isótopos.',
    explanation: 'La condición necesaria para que dos especies sean isótopos es la igualdad en su número atómico ($Z$). La especie 1 posee $Z=9$ (Flúor) y la especie 2 posee $Z=10$ (Neón), constituyendo elementos químicamente distintos.'
  },
  {
    id: 'm1-prac3',
    title: 'Práctica 3: Despeje Algebraico de Neutrones',
    statement: 'Un isótopo específico de Plomo ($Pb$) posee un número de masa $A = 208$. Sabiendo que el número atómico referencial del Plomo es $Z = 82$, calcular la cantidad de neutrones en el núcleo de este isótopo.',
    answer: '126 neutrones.',
    explanation: 'Aplicando la ecuación $A = p^+ + n^0$ y conociendo que $p^+ = 82$ y $A = 208$, se procede a despejar: $n^0 = 208 - 82 = 126$.'
  },
  {
    id: 'm1-prac4',
    title: 'Práctica 4: Análisis de Variables Relativas',
    statement: 'Se analiza un elemento hipotético. Su isótopo Alfa contiene 50 neutrones. Su isótopo Beta presenta un número de masa $A = 90$ y contiene 2 neutrones adicionales en comparación con el isótopo Alfa. Determinar el número atómico ($Z$) del elemento.',
    answer: '$Z = 38$.',
    explanation: 'El isótopo Beta contiene $50 + 2 = 52$ neutrones. Dado que para la especie Beta $A = 90$, y conociendo la relación $A = Z + n^0$, se establece la igualdad $90 = Z + 52$. Despejando la variable resulta $Z = 90 - 52 = 38$. Por definición de isotopía, ambos comparten el mismo valor de $Z$.'
  },
  {
    id: 'm1-prac5',
    title: 'Práctica 5: Identificación de Especies Isoelectrónicas',
    statement: 'Un catión bivalente ($X^{2+}$) de una especie desconocida resulta ser isoelectrónico con el gas noble Argón ($Z=18$). Asimismo, un análisis espectrométrico revela que dicho isótopo presenta un número de masa equivalente al del Calcio-42 (${}^{42}_{20}\\text{Ca}$). Deduzca la identidad del elemento $X$ y cuantifique la población de nucleones neutros.',
    answer: 'El elemento es Calcio ($Ca$). Posee 22 neutrones.',
    explanation: 'La condición isoelectrónica implica que el catión $X^{2+}$ cuenta con 18 electrones. Dado que es un catión bivalente (pérdida de 2 electrones), el átomo neutro original poseía $18 + 2 = 20$ electrones. Por el Principio de Neutralidad Eléctrica, su número atómico es $Z = 20$, lo cual identifica a la especie unívocamente como Calcio ($Ca$). El enunciado establece un número de masa $A = 42$. La cuantificación de neutrones se determina mediante la ecuación fundamental: $n^0 = A - Z = 42 - 20 = 22$ neutrones.'
  },
  {
    id: 'm1-prac6',
    title: 'Práctica 6: Estructura del Anión Fosfato',
    statement: 'Calcule la cantidad total de protones y electrones en un solo ión Fosfato ($PO_4^{3-}$). Asuma isótopos Fósforo-31 y Oxígeno-16.',
    answer: 'Total: 47 protones y 50 electrones.',
    explanation: 'El Fósforo ($Z=15$) aporta 15 protones. Cada Oxígeno ($Z=8$) aporta 8 protones. Total de protones = $15 + (4 \\times 8) = 15 + 32 = 47p^+$. Si fuera neutro tendría 47 electrones, pero la carga es $3-$ (3 electrones extra), por lo que el total es $47 + 3 = 50e^-$.'
  },
  {
    id: 'm1-prac7',
    title: 'Práctica 7: Masas Subatómicas Exactas',
    statement: 'El isótopo de Litio-7 tiene exactamente 3 protones y 4 neutrones. Sabiendo que $m_p = 1.00727\\text{ uma}$ y $m_n = 1.00866\\text{ uma}$, y despreciando el defecto de masa, ¿cuál sería la masa teórica estricta del núcleo del Litio-7?',
    answer: 'Masa teórica del núcleo = $7.05645\\text{ uma}$.',
    explanation: 'La masa teórica se obtiene sumando las masas individuales: Masa total de protones = $3 \\times 1.00727 = 3.02181\\text{ uma}$. Masa total de neutrones = $4 \\times 1.00866 = 4.03464\\text{ uma}$. Sumatoria final: $3.02181 + 4.03464 = 7.05645\\text{ uma}$.'
  },
  {
    id: 'm1-prac8',
    title: 'Práctica 8: Series Isoelectrónicas Múltiples',
    statement: 'Se identifican tres especies químicas isoelectrónicas entre sí: el anión cloruro ($Cl^-$), el catión potasio ($K^+$) y un átomo neutro desconocido "Y". Deduzca la identidad del átomo "Y" y su número de protones.',
    answer: 'El átomo "Y" es el Argón ($Ar$) con 18 protones.',
    explanation: 'El Cloro neutro ($Z=17$) gana 1 electrón para formar $Cl^-$, totalizando $18e^-$. El Potasio neutro ($Z=19$) pierde 1 electrón para formar $K^+$, totalizando $18e^-$. Por ende, la serie isoelectrónica requiere exactamente 18 electrones. Si "Y" es un átomo neutro con 18 electrones, por el Principio de Neutralidad Eléctrica posee 18 protones ($Z=18$). El elemento es el Argón.'
  },
  {
    id: 'm1-prac9',
    title: 'Práctica 9: Análisis de Isóbaros Pesados',
    statement: 'El Cadmio-114 (${}^{114}_{48}\\text{Cd}$) y el Estaño-114 (${}^{114}_{50}\\text{Sn}$) son isóbaros. Calcule la diferencia absoluta en el número de neutrones entre los núcleos de ambos átomos.',
    answer: 'La diferencia es de 2 neutrones.',
    explanation: 'Para el Cadmio-114: Neutrones = $A - Z = 114 - 48 = 66n^0$. Para el Estaño-114: Neutrones = $A - Z = 114 - 50 = 64n^0$. La diferencia absoluta es $66 - 64 = 2$ neutrones. Nótese que, al ser isóbaros (mismo $A$), cualquier incremento en protones debe compensarse con un decremento equivalente en neutrones.'
  },
  {
    id: 'm1-prac10',
    title: 'Práctica 10: Radiactividad y Balance de Partículas',
    statement: 'El isótopo Radón-222 (${}^{222}_{86}\\text{Rn}$) experimenta un decaimiento radioactivo emitiendo una partícula alfa (${}^{4}_{2}\\text{He}$). Diga cuántos electrones, protones y neutrones tendrá el átomo neutro del elemento resultante.',
    answer: 'El átomo neutro resultante ($Po-218$) tendrá $84e^-$, $84p^+$ y $134n^0$.',
    explanation: 'La emisión de una partícula alfa (${}^{4}_{2}\\text{He}$) resta 2 protones al núcleo. Por lo tanto, $Z_{nuevo} = 86 - 2 = 84$ protones. El nuevo elemento es Polonio ($Po$). Al ser un átomo neutro, tendrá 84 electrones. El número de masa disminuye en 4 unidades, resultando en $A_{nuevo} = 222 - 4 = 218$. Los neutrones se calculan como $A - Z = 218 - 84 = 134$ neutrones.'
  }
];

export const elementsData = [
  { symbol: 'H', z: 1, name: 'Hidrógeno', mass: 1 },
  { symbol: 'He', z: 2, name: 'Helio', mass: 4 },
  { symbol: 'Li', z: 3, name: 'Litio', mass: 7 },
  { symbol: 'Be', z: 4, name: 'Berilio', mass: 9 },
  { symbol: 'B', z: 5, name: 'Boro', mass: 11 },
  { symbol: 'C', z: 6, name: 'Carbono', mass: 12 },
  { symbol: 'N', z: 7, name: 'Nitrógeno', mass: 14 },
  { symbol: 'O', z: 8, name: 'Oxígeno', mass: 16 }
];
