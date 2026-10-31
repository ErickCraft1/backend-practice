// Ejercicio 38 — Crear y eliminar un directorio temporal

// Objetivo: combinar mkdtemp() y rm() para gestionar el ciclo de vida de un directorio temporal.

// Requisitos:
// 1. Importa mkdtemp y rm desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa tmpdir desde "node".
// 4. Construye un prefijo para el directorio temporal.
// 5. Utiliza mkdtemp() para crear el directorio.
// 6. Muestra la ruta del directorio creado.
// 7. Utiliza rm() para eliminar el directorio creado.
// 8. Muestra un mensaje cuando la eliminación haya finalizado correctamente.
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise38.ts, dentro de la misma carpeta.
// 11. No instales dependencias.

// Pistas:
// - Guarda la ruta devuelta por mkdtemp() en una variable.
// - Utiliza esa misma ruta para llamar a rm().
// - No necesitas recursive si el directorio está vacío.

import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

try {
    // Construye un prefijo para el nombre del directorio temporal.
    const prefix = join(tmpdir(), 'temp-');

    // Crea el directorio temporal.
    const tempDir = await mkdtemp(prefix);
    console.log('Directorio temporal creado en:', tempDir);

    // Eliminar el directorio temporal.
    await rm(tempDir, { recursive: true });
    console.log('Directorio temporal eliminado exitosamente.');
} catch (error) {
    console.error(
        "Error al crear o eliminar el directorio temporal:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}