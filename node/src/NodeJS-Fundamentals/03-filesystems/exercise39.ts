// Ejercicio 39 — Crear y consultar directorios

// Objetivo: crear un directorio y consultar su contenido utilizando las APIs de Node.js.

// Requisitos:
// 1. Importa mkdir y readdir desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta de un directorio llamado reports dentro de data.
// 5. Utiliza mkdir() para crear el directorio reports.
// 6. Utiliza la opción recursive para evitar errores si los directorios intermedios no existen.
// 7. Utiliza readdir() para consultar el contenido del directorio data.
// 8. Muestra en consola los nombres de los elementos encontrados.
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise39.ts, dentro de la misma carpeta.
// 11. No instales dependencias.

// Pistas:
// - mkdir() crea directorios.
// - readdir() devuelve un arreglo con los nombres de los elementos.
// - No necesitas utilizar withFileTypes en este ejercicio.
// - Recuerda que reports se encuentra dentro de data.

import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const reportsDir = join(cwd(), 'data', 'reports');
    await mkdir(reportsDir, { recursive: true });
    console.log('Directorio reports creado exitosamente.');

    const content = await readdir(join(cwd(), 'data'));
    console.log('Contenido del directorio data:', content);
} catch (error) {
    console.error(
        "Error al crear el directorio o consultar su contenido:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}