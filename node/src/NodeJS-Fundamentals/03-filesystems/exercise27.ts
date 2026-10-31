// Ejercicio 27 — Identificar archivos y directorios con node/promises

// Objetivo: utilizar stat() y estructuras condicionales para identificar si una ruta corresponde a un archivo o a un directorio.

// Requisitos:
// 1. Importa stat desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta de un elemento llamado data, ubicado en el directorio de trabajo actual.
// 5. Utiliza await y stat() para obtener sus metadatos.
// 6. Utiliza if, else if y else para determinar si la ruta corresponde a:
//    - Un archivo regular.
//    - Un directorio.
//    - Otro tipo de elemento.
// 7. Muestra un mensaje en consola indicando el tipo de elemento encontrado.
// 8. Gestiona los errores mediante try/catch.
// 9. Realiza el ejercicio en exercise27.ts, dentro de la misma carpeta que los anteriores.
// 10. No instales dependencias adicionales.

// Pistas:
// - stat() devuelve un objeto con métodos para comprobar el tipo de elemento.
// - Utiliza .isFile() para comprobar si es un archivo regular.
// - Utiliza .isDirectory() para comprobar si es un directorio.
// - La condición else permite manejar los tipos que no coincidan con los anteriores.
// - Recuerda que data debe existir para que stat() pueda obtener sus metadatos.

// Importaciones:
// Importa stat desde "node/promises", join desde "node" y cwd desde "node".

import { stat } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dataPath = join(cwd(), 'data');
    const stats = await stat(dataPath);
    if (stats.isFile()) {
        console.log("La ruta corresponde a un archivo regular:", dataPath);
    } else if (stats.isDirectory()) {
        console.log("La ruta corresponde a un directorio:", dataPath);
    } else {
        console.log("La ruta corresponde a otro tipo de elemento:", dataPath);
    }
} catch (error) {
    console.error(
        "Error al obtener los metadatos:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}