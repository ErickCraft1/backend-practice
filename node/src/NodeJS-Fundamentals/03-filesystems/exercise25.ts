// Requisitos:
// 1. Importa rename desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo example-copy.txt, ubicado dentro del directorio data de tu proyecto.
// 5. Construye una nueva ruta de destino dentro de data, con el nombre example-renamed.txt.
// 6. Utiliza await y rename() para renombrar el archivo.
// 7. Muestra en consola la ruta del archivo después del cambio.
// 8. Gestiona los errores mediante try/catch.
// 9. Realiza el ejercicio en exercise25.ts, dentro de la misma carpeta que los anteriores.
// 10. No instales dependencias adicionales.

// Pistas:
// - join() permite construir rutas a partir de segmentos.
// - cwd() devuelve el directorio de trabajo actual del proceso.
// - rename() recibe primero la ruta actual y después la nueva ruta.
// - Este ejercicio depende del archivo creado en el ejercicio 24. Asegúrate de que data/example-copy.txt exista antes de ejecutarlo.
// - Si ejecutas el ejercicio más de una vez, recuerda que el archivo tendrá otro nombre después de la primera ejecución.

// Importaciones:
// Importa rename desde "node/promises", join desde "node" y cwd desde "node".

import { rename } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    // Construye la ruta absoluta del archivo example-copy.txt, ubicado dentro del directorio data
    const currentFilePath = join(cwd(), 'data', 'example-copy.txt');

    // Construye una nueva ruta de destino dentro de data, con el nombre example-renamed.txt
    const newFilePath = join(cwd(), 'data', 'example-renamed.txt');

    // Renombra el archivo
    await rename(currentFilePath, newFilePath);

    console.log("Archivo renombrado correctamente a:", newFilePath);
} catch (error) {
    console.error(
        "Error al renombrar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}