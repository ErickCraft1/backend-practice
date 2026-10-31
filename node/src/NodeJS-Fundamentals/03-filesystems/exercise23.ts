// Ejercicio 23 — Crear directorios con node/promises

// Objetivo: aprender a crear directorios de forma asíncrona utilizando mkdir().

// Requisitos:
// 1. Importa mkdir desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta de un directorio llamado "data" dentro del directorio de trabajo actual.
// 5. Utiliza await y mkdir() para crear el directorio.
// 6. Configura la operación para que no falle si el directorio ya existe.
// 7. Muestra un mensaje en consola indicando la ruta del directorio.
// 8. Gestiona los errores utilizando try/catch.
// 9. Realiza el ejercicio en exercise23.ts, dentro de la misma carpeta.
// 10. No instales dependencias adicionales.

// Pistas:
// - join() permite unir segmentos de una ruta.
// - cwd() devuelve el directorio de trabajo actual.
// - mkdir() acepta una opción llamada recursive.
// - Investiga qué valor debes asignar a recursive para que la operación no falle si el directorio ya existe.

// Importaciones:
// Importa mkdir desde "node/promises", join desde "node" y cwd desde "node".

import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    await mkdir(dataDir, { recursive: true });
    console.log("Directorio creado en:", dataDir);
} catch (error) {
    console.error(
        "Error al crear el directorio:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}