// Ejercicio 22 — Obtener metadatos de archivos con node/promises

// Objetivo: Utilizar stat() para obtener información sobre un archivo.

// Requisitos:
// 1. Importa stat desde "node/promises".
// 2. Construye la ruta de example.txt utilizando new URL() e import.meta.url.
// 3. Utiliza await y stat() para obtener los metadatos del archivo.
// 4. Muestra en consola:
//    - El tamaño del archivo en bytes.
//    - Si es un archivo regular.
//    - Si es un directorio.
// 5. Gestiona los errores utilizando try/catch.
// 6. Realiza el ejercicio en exercise22.ts, dentro de la misma carpeta.
// 7. No instales dependencias adicionales.

// Pistas:
// - stat() devuelve un objeto con información del archivo.
// - Utiliza .size para obtener el tamaño en bytes.
// - Utiliza .isFile() para comprobar si es un archivo regular.
// - Utiliza .isDirectory() para comprobar si es un directorio.

// Importación:
// Importa stat desde "node/promises".

import { stat } from 'node:fs/promises';

try {
    const filePath = new URL('./example.txt', import.meta.url);
    const fileStats = await stat(filePath);

    console.group("Metadatos del archivo:");
    console.log("Tamaño del archivo (bytes):", fileStats.size);
    console.log("¿Es un archivo regular?:", fileStats.isFile());
    console.log("¿Es un directorio?:", fileStats.isDirectory());
    console.groupEnd();
} catch (error) {
    console.error(
        "Error al obtener los metadatos del archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}