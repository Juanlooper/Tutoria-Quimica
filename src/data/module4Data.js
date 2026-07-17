export const module4Rules = [
  {
    id: 'm4-rule1',
    title: 'El Mol como Unidad Fundamental del Sistema Internacional (SI)',
    content: 'En la escala macroscópica del laboratorio químico, la cuantificación unitaria de partículas resulta inviable. Se introduce el concepto de Mol, definido rigurosamente como la cantidad de sustancia que contiene exactamente $6.02214076 \\times 10^{23}$ entidades elementales especificadas.',
    note: 'La magnitud numérica subyacente se denomina Constante de Avogadro ($N_A$). Un mol representa invariablemente $6.022 \\times 10^{23}$ entidades, indistintamente de si la sustancia analizada está constituida por átomos, moléculas, iones o electrones.'
  },
  {
    id: 'm4-rule2',
    title: 'Diagrama de Conversiones Estequiométricas',
    content: 'El análisis cuantitativo en química exige el dominio de las equivalencias dimensionales. El Mol opera como el nodo central o pivote matemático para transitar entre las distintas magnitudes macroscópicas y microscópicas.',
    note: 'Ecuaciones de estado continuo:\nConversión 1: Masa (g) $\\leftrightarrow$ Moles (Factor: Masa Molar $M$).\nConversión 2: Entidades $\\leftrightarrow$ Moles (Factor: Constante de Avogadro $N_A$).\nConversión 3: Volumen gaseoso $\\leftrightarrow$ Moles (Factor: Volumen Molar en CNPT = $22.4\\text{ L/mol}$).'
  }
];

export const module4Examples = [
  {
    id: 'm4-ex1',
    title: 'Ejemplo 1: Diferenciación Dimensional entre Átomos y Moléculas',
    problem: 'Se dispone de un cilindro presurizado que contiene $88.0\\text{ g}$ de Dióxido de Carbono ($CO_2$). Cuantifique el número absoluto de átomos de oxígeno presentes en el sistema.',
    analysis: 'El cálculo demanda reconocer la atomicidad de la molécula. El análisis dimensional estricto previene la interrupción prematura del cálculo en la etapa de cuantificación molecular.',
    steps: [
      'Cálculo de la masa molar (M): $M_{CO_2} = 12 + (16 \\times 2) = 44\\text{ g/mol}$.',
      'Planteamiento del análisis dimensional continuo: $88.0\\text{ g } CO_2 \\times \\frac{1\\text{ mol } CO_2}{44.0\\text{ g } CO_2} \\times \\frac{6.022 \\times 10^{23}\\text{ moléculas } CO_2}{1\\text{ mol } CO_2} \\times \\frac{2\\text{ átomos O}}{1\\text{ molécula } CO_2}$',
      'Resolución de moles: $\\frac{88.0}{44.0} = 2.0\\text{ moles de } CO_2$.',
      'Extrapolación a nivel atómico: $2.0 \\times (6.022 \\times 10^{23}) \\times 2 = 2.408 \\times 10^{24}\\text{ átomos de Oxígeno}$.'
    ]
  },
  {
    id: 'm4-ex2',
    title: 'Ejemplo 2: Interconversión de Volumen Gaseoso a Masa',
    problem: 'Una sonda aerostática almacena $112\\text{ Litros}$ de gas Helio ($He$) medidos en Condiciones Normales de Presión y Temperatura (CNPT). Determine la masa en gramos correspondiente a dicho volumen gaseoso.',
    analysis: 'Se exige transitar por el nodo molar utilizando el volumen molar de un gas ideal como factor de conversión primario.',
    steps: [
      'Identificación de datos tabulados: Masa molar del Helio = $4.0\\text{ g/mol}$. Constante de volumen molar = $22.4\\text{ L/mol}$.',
      'Ruta algorítmica: Volumen (L) $\\rightarrow$ Moles (n) $\\rightarrow$ Masa (g).',
      'Planteamiento analítico: $112\\text{ L He} \\times \\frac{1\\text{ mol He}}{22.4\\text{ L He}} \\times \\frac{4.0\\text{ g He}}{1\\text{ mol He}}$',
      'Determinación molar: $\\frac{112}{22.4} = 5.0\\text{ moles de He}$.',
      'Cálculo de la magnitud final: $5.0\\text{ moles} \\times 4.0\\text{ g/mol} = 20.0\\text{ gramos de He}$.'
    ]
  },
  {
    id: 'm4-ex3',
    title: 'Ejemplo 3: Análisis Estequiométrico en Aleaciones Complejas',
    problem: 'Una moneda antigua de bronce tiene un volumen total de $4.50\\text{ cm}^3$ y una densidad promedio de $8.80\\text{ g/cm}^3$. El análisis metalúrgico indica que la aleación contiene un $12.0\\%$ en masa de Estaño ($Sn$, Masa Molar = $118.7\\text{ g/mol}$). Calcule el número exacto de átomos de Estaño presentes en la moneda.',
    analysis: 'Se requiere transitar a través de una serie de conversiones físicas (volumen $\\rightarrow$ masa total $\\rightarrow$ masa parcial) antes de poder ingresar al puente estequiométrico (masa parcial $\\rightarrow$ moles $\\rightarrow$ átomos).',
    steps: [
      'Determinación de la masa total: $\\text{Masa}_{\\text{total}} = \\text{Volumen} \\times \\text{Densidad} = 4.50\\text{ cm}^3 \\times 8.80\\text{ g/cm}^3 = 39.6\\text{ g}$.',
      'Extracción de la masa parcial activa: La masa correspondiente al Estaño es el $12.0\\%$ del total. $\\text{Masa}_{Sn} = 39.6 \\times 0.12 = 4.752\\text{ g}$.',
      'Conversión a moles (Puente Molar): $\\text{Moles}_{Sn} = \\frac{4.752\\text{ g}}{118.7\\text{ g/mol}} = 0.04003\\text{ moles}$.',
      'Cuantificación absoluta (Avogadro): $\\text{Átomos}_{Sn} = 0.04003 \\times (6.022 \\times 10^{23}) = 2.41 \\times 10^{22}\\text{ átomos}$.',
      'Conclusión: El análisis dimensional estricto permite aislar la cantidad exacta de entidades de un solo elemento dentro de una matriz macroscópica compleja.'
    ]
  },
  {
    id: 'm4-ex4',
    title: 'Ejemplo 4: Cuantificación de una Única Entidad',
    problem: 'Calcule la masa exacta en gramos de un único átomo de Plomo ($Pb$, $M = 207.2\\text{ g/mol}$).',
    analysis: 'Se requiere usar la Constante de Avogadro como puente divisor para fragmentar la masa macroscópica (un mol) en su unidad mínima fundamental (un átomo).',
    steps: [
      'Planteamiento dimensional: $1\\text{ átomo de Pb} \\times \\frac{1\\text{ mol de Pb}}{6.022 \\times 10^{23}\\text{ átomos de Pb}} \\times \\frac{207.2\\text{ g de Pb}}{1\\text{ mol de Pb}}$.',
      'Resolución de la fracción: $\\frac{207.2}{6.022 \\times 10^{23}}$.',
      'Cálculo final: $3.44 \\times 10^{-22}\\text{ g}$.',
      'Conclusión: Un solo átomo de Plomo tiene una masa imperceptible de $3.44 \\times 10^{-22}\\text{ gramos}$.'
    ]
  },
  {
    id: 'm4-ex5',
    title: 'Ejemplo 5: El Mol en Macromoléculas',
    problem: 'Una proteína enzimática purificada tiene una masa molar de $45,000\\text{ g/mol}$. Si un tubo de ensayo contiene $2.5\\text{ mg}$ de esta enzima, ¿cuántos moles de proteína hay en la muestra?',
    analysis: 'El concepto de mol es universal y aplica idénticamente a átomos simples que a macromoléculas biológicas colosales.',
    steps: [
      'Ajuste de unidades (Puente de prefijos): Convertir $2.5\\text{ mg}$ a gramos. $2.5\\text{ mg} \\times 10^{-3} = 0.0025\\text{ g}$.',
      'Aplicación del divisor molar: $\\text{Moles} = \\frac{\\text{Masa}}{\\text{Masa Molar}} = \\frac{0.0025\\text{ g}}{45000\\text{ g/mol}}$.',
      'Cálculo final: $5.55 \\times 10^{-8}\\text{ moles}$.',
      'Conclusión: Debido a la enorme masa de cada molécula, una muestra visible de miligramos contiene apenas una fracción nanomolar de sustancia.'
    ]
  },
  {
    id: 'm4-ex6',
    title: 'Ejemplo 6: Disociación Electrolítica y Moles de Iones',
    problem: 'Se disuelven $133.34\\text{ g}$ de Cloruro de Aluminio ($AlCl_3$) en agua destilada. Asumiendo disociación total, calcule el número total de moles de iones libres en la solución. ($Al=26.98, Cl=35.45$).',
    analysis: 'Un mol de un compuesto iónico sólido genera múltiples moles de iones individuales al disociarse en un solvente.',
    steps: [
      'Masa molar del $AlCl_3$: $26.98 + (3 \\times 35.45) = 133.33\\text{ g/mol}$.',
      'Cálculo de moles de la sal intacta: $\\frac{133.34\\text{ g}}{133.33\\text{ g/mol}} \\approx 1.00\\text{ mol de } AlCl_3$.',
      'Ecuación de disociación: $AlCl_3 (s) \\rightarrow Al^{3+} (aq) + 3Cl^- (aq)$.',
      'Estequiometría iónica: Por cada 1 mol de sal se produce 1 mol de catión y 3 moles de aniones. Total = 4 moles de iones.',
      'Conclusión: Al disolver $1.00\\text{ mol}$ de $AlCl_3$, la solución se satura con $4.00\\text{ moles}$ de iones totales libres.'
    ]
  },
  {
    id: 'm4-ex7',
    title: 'Ejemplo 7: Deducción de Fórmula Empírica',
    problem: 'El análisis de un ácido orgánico revela que está compuesto por $40.0\\%$ de C, $6.7\\%$ de H y $53.3\\%$ de O por masa. Deduzca su fórmula empírica más simple.',
    analysis: 'La composición porcentual se asume como una masa en gramos base 100, para luego convertirla a proporciones molares.',
    steps: [
      'Asunción de base de cálculo: Considerar una muestra teórica de $100\\text{ g}$. Masas: C = $40.0\\text{ g}$, H = $6.7\\text{ g}$, O = $53.3\\text{ g}$.',
      'Conversión a moles: C = $\\frac{40.0}{12.01} = 3.33\\text{ mol}$. H = $\\frac{6.7}{1.01} = 6.63\\text{ mol}$. O = $\\frac{53.3}{16.00} = 3.33\\text{ mol}$.',
      'Normalización dividiendo por el menor ($3.33$): C = $\\frac{3.33}{3.33} = 1$. H = $\\frac{6.63}{3.33} \\approx 2$. O = $\\frac{3.33}{3.33} = 1$.',
      'Conclusión: La relación molar más pequeña de átomos es 1:2:1, correspondiendo a la fórmula empírica $CH_2O$.'
    ]
  },
  {
    id: 'm4-ex8',
    title: 'Ejemplo 8: De Fórmula Empírica a Molecular',
    problem: 'Continuando el problema anterior (Fórmula empírica $CH_2O$), un experimento de efusión gaseosa determina que el peso molecular real del ácido orgánico es $60.05\\text{ g/mol}$. Determine su fórmula molecular exacta.',
    analysis: 'La fórmula molecular es siempre un múltiplo entero de la fórmula empírica.',
    steps: [
      'Cálculo de la Masa Molar Empírica (MME): Masa de $CH_2O$ = $12.01 + 2.02 + 16.00 = 30.03\\text{ g/mol}$.',
      'Cálculo del factor de multiplicidad (n): $n = \\frac{\\text{Masa Molecular Real}}{\\text{Masa Molar Empírica}}$.',
      'Resolución de n: $n = \\frac{60.05}{30.03} \\approx 2$.',
      'Aplicación del múltiplo: $(CH_2O) \\times 2 = C_2H_4O_2$.',
      'Conclusión: La molécula real contiene el doble de átomos que su unidad mínima empírica. Es el ácido acético ($C_2H_4O_2$).'
    ]
  }
];

export const module4Practices = [
  {
    id: 'm4-prac1',
    title: 'Práctica 1: Deducción de Identidad a partir de Relaciones Molares',
    statement: 'Una muestra analítica pura contiene exactamente $3.011 \\times 10^{23}$ átomos. La cuantificación gravimétrica de la muestra reporta una masa de $20.0\\text{ g}$. Identifique el elemento químico constituyente.',
    answer: 'Elemento identificado: Calcio ($Ca$).',
    explanation: 'Justificación matemática: La cantidad de entidades ($3.011 \\times 10^{23}$) equivale exactamente al $50\\%$ de la constante de Avogadro ($0.5\\text{ moles}$). Estableciendo la proporción $0.5\\text{ moles} = 20.0\\text{ g}$, se deduce que $1.0\\text{ mol}$ de sustancia equivaldría a $40.0\\text{ g}$. Refiriéndose a las masas atómicas tabuladas estándar, la masa molar de $40.0\\text{ g/mol}$ corresponde unívocamente al Calcio.'
  },
  {
    id: 'm4-prac2',
    title: 'Práctica 2: Análisis Gravimétrico de Gases Diatómicos',
    statement: 'Un matraz aforado contiene $11.2\\text{ Litros}$ de gas Oxígeno molecular ($O_2$) bajo régimen CNPT. Calcule la masa contenida en el sistema.',
    answer: '$16.0\\text{ g}$ de $O_2$.',
    explanation: 'Transición volumétrica a molar: $\\frac{11.2\\text{ L}}{22.4\\text{ L/mol}} = 0.5\\text{ moles}$. Es crítico reconocer que la especie analizada es diatómica ($O_2$), por lo cual su masa molar efectiva asciende a $16 \\times 2 = 32\\text{ g/mol}$. La cuantificación final arroja: $0.5\\text{ moles} \\times 32\\text{ g/mol} = 16.0\\text{ g}$.'
  },
  {
    id: 'm4-prac3',
    title: 'Práctica 3: Cuantificación Compleja Interfasial',
    statement: 'Una alícuota de agua destilada ($H_2O$) en fase líquida presenta un volumen de $0.05\\text{ mL}$. Asumiendo una densidad constante $\\rho = 1.0\\text{ g/mL}$ en las condiciones de laboratorio, determine el número absoluto de moléculas presentes en la alícuota.',
    answer: '$1.67 \\times 10^{21}\\text{ moléculas de agua}$.',
    explanation: 'Dada la fase condensada (líquido), el uso de la constante volumétrica de gases ($22.4\\text{ L}$) es un error metódico inaceptable. Se procede primero a derivar la masa empleando la densidad: $0.05\\text{ mL} \\times 1.0\\text{ g/mL} = 0.05\\text{ gramos}$. Conociendo la masa molar teórica ($M_{H_2O} = 18\\text{ g/mol}$), se determinan los moles: $\\frac{0.05\\text{ g}}{18\\text{ g/mol}} = 0.00277\\text{ moles}$. Finalmente, la conversión a entidades arroja: $0.00277 \\times (6.022 \\times 10^{23}) = 1.67 \\times 10^{21}$.'
  },
  {
    id: 'm4-prac4',
    title: 'Práctica 4: Deducción de Fórmula Empírica por Combustión',
    statement: 'Se quema completamente una muestra de un hidrocarburo desconocido (compuesto solo de C e H) en presencia de exceso de oxígeno. Los productos recolectados son $4.48\\text{ L}$ de gas Dióxido de Carbono ($CO_2$) medidos en CNPT y $3.60\\text{ g}$ de vapor de Agua ($H_2O$). Determine la fórmula empírica del hidrocarburo original.',
    answer: 'La fórmula empírica es $CH_2$.',
    explanation: 'Por la Ley de Lavoisier, todo el Carbono del gas originó el $CO_2$ y todo el Hidrógeno originó el $H_2O$. Análisis del Carbono: $\\frac{4.48\\text{ L}}{22.4\\text{ L/mol}} = 0.20\\text{ moles de } CO_2$. Cada molécula de $CO_2$ contiene 1 átomo de C, por ende hay $0.20\\text{ moles de C}$. Análisis del Hidrógeno: $\\frac{3.60\\text{ g}}{18.0\\text{ g/mol}} = 0.20\\text{ moles de } H_2O$. Como cada molécula de agua tiene 2 átomos de H, los moles de H son $0.20 \\times 2 = 0.40\\text{ moles de H}$. Relación molar (C:H): Dividimos ambos por el menor ($0.20$). $C = 0.20/0.20 = 1$. $H = 0.40/0.20 = 2$. La proporción atómica mínima es 1:2, indicando una fórmula empírica de $CH_2$.'
  },
  {
    id: 'm4-prac5',
    title: 'Práctica 5: Geometría Atómica y Estequiometría de Superficies',
    statement: 'Un circuito integrado requiere un recubrimiento de Oro ($Au$, Masa Molar = $197.0\\text{ g/mol}$, Densidad = $19.3\\text{ g/cm}^3$). Se electrodepositan uniformemente $3.011 \\times 10^{20}$ átomos de Oro sobre una placa plana de $2.0\\text{ cm}^2$. Calcule el espesor de la capa de oro (en centímetros) depositada sobre el circuito.',
    answer: 'El espesor de la capa depositada es de $2.55 \\times 10^{-3}\\text{ cm}$.',
    explanation: 'Transición Entidades $\\rightarrow$ Moles: $\\frac{3.011 \\times 10^{20}}{6.022 \\times 10^{23}} = 5.0 \\times 10^{-4}\\text{ moles de Au}$. Transición Moles $\\rightarrow$ Masa: $5.0 \\times 10^{-4}\\text{ moles} \\times 197.0\\text{ g/mol} = 0.0985\\text{ g}$. Transición Masa $\\rightarrow$ Volumen: $\\text{Volumen} = \\frac{0.0985\\text{ g}}{19.3\\text{ g/cm}^3} = 5.104 \\times 10^{-3}\\text{ cm}^3$. Geometría (Volumen = Área $\\times$ Espesor): $\\text{Espesor} = \\frac{5.104 \\times 10^{-3}\\text{ cm}^3}{2.0\\text{ cm}^2} = 2.55 \\times 10^{-3}\\text{ cm}$.'
  },
  {
    id: 'm4-prac6',
    title: 'Práctica 6: Cuantificación Molecular de Etanol Puro',
    statement: 'Un beaker de laboratorio contiene $50.0\\text{ mL}$ de etanol puro líquido ($C_2H_6O$). Si la densidad del etanol a temperatura ambiente es $0.789\\text{ g/mL}$, ¿cuántas moléculas enteras de etanol hay en el recipiente?',
    answer: 'Aproximadamente $5.16 \\times 10^{23}\\text{ moléculas}$.',
    explanation: 'Primero, calculamos la masa usando el volumen y la densidad: $\\text{Masa} = 50.0\\text{ mL} \\times 0.789\\text{ g/mL} = 39.45\\text{ g}$. Luego, determinamos la masa molar del etanol: $(2 \\times 12.01) + (6 \\times 1.01) + 16.00 = 46.08\\text{ g/mol}$. Calculamos los moles: $\\frac{39.45\\text{ g}}{46.08\\text{ g/mol}} = 0.856\\text{ moles}$. Finalmente, usamos Avogadro para hallar las moléculas: $0.856 \\times 6.022 \\times 10^{23} = 5.155 \\times 10^{23}\\text{ moléculas}$.'
  },
  {
    id: 'm4-prac7',
    title: 'Práctica 7: El Mol en las Sales Hidratadas',
    statement: 'Se analiza una muestra de $25.0\\text{ g}$ de Sulfato de Magnesio heptahidratado ($MgSO_4 \\cdot 7H_2O$). ¿Cuántos moles puros de agua ($H_2O$) hay encriptados dentro de los cristales de la muestra? ($Masa Molar Sal Hidratada = 246.47\\text{ g/mol}$).',
    answer: 'La muestra contiene $0.71\\text{ moles de agua}$.',
    explanation: 'Calculamos los moles totales de la sal hidratada completa: $\\text{Moles} = \\frac{25.0\\text{ g}}{246.47\\text{ g/mol}} = 0.1014\\text{ moles de } MgSO_4 \\cdot 7H_2O$. Por estequiometría de la fórmula, 1 mol del cristal entero contiene exactamente 7 moles de agua. Por lo tanto, los moles de agua son: $0.1014 \\times 7 = 0.71\\text{ moles de } H_2O$.'
  },
  {
    id: 'm4-prac8',
    title: 'Práctica 8: De Entidades Gaseosas a Volumen',
    statement: 'Se extraen $1.204 \\times 10^{24}$ moléculas de gas Nitrógeno ($N_2$) de un cilindro. Si el gas se deja expandir hasta alcanzar las Condiciones Normales de Presión y Temperatura (CNPT), ¿qué volumen en Litros ocupará?',
    answer: 'El gas ocupará exactamente $44.8\\text{ Litros}$.',
    explanation: 'Se utiliza el puente molar a la inversa. Primero, determinamos los moles partiendo de las moléculas: $\\text{Moles} = \\frac{1.204 \\times 10^{24}}{6.022 \\times 10^{23}} = 2.0\\text{ moles exactos de } N_2$. Según la ley volumétrica, 1 mol de cualquier gas ideal en CNPT ocupa un volumen de $22.4\\text{ L}$. Por ende, el volumen ocupado por la muestra es: $2.0\\text{ moles} \\times 22.4\\text{ L/mol} = 44.8\\text{ Litros}$.'
  },
  {
    id: 'm4-prac9',
    title: 'Práctica 9: Cuantificación del Puente Cuádruple',
    statement: 'En una industria farmacéutica, se sintetizan $1.50\\text{ moles}$ de Aspirina ($C_9H_8O_4$). Calcule la cantidad total de átomos individuales de Oxígeno presentes en todo este lote.',
    answer: 'El lote contiene $3.61 \\times 10^{24}\\text{ átomos de Oxígeno}$.',
    explanation: 'Aplicamos el puente completo: $1.50\\text{ moles}$ de molécula $\\times$ constante de Avogadro $\\times$ atomicidad del Oxígeno en la fórmula. Atomicidad = 4 átomos de O por molécula de Aspirina. Átomos de O = $1.50\\text{ moles} \\times (6.022 \\times 10^{23}\\text{ moléculas/mol}) \\times 4\\text{ átomos/molécula} = 3.613 \\times 10^{24}\\text{ átomos de Oxígeno}$.'
  },
  {
    id: 'm4-prac10',
    title: 'Práctica 10: Deducción de Identidad desde Geometría Macroscópica',
    statement: 'Un cubo sólido y puro de un metal desconocido mide $1.20\\text{ cm}$ de arista y pesa $15.48\\text{ g}$. Se determina mediante técnicas avanzadas que el cubo contiene exactamente $0.243\\text{ moles}$ de átomos. Calcule la densidad del cubo e identifique el metal analizando su masa molar.',
    answer: 'La densidad es $8.96\\text{ g/cm}^3$. El metal es el Cobre ($Cu$).',
    explanation: 'Cálculo del volumen geométrico: $\\text{Volumen} = L^3 = (1.20\\text{ cm})^3 = 1.728\\text{ cm}^3$. Cálculo de la densidad macroscópica: $\\rho = \\frac{15.48\\text{ g}}{1.728\\text{ cm}^3} = 8.96\\text{ g/cm}^3$. Este dato físico concuerda con el Cobre. Para verificar inequívocamente su identidad química, hallamos la Masa Molar dividiendo la masa total entre los moles: $M = \\frac{15.48\\text{ g}}{0.243\\text{ moles}} = 63.70\\text{ g/mol}$. La masa atómica tabulada del Cobre es $63.55\\text{ g/mol}$, confirmando la identidad del metal.'
  }
];
