// Ejercicio 19 — Construir una ruta absoluta con node
// Objetivo: construir una ruta absoluta utilizando el directorio de trabajo actual.

// Requisitos:
// 1. Importa resolve desde "node".
// 2. Importa cwd desde "node".
// 3. Obtén el directorio de trabajo actual.
// 4. Utiliza resolve() para construir la ruta absoluta hacia "data/output.txt", partiendo del directorio de trabajo.
// 5. Muestra el directorio de trabajo y la ruta absoluta resultante.
// 6. Realiza el ejercicio en exercise19.ts.
// 7. No instales dependencias adicionales.

// Pistas:
// - resolve() combina segmentos de ruta y devuelve una ruta absoluta.
// - No necesitas crear el archivo output.txt.
// - La ruta debe construirse a partir del directorio de trabajo actual.

// Importaciones:
// Importa resolve desde "node".
// Importa cwd desde "node".

import { resolve } from 'node:path';
import { cwd } from 'node:process';

// Obtén el directorio de trabajo actual
const currentWorkingDirectory = cwd();

const absolutePath = resolve(currentWorkingDirectory, 'data', 'output.txt');

console.group("Construcción de ruta absoluta");
console.log("Directorio de trabajo (cwd):", currentWorkingDirectory);
console.log("Ruta absoluta hacia 'data/output.txt':", absolutePath);
console.groupEnd();