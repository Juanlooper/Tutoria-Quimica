export const module2Rules = [
  {
    id: 'm2-rule1',
    title: 'Masa Atómica Relativa y la Unidad de Masa Atómica (uma)',
    content: 'La cuantificación de la masa de un átomo individual en gramos resulta impráctica debido a su magnitud microscópica (ej. un átomo de carbono posee una masa aproximada de $1.99 \\times 10^{-23}$ gramos). Se establece convencionalmente la Unidad de Masa Atómica (uma), definida como exactamente $1/12$ de la masa de un átomo de Carbono-12.',
    note: 'La masa isotópica de un átomo individual difiere ligeramente de su número de masa ($A$) debido al fenómeno físico del defecto de masa (ej. el Cloro-35 presenta una masa exacta de $34.968\\text{ uma}$).'
  },
  {
    id: 'm2-rule2',
    title: 'Determinación de la Masa Atómica Promedio',
    content: 'El valor de masa atómica reportado en la tabla periódica corresponde a la masa atómica promedio. Esta magnitud se calcula mediante un promedio ponderado de las masas exactas de todos los isótopos naturales de un elemento, considerando su abundancia fraccional relativa.',
    note: 'Ecuación general: $\\text{Masa Promedio} = \\Sigma (\\text{Masa}_{\\text{isótopo}} \\times \\text{Abundancia}_{\\text{fraccional}})$'
  },
  {
    id: 'm2-rule3',
    title: 'Fundamento Físico del Defecto de Masa',
    content: 'La discrepancia entre la masa de un isótopo (expresada en decimales) y la suma teórica de las masas de sus nucleones se explica por la equivalencia masa-energía de Einstein ($E = mc^2$). Durante la nucleosíntesis, una fracción de la masa original se convierte en energía de enlace nuclear.',
    note: 'Por este principio físico fundamental, el Carbono-12 es el único isótopo con una masa entera exacta (por definición axiomática).'
  }
];

export const module2Examples = [
  {
    id: 'm2-ex1',
    title: 'Ejemplo 1: Cálculo de Promedio Ponderado',
    problem: 'El Magnesio terrestre presenta tres isótopos estables:\nMg-24: masa $23.985\\text{ uma}$, abundancia $78.99\\%$\nMg-25: masa $24.985\\text{ uma}$, abundancia $10.00\\%$\nMg-26: masa $25.982\\text{ uma}$, abundancia $11.01\\%$\nDetermine la masa atómica promedio del elemento.',
    analysis: 'El cálculo requiere la conversión previa de los valores porcentuales a abundancia fraccional antes de aplicar la sumatoria.',
    steps: [
      'Conversión fraccional: $78.99\\% = 0.7899$; $10.00\\% = 0.1000$; $11.01\\% = 0.1101$.',
      'Aplicación del sumatorio: $\\text{Promedio} = (23.985 \\times 0.7899) + (24.985 \\times 0.1000) + (25.982 \\times 0.1101)$',
      'Resolución parcial: $18.945 + 2.498 + 2.860 = 24.303\\text{ uma}$.',
      'Verificación heurística: El resultado ($24.303$) es coherente, situándose más próximo al isótopo de mayor abundancia relativa (Mg-24).'
    ]
  },
  {
    id: 'm2-ex2',
    title: 'Ejemplo 2: Determinación Algebraica de Abundancia Isotópica',
    problem: 'El Boro presenta dos isótopos naturales: B-10 (masa $10.012\\text{ uma}$) y B-11 (masa $11.009\\text{ uma}$). Sabiendo que la masa atómica promedio del Boro es $10.811\\text{ uma}$, determine el porcentaje de abundancia de cada especie isotópica.',
    analysis: 'El sistema de ecuaciones se resuelve aplicando el principio de que la sumatoria de las fracciones de abundancia debe ser estrictamente igual a la unidad ($1$).',
    steps: [
      'Definición del sistema: Fracción B-10 = $x$. Fracción B-11 = $(1 - x)$.',
      'Planteamiento de la ecuación principal: $10.811 = (10.012 \\times x) + (11.009 \\times (1 - x))$.',
      'Distribución algebraica: $10.811 = 10.012x + 11.009 - 11.009x$.',
      'Agrupación de términos semejantes: $11.009x - 10.012x = 11.009 - 10.811$.',
      'Reducción: $0.997x = 0.198$.',
      'Resolución de $x$: $x = \\frac{0.198}{0.997} = 0.1986$ (Abundancia B-10 = $19.86\\%$).',
      'Determinación de B-11: $100\\% - 19.86\\% = 80.14\\%$.'
    ]
  },
  {
    id: 'm2-ex3',
    title: 'Ejemplo 3: Análisis de Datos Espectrométricos',
    problem: 'El análisis espectrométrico de masas de una muestra elemental pura reporta dos señales: una a masa 69 (intensidad relativa $60\\%$) y otra a masa 71 (intensidad relativa $40\\%$). Calcule el peso atómico promedio e identifique el elemento químico correspondiente.',
    analysis: 'Las señales del espectrómetro proveen los datos empíricos de masa isotópica y abundancia fraccional necesarios para la caracterización elemental.',
    steps: [
      'Extracción de datos de la Señal 1: Masa $69$, fracción $0.60$.',
      'Extracción de datos de la Señal 2: Masa $71$, fracción $0.40$.',
      'Cálculo analítico: $\\text{Promedio} = (69 \\times 0.60) + (71 \\times 0.40) = 41.4 + 28.4 = 69.8\\text{ uma}$.',
      'Identificación: Se contrasta el valor $69.8$ con los registros de la tabla periódica.',
      'Conclusión: El elemento cuyo peso atómico se aproxima a $69.723\\text{ uma}$ es el Galio (Ga).'
    ]
  },
  {
    id: 'm2-ex4',
    title: 'Ejemplo 4: Cuantificación del Defecto de Masa y Energía de Enlace',
    problem: 'El núcleo del isótopo Hierro-56 (${}^{56}_{26}\\text{Fe}$) posee una masa experimental exacta de $55.9349\\text{ uma}$. Si se asume que la masa de un protón libre es $1.0073\\text{ uma}$ y la de un neutrón libre es $1.0087\\text{ uma}$, calcule el defecto de masa ($\\Delta m$) y estime la energía de enlace nuclear (en MeV) considerando el factor de conversión $1\\text{ uma} \\approx 931.5\\text{ MeV}$.',
    analysis: 'Este problema integra la contabilidad de nucleones con la equivalencia masa-energía de Einstein, demostrando que la masa se conserva de manera relativista como energía.',
    steps: [
      'Contabilidad de nucleones: $Z=26$ protones. Neutrones = $A - Z = 56 - 26 = 30$ neutrones.',
      'Cálculo de la masa teórica de los nucleones aislados: $\\text{Masa}_{\\text{teórica}} = (26 \\times 1.0073) + (30 \\times 1.0087) = 26.1898 + 30.2610 = 56.4508\\text{ uma}$.',
      'Cálculo del defecto de masa ($\\Delta m$): $\\Delta m = \\text{Masa}_{\\text{teórica}} - \\text{Masa}_{\\text{experimental}} = 56.4508 - 55.9349 = 0.5159\\text{ uma}$.',
      'Conversión a Energía de Enlace (E): $E = \\Delta m \\times 931.5\\text{ MeV/uma} = 0.5159 \\times 931.5 = 480.56\\text{ MeV}$.',
      'Conclusión: Esta enorme cantidad de energía liberada por núcleo explica la estabilidad extrema del Hierro-56 en el universo.'
    ]
  },
  {
    id: 'm2-ex5',
    title: 'Ejemplo 5: Masa Molecular de Compuestos Iónicos Complejos',
    problem: 'Calcule la masa molecular exacta del Fosfato de Calcio, $Ca_3(PO_4)_2$. Utilice las masas atómicas estándar de la tabla periódica: $Ca = 40.08$, $P = 30.97$, $O = 16.00\\text{ uma}$.',
    analysis: 'El subíndice exterior al paréntesis multiplica a todos los átomos dentro del radical poliatómico.',
    steps: [
      'Análisis estequiométrico de la fórmula: La unidad fórmula contiene 3 átomos de $Ca$, 2 átomos de $P$ y $4 \\times 2 = 8$ átomos de $O$.',
      'Cálculo parcial del Calcio: $3 \\times 40.08 = 120.24\\text{ uma}$.',
      'Cálculo parcial del Fósforo: $2 \\times 30.97 = 61.94\\text{ uma}$.',
      'Cálculo parcial del Oxígeno: $8 \\times 16.00 = 128.00\\text{ uma}$.',
      'Sumatoria total: $120.24 + 61.94 + 128.00 = 310.18\\text{ uma}$.',
      'Conclusión: La masa molecular del Fosfato de Calcio es $310.18\\text{ uma}$.'
    ]
  },
  {
    id: 'm2-ex6',
    title: 'Ejemplo 6: Masa Molecular de Sales Hidratadas',
    problem: 'El Sulfato de Cobre(II) cristaliza formando un pentahidrato de color azul intenso, cuya fórmula química es $CuSO_4 \\cdot 5H_2O$. Determine la masa molecular del hidrato completo ($Cu=63.55$, $S=32.07$, $O=16.00$, $H=1.01$).',
    analysis: 'El punto en la fórmula indica agua de cristalización, por lo que la masa de las moléculas de agua debe sumarse a la masa de la sal anhidra.',
    steps: [
      'Masa de la sal anhidra ($CuSO_4$): $63.55 + 32.07 + (4 \\times 16.00) = 159.62\\text{ uma}$.',
      'Masa de una molécula de agua ($H_2O$): $(2 \\times 1.01) + 16.00 = 18.02\\text{ uma}$.',
      'Masa del agua de cristalización total: $5 \\times 18.02 = 90.10\\text{ uma}$.',
      'Masa molecular del hidrato: $159.62 + 90.10 = 249.72\\text{ uma}$.'
    ]
  },
  {
    id: 'm2-ex7',
    title: 'Ejemplo 7: Promedio Isotópico con Cuatro Especies',
    problem: 'El Hierro natural está compuesto por cuatro isótopos: Fe-54 ($53.940\\text{ uma}$, $5.845\\%$), Fe-56 ($55.935\\text{ uma}$, $91.754\\%$), Fe-57 ($56.935\\text{ uma}$, $2.119\\%$) y Fe-58 ($57.933\\text{ uma}$, $0.282\\%$). Demuestre el cálculo de su masa atómica promedio.',
    analysis: 'Se extiende el concepto de promedio ponderado a un sistema de múltiples componentes moleculares.',
    steps: [
      'Conversión fraccional: $0.05845$, $0.91754$, $0.02119$, y $0.00282$.',
      'Producto Fe-54: $53.940 \\times 0.05845 = 3.153$.',
      'Producto Fe-56: $55.935 \\times 0.91754 = 51.323$.',
      'Producto Fe-57: $56.935 \\times 0.02119 = 1.206$.',
      'Producto Fe-58: $57.933 \\times 0.00282 = 0.163$.',
      'Sumatoria (Masa Promedio): $3.153 + 51.323 + 1.206 + 0.163 = 55.845\\text{ uma}$.'
    ]
  },
  {
    id: 'm2-ex8',
    title: 'Ejemplo 8: Enriquecimiento Isotópico Artificial',
    problem: 'Una muestra de Uranio contiene originalmente $0.72\\%$ de U-235 ($235.04\\text{ uma}$) y $99.28\\%$ de U-238 ($238.05\\text{ uma}$). Si mediante centrifugación se enriquece la muestra hasta que el U-235 alcanza un $5.00\\%$, calcule la nueva masa atómica promedio de esta muestra alterada.',
    analysis: 'La masa atómica promedio no es una constante inmutable; depende estrictamente de la proporción isotópica de la muestra específica.',
    steps: [
      'Nuevas abundancias fraccionales: U-235 = $0.0500$; U-238 = $1 - 0.0500 = 0.9500$.',
      'Cálculo de la masa alterada: $\\text{Promedio} = (235.04 \\times 0.0500) + (238.05 \\times 0.9500)$.',
      'Resolución parcial: $11.752 + 226.148 = 237.90\\text{ uma}$.',
      'Comparativa: La masa natural es $\\approx 238.03\\text{ uma}$. El enriquecimiento ha aligerado la masa macroscópica de la muestra.'
    ]
  },
  {
    id: 'm2-ex9',
    title: 'Ejemplo 9: Identificación Espectrométrica Avanzada',
    problem: 'Un espectrómetro arroja tres picos de masa para un elemento monoatómico gaseoso: Masa 20 ($90.48\\%$), Masa 21 ($0.27\\%$) y Masa 22 ($9.25\\%$). Determine su masa promedio e identifique el gas noble.',
    analysis: 'Se integra la lectura de abundancias relativas desde intensidades de un espectro de masas.',
    steps: [
      'Productos parciales: $(20 \\times 0.9048) + (21 \\times 0.0027) + (22 \\times 0.0925)$.',
      'Suma: $18.096 + 0.0567 + 2.035 = 20.1877\\text{ uma}$.',
      'Identificación: El gas noble con masa atómica $\\approx 20.18\\text{ uma}$ es el Neón ($Ne$).'
    ]
  },
  {
    id: 'm2-ex10',
    title: 'Ejemplo 10: Sistema de Ecuaciones con Dos Incógnitas Isotópicas',
    problem: 'El elemento Cobre (Cu) tiene una masa atómica promedio de $63.546\\text{ uma}$ y está compuesto únicamente por dos isótopos: Cu-63 (masa de $62.929\\text{ uma}$) y Cu-65 (masa de $64.927\\text{ uma}$). Plantee y resuelva un sistema de ecuaciones con dos variables ($x$ e $y$) para descubrir la abundancia porcentual de cada isótopo.',
    analysis: 'Este escenario exige resolver un sistema lineal de dos ecuaciones simultáneas, donde la primera ecuación representa la suma de fracciones y la segunda la masa ponderada.',
    steps: [
      'Declaración de variables: Sea $x$ la fracción de abundancia del Cu-63 y sea $y$ la fracción de abundancia del Cu-65.',
      'Ecuación 1 (Conservación de materia): $x + y = 1$',
      'Ecuación 2 (Masa Ponderada): $62.929x + 64.927y = 63.546$',
      'Despeje en Ecuación 1: $y = 1 - x$',
      'Sustitución en Ecuación 2: $62.929x + 64.927(1 - x) = 63.546$',
      'Distribución matemática: $62.929x + 64.927 - 64.927x = 63.546$',
      'Agrupación de variables: $(62.929 - 64.927)x = 63.546 - 64.927$',
      'Resolución de la resta: $-1.998x = -1.381$',
      'Despeje de $x$: $x = \\frac{-1.381}{-1.998} = 0.6911$',
      'Cálculo de $y$: $y = 1 - 0.6911 = 0.3089$',
      'Conversión final a porcentajes: El isótopo Cu-63 tiene una abundancia del $69.11\\%$ y el Cu-65 del $30.89\\%$.'
    ]
  }
];

export const module2Practices = [
  {
    id: 'm2-prac1',
    title: 'Práctica 1: Resolución con Razones Proporcionales',
    statement: 'Un elemento presenta dos isótopos. El isótopo A posee una masa de $50\\text{ uma}$ y presenta una abundancia que cuadruplica la del isótopo B, cuya masa es de $55\\text{ uma}$. Determine la masa promedio del elemento.',
    answer: '$51\\text{ uma}$.',
    explanation: 'Dada la razón de proporcionalidad de 4:1, el sistema se divide en 5 partes totales. Por consiguiente, la fracción del isótopo A es $4/5$ ($0.80$) y la del isótopo B es $1/5$ ($0.20$). El cálculo resulta en: $(50 \\times 0.8) + (55 \\times 0.2) = 40 + 11 = 51\\text{ uma}$.'
  },
  {
    id: 'm2-prac2',
    title: 'Práctica 2: Despeje Analítico de Variables',
    statement: 'La masa promedio del Cloro reportada es $35.45\\text{ uma}$. El elemento posee dos isótopos: Cloro-35 (masa $34.97\\text{ uma}$) y Cloro-37 (masa $36.97\\text{ uma}$). Determine matemáticamente el porcentaje de abundancia del isótopo Cloro-37.',
    answer: '$24\\%$.',
    explanation: 'Estableciendo la variable $x$ como la abundancia del Cloro-37, la ecuación se formula como: $35.45 = (34.97 \\times (1 - x)) + (36.97 \\times x)$. Resolviendo algebraicamente: $35.45 = 34.97 - 34.97x + 36.97x \\Rightarrow 0.48 = 2x \\Rightarrow x = 0.24$. Resultando en un $24\\%$ de abundancia.'
  },
  {
    id: 'm2-prac3',
    title: 'Práctica 3: Sistema de Tres Especies Isotópicas',
    statement: 'El Silicio ($Si$) presenta los isótopos: Si-28 ($27.976\\text{ uma}$), Si-29 ($28.976\\text{ uma}$) y Si-30 ($29.973\\text{ uma}$). Si la abundancia analítica del Si-28 es $92.2\\%$ y la masa atómica promedio del elemento es $28.085\\text{ uma}$, determine el porcentaje de abundancia correspondiente al Si-29.',
    answer: '$4.67\\%$.',
    explanation: 'Descontando la fracción del Si-28 ($0.922$), resta una fracción de $0.078$ a distribuir. Definiendo $y$ como la fracción del Si-29, la fracción del Si-30 equivale a $(0.078 - y)$. La ecuación se establece: $28.085 = (27.976 \\times 0.922) + (28.976 \\times y) + (29.973 \\times (0.078 - y))$. La resolución de este sistema lineal entrega un valor de $y = 0.0467$, correspondiente a un $4.67\\%$.'
  },
  {
    id: 'm2-prac4',
    title: 'Práctica 4: Determinación de Masas Isotópicas Desconocidas',
    statement: 'Un elemento hipotético $X$ tiene una masa atómica promedio de $91.22\\text{ uma}$ y consta de dos isótopos estables. El isótopo pesado ($X-93$) tiene una masa exacta de $92.90\\text{ uma}$ y una abundancia del $22.0\\%$. Calcule la masa exacta del isótopo ligero a partir de estos datos e identifique qué elemento químico podría ser $X$ asumiendo que su $Z=40$.',
    answer: 'La masa del isótopo ligero es $90.75\\text{ uma}$. El elemento es Zirconio ($Zr$).',
    explanation: 'Si la abundancia del isótopo pesado es $22.0\\%$, la abundancia del isótopo ligero es el complemento: $100\\% - 22.0\\% = 78.0\\%$. Planteamos la ecuación de masa atómica promedio: $91.22 = (M_{\\text{ligero}} \\times 0.78) + (92.90 \\times 0.22)$. Resolviendo la multiplicación: $92.90 \\times 0.22 = 20.438$. Despejando: $0.78 M_{\\text{ligero}} = 91.22 - 20.438 = 70.782$. Finalmente, $M_{\\text{ligero}} = 70.782 / 0.78 = 90.746\\text{ uma}$. Consultando la tabla periódica, el elemento con $Z=40$ es el Zirconio ($Zr$).'
  },
  {
    id: 'm2-prac5',
    title: 'Práctica 5: Composición Centesimal en Minerales',
    statement: 'Calcule qué porcentaje de la masa total de la Magnetita ($Fe_3O_4$) corresponde estrictamente a Hierro ($Fe$). (Use $Fe=55.85$, $O=16.00$).',
    answer: 'La Magnetita contiene un $72.36\\%$ de Hierro por masa.',
    explanation: 'Primero, calculamos la masa molecular del mineral: $(3 \\times 55.85) + (4 \\times 16.00) = 167.55 + 64.00 = 231.55\\text{ uma}$. Luego, aislamos la porción de masa que proviene solo del Hierro: $167.55\\text{ uma}$. Finalmente, se obtiene el porcentaje: $\\frac{167.55}{231.55} \\times 100 = 72.36\\%$.'
  },
  {
    id: 'm2-prac6',
    title: 'Práctica 6: Porcentaje de Agua en un Hidrato',
    statement: 'Se analiza Cloruro de Bario dihidratado ($BaCl_2 \\cdot 2H_2O$). ¿Qué porcentaje del peso de este compuesto es agua pura? ($Ba=137.33$, $Cl=35.45$, $H=1.01$, $O=16.00$).',
    answer: 'El agua representa el $14.75\\%$ de la masa del hidrato.',
    explanation: 'Masa de la sal anhidra ($BaCl_2$): $137.33 + (2 \\times 35.45) = 208.23\\text{ uma}$. Masa del agua ($2H_2O$): $2 \\times 18.02 = 36.04\\text{ uma}$. Masa total = $208.23 + 36.04 = 244.27\\text{ uma}$. Porcentaje de agua = $\\frac{36.04}{244.27} \\times 100 = 14.75\\%$.'
  },
  {
    id: 'm2-prac7',
    title: 'Práctica 7: Ecuación Isotópica Trinomia',
    statement: 'Un elemento tiene 3 isótopos con masas de $20$, $21$ y $22\\text{ uma}$. La masa promedio es $20.2\\text{ uma}$. Si se sabe que la abundancia del isótopo de masa 21 es exactamente el doble de la del isótopo de masa 22, calcule la abundancia del isótopo de masa 20.',
    answer: 'La abundancia del isótopo 20 es del $88\\%$.',
    explanation: 'Sean las fracciones: $x$ para el de masa 22, $2x$ para el de masa 21, y $y$ para el de masa 20. Sabemos que $y = 1 - 3x$. La ecuación de masa es: $20.2 = 22x + 21(2x) + 20(1 - 3x)$. Expandiendo: $20.2 = 22x + 42x + 20 - 60x$. Simplificando: $20.2 = 20 + 4x$. Despejando: $0.2 = 4x \\Rightarrow x = 0.05$. El isótopo de masa 22 es $5\\%$, el de masa 21 es $10\\%$. El de masa 20 es $100\\% - 15\\% = 88\\%$.'
  },
  {
    id: 'm2-prac8',
    title: 'Práctica 8: Peso Molecular de una Macromolécula',
    statement: 'Una proteína teórica simplificada tiene una fórmula química $C_{400}H_{620}N_{100}O_{120}S_5$. Calcule su masa molecular exacta. ($C=12.01$, $H=1.01$, $N=14.01$, $O=16.00$, $S=32.07$).',
    answer: 'Masa molecular = $8911.35\\text{ uma}$.',
    explanation: 'Se suman las contribuciones de cada elemento multiplicadas por sus subíndices: Carbono ($400 \\times 12.01 = 4804.00$), Hidrógeno ($620 \\times 1.01 = 626.20$), Nitrógeno ($100 \\times 14.01 = 1401.00$), Oxígeno ($120 \\times 16.00 = 1920.00$), Azufre ($5 \\times 32.07 = 160.35$). Total = $4804 + 626.2 + 1401 + 1920 + 160.35 = 8911.35\\text{ uma}$.'
  },
  {
    id: 'm2-prac9',
    title: 'Práctica 9: Isótopos y el Espectrómetro',
    statement: 'Al inyectar Litio natural en un espectrómetro, el pico de masa 7 es $12.5$ veces más alto (más intenso) que el pico de masa 6. ¿Cuál es el porcentaje de abundancia del Litio-6?',
    answer: 'La abundancia del Litio-6 es $7.41\\%$.',
    explanation: 'Si la intensidad del Li-7 es 12.5 veces la del Li-6, establecemos una razón de proporciones directas. Por cada átomo de Li-6, existen 12.5 átomos de Li-7. El total de partículas relativas en la muestra es $1 + 12.5 = 13.5$. La fracción del Li-6 es $\\frac{1}{13.5} = 0.07407$. Al multiplicar por 100, se obtiene el porcentaje equivalente a $7.41\\%$.'
  }
];
