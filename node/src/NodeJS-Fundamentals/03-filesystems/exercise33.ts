// Ejercicio 33 — Comprobar el acceso a archivos con access()

// Objetivo: comprobar si un archivo existe y si el proceso tiene permisos para acceder a él.

// Requisitos:
// 1. Importa access desde "node:fs/promises".
// 2. Importa join desde "node:path".
// 3. Importa cwd desde "node:process".
// 4. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 5. Utiliza await y access() para comprobar si puedes acceder al archivo.
// 6. Si la comprobación es exitosa, muestra un mensaje indicando que el archivo es accesible.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise33.ts, dentro de la misma carpeta.
// 9. No instales dependencias.

// Pistas:
// - access() lanza un error si no puede acceder al archivo.
// - Si no se produce ningún error, la operación fue exitosa.
// - Puedes utilizar console.log() para mostrar el resultado.
// - No necesitas utilizar stat() en este ejercicio.

import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    // Construye la ruta absoluta del archivo notes.txt dentro del directorio data.
    const filePath = join(cwd(), 'data', 'notes.txt');
    await access(filePath);
    console.log('El archivo es accesible.');
} catch (error) {
    console.error(
        "Error al comprobar el acceso al archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}