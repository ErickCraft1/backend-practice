// Ejercicio 31 — Leer archivos de texto con node/promises

// Objetivo: aprender a leer el contenido de un archivo utilizando readFile() y mostrarlo en consola.

// Requisitos:
// 1. Importa readFile desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 5. Utiliza await y readFile() para obtener el contenido del archivo.
// 6. Especifica la codificación UTF-8 para obtener el contenido como texto.
// 7. Muestra el contenido completo del archivo en consola.
// 8. Gestiona los errores mediante try/catch.
// 9. Realiza el ejercicio en exercise31.ts, dentro de la misma carpeta que los anteriores.
// 10. No instales dependencias adicionales.

// Pistas:
// - readFile() devuelve una Promise.
// - Si especificas 'utf-8', el resultado será un string en lugar de un Buffer.
// - Puedes utilizar console.log() para mostrar el contenido completo.
// - El archivo notes.txt contiene el texto creado en el ejercicio 29 y modificado en el ejercicio 30.

// Importaciones:
// Importa readFile desde "node/promises", join desde "node" y cwd desde "node".

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    const notesFile = join(dataDir, 'notes.txt');

    const content = await readFile(notesFile, { encoding: 'utf-8' });
    console.log(content);
} catch (error) {
    console.error(
        "Error al leer el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}