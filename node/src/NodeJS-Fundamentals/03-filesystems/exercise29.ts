// Ejercicio 29 — Crear archivos con opciones de escritura

// Objetivo: utilizar writeFile() de node:fs/promises para crear un archivo de texto y controlar el comportamiento de la escritura.

// Requisitos:
// 1. Importa writeFile desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del directorio data dentro del directorio de trabajo actual.
// 5. Construye la ruta de un archivo llamado notes.txt dentro de data.
// 6. Declara una variable con un texto que quieras guardar en el archivo.
// 7. Utiliza await y writeFile() para escribir el texto con codificación UTF-8.
// 8. Configura la escritura para que falle si notes.txt ya existe, en lugar de sobrescribirlo.
// 9. Muestra un mensaje en consola con la ruta del archivo creado.
// 10. Gestiona los errores mediante try/catch.
// 11. Realiza el ejercicio en exercise29.ts, dentro de la misma carpeta que los anteriores.
// 12. No instales dependencias adicionales.

// Pistas:
// - writeFile() acepta un objeto de opciones como tercer argumento.
// - La opción encoding permite indicar la codificación del texto.
// - Investiga la opción flag y cuál de sus valores permite crear un archivo nuevo sin sobrescribir uno existente.
// - El directorio data debe existir antes de ejecutar el ejercicio.
// - Si ejecutas el ejercicio nuevamente después de crear notes.txt, la operación debería fallar por diseño.

// Importaciones:
// Importa writeFile desde "node/promises", join desde "node" y cwd desde "node".

import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    const notesFile = join(dataDir, 'notes.txt');
    const textToWrite = "Este es un texto de ejemplo para guardar en el archivo notes.txt.";

    await writeFile(notesFile, textToWrite, { encoding: 'utf-8', flag: 'wx' });
    console.log(`Archivo creado exitosamente en: ${notesFile}`);
} catch (error) {
    console.error(
        "Error al crear el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}