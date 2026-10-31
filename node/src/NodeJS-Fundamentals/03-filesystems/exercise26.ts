// Ejercicio 26 — Eliminar archivos con node/promises

// Objetivo: aprender a eliminar un archivo utilizando unlink() de Node.js.

// Requisitos:
// 1. Importa unlink desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo example-renamed.txt, ubicado dentro del directorio data de tu proyecto.
// 5. Utiliza await y unlink() para eliminar el archivo.
// 6. Muestra un mensaje en consola que confirme la eliminación del archivo.
// 7. Gestiona los errores mediante try/catch.
// 8. Realiza el ejercicio en exercise26.ts, dentro de la misma carpeta que los anteriores.
// 9. No instales dependencias adicionales.

// Pistas:
// - join() permite construir rutas a partir de segmentos.
// - cwd() devuelve el directorio de trabajo actual del proceso.
// - unlink() elimina un archivo; no se utiliza para eliminar directorios.
// - Este ejercicio depende del archivo generado en el ejercicio 25.
// - Ejecuta el ejercicio solo cuando estés seguro de que quieres eliminar ese archivo. Si lo ejecutas otra vez, fallará porque el archivo ya no existirá.

// Importaciones:
// Importa unlink desde "node/promises", join desde "node" y cwd desde "node".

import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const filePath = join(cwd(), 'data', 'example-renamed.txt');
    await unlink(filePath);
    console.log("Archivo eliminado correctamente:", filePath);
} catch (error) {
    console.error(
        "Error al eliminar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}