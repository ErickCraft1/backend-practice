// Ejercicio 17 — Consultar el directorio de trabajo con node
// Objetivo: identificar desde qué directorio se está ejecutando el proceso de Node.js.

// Requisitos:
// 1. Importa cwd desde "node".
// 2. Utiliza cwd() para obtener el directorio de trabajo actual.
// 3. Guarda el resultado en una constante.
// 4. Muestra el directorio de trabajo en consola.
// 5. Realiza el ejercicio en exercise17.ts.
// 6. No instales dependencias adicionales.

// Pistas:
// - cwd() devuelve la ruta del directorio desde el que se inició el proceso.
// - El directorio de trabajo no es necesariamente el directorio donde está ubicado el archivo TypeScript.
// - Ejecuta el ejercicio con el mismo comando de Zsh y pnpm que utilizaste en el ejercicio 16.

// Importación:
// Importa cwd desde "node".

import { cwd } from 'node:process';

// Obtén el directorio de trabajo actual
const currentWorkingDirectory = cwd();

// Muestra el directorio de trabajo en consola
console.log(`Directorio de trabajo actual: ${currentWorkingDirectory}`);