// Ejercicio 40 — Consultar directorios con opendir()

// Objetivo: recorrer el contenido de un directorio utilizando opendir().

// Requisitos:
// 1. Importa opendir desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del directorio data.
// 5. Utiliza await y opendir() para abrir el directorio.
// 6. Utiliza un bucle for await...of para recorrer sus elementos.
// 7. Muestra el nombre de cada elemento.
// 8. Indica si cada elemento es un archivo o un directorio utilizando los métodos correspondientes.
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise40.ts, dentro de la misma carpeta.
// 11. No instales dependencias.

// Pistas:
// - opendir() devuelve un objeto Dir.
// - El objeto Dir permite recorrer las entradas del directorio.
// - Cada entrada proporciona propiedades y métodos similares a Dirent.
// - Investiga los métodos isFile() e isDirectory().

import { opendir } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    const dir = await opendir(dataDir);
    for await (const entry of dir) {
        console.group('Elemento del directorio:\n');
        console.log(`Nombre del elemento: ${entry.name}`);
        console.log(`¿Es un archivo?: ${entry.isFile()}`);
        console.log(`¿Es un directorio?: ${entry.isDirectory()}\n\n`);
        console.groupEnd();
    }
} catch (error) {
    console.error(
        "Error al consultar el directorio:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}