// Ejercicio 28 — Distinguir archivos y directorios con readdir()

// Objetivo: recorrer un directorio e identificar cuáles de sus elementos son archivos y cuáles son subdirectorios, utilizando node:fs/promises.

// Requisitos:
// 1. Importa readdir desde "node/promises".
// 2. Construye la ruta absoluta del directorio data, ubicado en el directorio de trabajo actual.
// 3. Utiliza await y readdir() con la opción withFileTypes: true.
// 4. Recorre los elementos obtenidos mediante un bucle.
// 5. Utiliza if y else if para identificar:
//    - Los archivos regulares.
//    - Los directorios.
// 6. Muestra el nombre de cada elemento y su tipo en consola.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise28.ts, dentro de la misma carpeta que los anteriores.
// 9. No instales dependencias adicionales.

// Pistas:
// - readdir() acepta la opción { withFileTypes: true }.
// - Con esta opción, el resultado contiene objetos Dirent en lugar de simples cadenas de texto.
// - Investiga los métodos .isFile() e .isDirectory() de esos objetos.
// - Cada objeto permite acceder a su nombre mediante .name.
// - No necesitas llamar a stat() para cada elemento.

// Importaciones:
// Importa readdir desde "node/promises".

import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataDir = join(cwd(), 'data');
    // const dataDir = new URL('../../../data', import.meta.url);
    const entries = await readdir(dataDir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isFile()) {
            console.log(`Archivo: ${entry.name}`);
        } else if (entry.isDirectory()) {
            console.log(`Directorio: ${entry.name}`);
        } else {
            console.log(`Otro: ${entry.name}`);
        }
    }
} catch (error) {
    console.error(
        "Error al leer el directorio:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}