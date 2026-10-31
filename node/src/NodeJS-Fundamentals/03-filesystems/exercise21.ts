// Ejercicio 21 — Listar archivos y directorios con node/promises
// Objetivo: obtener los nombres de los elementos que contiene un directorio.

// Requisitos:
// 1. Importa readdir desde "node/promises".
// 2. Construye la ruta del directorio actual del módulo utilizando new URL() e import.meta.url.
// 3. Utiliza await y readdir() para obtener los nombres de sus elementos.
// 4. Muestra cada nombre en consola utilizando un bucle.
// 5. Gestiona los errores con try/catch.
// 6. Realiza el ejercicio en exercise21.ts.
// 7. No instales dependencias adicionales.

// Pistas:
// - Puedes utilizar new URL('.', import.meta.url) para referirte al directorio donde se encuentra el módulo.
// - readdir() devuelve una Promise con un array de nombres.
// - Puedes recorrer el resultado con for...of.
// - No necesitas leer el contenido de cada archivo.

// Importación:
// Importa readdir desde "node/promises".

import { readdir } from 'node:fs/promises';

try {
    const directoryPath = new URL('.', import.meta.url);
    const filesAndDirectories = await readdir(directoryPath);
    // Muestra el array completo en consola
    //console.log("Archivos y directorios en el directorio actual:", filesAndDirectories);

    // Muestra cada nombre en consola utilizando un bucle
    console.log("Archivos y directorios en el directorio actual:");
    for (const name of filesAndDirectories) {
        console.log(name);
    }

} catch (error) {
    console.error(
        "Error al listar los archivos y directorios:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}