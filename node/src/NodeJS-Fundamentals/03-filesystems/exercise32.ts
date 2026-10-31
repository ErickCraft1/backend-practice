// Ejercicio 32 — Consultar información de archivos con stat()

// Objetivo: combinar la lectura de archivos con la consulta de sus metadatos.

// Requisitos:
// 1. Importa stat desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 5. Utiliza await y stat() para obtener los metadatos del archivo.
// 6. Muestra en consola la siguiente información:
//    - Nombre del archivo.
//    - Tamaño en bytes.
//    - Fecha de última modificación.
//    - Si es un archivo regular.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise32.ts, dentro de la misma carpeta que los anteriores.
// 9. No instales dependencias adicionales.

// Pistas:
// - stat() devuelve un objeto con los metadatos del archivo.
// - Utiliza .size para obtener el tamaño.
// - Utiliza .mtime para obtener la fecha de última modificación.
// - Utiliza .isFile() para comprobar si es un archivo regular.
// - Puedes utilizar toLocaleString() para mostrar la fecha de forma legible.

// Importaciones:
// Importa stat desde "node/promises", join desde "node" y cwd desde "node".

import { stat } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { cwd } from 'node:process';

try {
    // Construye la ruta absoluta del archivo notes.txt dentro del directorio data.
    const filePath = join(cwd(), 'data', 'notes.txt');

    // Utiliza await y stat() para obtener los metadatos del archivo.
    const fileStats = await stat(filePath);

    // Muestra en consola la información requerida.
    console.group('Información del archivo:');
    console.log('Nombre del archivo:', basename(filePath));
    console.log('Tamaño en bytes:', fileStats.size);
    console.log('Fecha de última modificación:', fileStats.mtime.toLocaleString());
    console.log('¿Es un archivo regular?:', fileStats.isFile());
    console.groupEnd();
} catch (error) {
    console.error(
        "Error al consultar los metadatos del archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}