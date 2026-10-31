// Ejercicio 35 — Eliminar archivos con rm()

// Objetivo: eliminar un archivo utilizando la API de archivos de Node.js.

// Requisitos:
// 1. Importa rm desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo temporary.txt, ubicado dentro del directorio data.
// 5. Utiliza await y rm() para eliminar el archivo.
// 6. Si la eliminación tiene éxito, muestra un mensaje en consola.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise35.ts, dentro de la misma carpeta.
// 9. No instales dependencias.

// Pistas:
// - rm() permite eliminar archivos y directorios.
// - Puedes consultar las opciones de rm() en la documentación oficial de Node.js.
// - Para este ejercicio, trabaja únicamente con un archivo.
// - Antes de ejecutar el ejercicio, crea manualmente data/temporary.txt con algún contenido.

import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const filePath = join(cwd(), 'data', 'temporary.txt');
    await rm(filePath);
    console.log('El archivo temporary.txt ha sido eliminado exitosamente.');
} catch (error) {
    console.error(
        "Error al eliminar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}