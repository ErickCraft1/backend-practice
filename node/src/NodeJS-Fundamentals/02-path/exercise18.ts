// Ejercicio 18 — Comparar cwd() con import.meta.url
// Objetivo: distinguir el directorio de trabajo del proceso de la ubicación del módulo.

// Requisitos:
// 1. Importa cwd desde "node".
// 2. Obtén el directorio de trabajo utilizando cwd().
// 3. Obtén la URL del módulo actual utilizando import.meta.url.
// 4. Muestra ambos valores en consola con etiquetas claras.
// 5. Realiza el ejercicio en exercise18.ts.
// 6. No instales dependencias adicionales.

// Pistas:
// - cwd() devuelve una ruta de directorio del sistema de archivos.
// - import.meta.url devuelve una URL que identifica el módulo actual.
// - Puedes utilizar console.log() para mostrar ambos valores.

// Importación:
// Importa cwd desde "node".

import { cwd } from 'node:process';

// Obtén el directorio de trabajo actual
const currentWorkingDirectory = cwd();

// Obtener la URL del módulo actual
const moduleURL = import.meta.url;

console.group("Comparación de directorio de trabajo y URL del módulo");
console.log("Directorio de trabajo (cwd):", currentWorkingDirectory);
console.log("URL del módulo (import.meta.url):", moduleURL);
console.groupEnd();