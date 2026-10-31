// Ejercicio 30 — Añadir contenido a un archivo con node/promises

// Objetivo: aprender a agregar contenido a un archivo existente utilizando appendFile() sin sobrescribir su contenido anterior.

// Requisitos:
// 1. Importa appendFile desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 5. Declara una variable con un nuevo texto que quieras agregar al archivo.
// 6. Utiliza await y appendFile() para añadir el nuevo texto al final del archivo.
// 7. Especifica la codificación UTF-8.
// 8. Muestra un mensaje en consola con la ruta del archivo modificado.
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise30.ts, dentro de la misma carpeta que los anteriores.
// 11. No instales dependencias adicionales.

// Pistas:
// - appendFile() agrega contenido al final del archivo en lugar de reemplazar el contenido existente.
// - Puedes utilizar { encoding: 'utf-8' } como opción.
// - Si quieres que el nuevo texto aparezca en una línea diferente, recuerda incluir \n al inicio o al final del texto, según corresponda.
// - El archivo notes.txt debe existir para que este ejercicio tenga el comportamiento esperado.
// - Puedes consultar la documentación oficial de node:fs/promises si necesitas verificar los argumentos de appendFile().

// Importaciones:
// Importa appendFile desde "node/promises", join desde "node" y cwd desde "node".

import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    const notesFile = join(dataDir, 'notes.txt');
    const newTextToAdd = "\nEste es un nuevo texto que se añadirá al final del archivo notes.txt.";

    await appendFile(notesFile, newTextToAdd, { encoding: 'utf-8' });
    console.log(`Contenido añadido exitosamente al archivo en: ${notesFile}`);
} catch (error) {
    console.error(
        "Error al añadir contenido al archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}