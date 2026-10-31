// Ejercicio 36 — Eliminar directorios con rm()

// Objetivo: eliminar un directorio y todo su contenido utilizando rm().

// Requisitos:
// 1. Importa rm desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del directorio temporary, ubicado dentro de data.
// 5. Utiliza await y rm() para eliminar el directorio.
// 6. Configura la opción recursive para permitir la eliminación del directorio y su contenido.
// 7. Si la eliminación tiene éxito, muestra un mensaje en consola.
// 8. Gestiona los errores mediante try/catch.
// 9. Realiza el ejercicio en exercise36.ts, dentro de la misma carpeta.
// 10. No instales dependencias.

// Pistas:
// - Crea manualmente el directorio data/temporary.
// - Dentro de temporary, crea un archivo llamado example.txt.
// - Investiga qué valor debes asignar a recursive.
// - Comprueba que el directorio y su contenido hayan desaparecido.

import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const dirPath = join(cwd(), 'data', 'temporary');

    await rm(dirPath, { recursive: true });
    console.log('El directorio temporary y su contenido han sido eliminados exitosamente.');
} catch (error) {
    console.error(
        "Error al eliminar el directorio:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}