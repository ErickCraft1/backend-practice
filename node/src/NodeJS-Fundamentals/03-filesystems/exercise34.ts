// Ejercicio 34 — Comprobar permisos específicos con access()

// Objetivo: comprobar si el proceso tiene permisos de lectura y escritura sobre un archivo.

// Requisitos:
// 1. Importa access desde "node/promises".
// 2. Importa constants desde el módulo correspondiente de Node.js.
// 3. Importa join desde "node".
// 4. Importa cwd desde "node".
// 5. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 6. Utiliza access() para comprobar el permiso de lectura (R_OK).
// 7. Realiza otra comprobación para el permiso de escritura (W_OK).
// 8. Muestra un mensaje independiente para cada comprobación.
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise34.ts, dentro de la misma carpeta.
// 11. No instales dependencias.

// Pistas:
// - Investiga dónde se encuentra constants en la API de Node.js.
// - Puedes utilizar constants.R_OK y constants.W_OK.
// - Cada comprobación puede fallar independientemente de la otra.

import { access, constants } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

// Construye la ruta absoluta del archivo notes.txt dentro del directorio data.
const filePath = join(cwd(), 'data', 'notes.txt');

try {
    // Comprobación de permiso de lectura (R_OK).
    await access(filePath, constants.R_OK);
    console.log('El archivo tiene permiso de lectura.');
} catch (error) {
    console.error(
        "Error al comprobar el permiso de lectura:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}

try {
    // Comprobación de permiso de escritura (W_OK).
    await access(filePath, constants.W_OK);
    console.log('El archivo tiene permiso de escritura.');
} catch (error) {
    console.error(
        "Error al comprobar el permiso de escritura:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}