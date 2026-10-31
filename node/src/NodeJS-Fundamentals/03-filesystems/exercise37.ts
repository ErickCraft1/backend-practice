// Ejercicio 37 — Crear directorios temporales con mkdtemp()

// Objetivo: crear un directorio temporal utilizando la API de archivos de Node.js.

// Requisitos:
// 1. Importa mkdtemp desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa tmpdir desde "node".
// 4. Construye un prefijo para el nombre del directorio temporal.
// 5. Utiliza await y mkdtemp() para crear el directorio temporal.
// 6. Muestra la ruta absoluta del directorio creado.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise37.ts, dentro de la misma carpeta.
// 9. No instales dependencias.

// Pistas:
// - tmpdir() devuelve la ruta del directorio temporal del sistema operativo.
// - mkdtemp() crea un directorio con un nombre único a partir de un prefijo.
// - Puedes construir el prefijo utilizando join().
// - Consulta qué devuelve mkdtemp().

import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

try {
    // Construye un prefijo para el nombre del directorio temporal.
    const prefix = join(tmpdir(), 'temp-');

    // Crea el directorio temporal.
    const tempDir = await mkdtemp(prefix);
    console.log('Directorio temporal creado en:', tempDir);
} catch (error) {
    console.error(
        "Error al crear el directorio temporal:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}