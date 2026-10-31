// Ejercicio 20 — Comprobar si un archivo existe
// Objetivo: comprobar si un archivo se puede consultar y leer utilizando node/promises.

// Requisitos:
// 1. Importa access y readFile desde "node/promises".
// 2. Construye la ruta hacia "example.txt" utilizando new URL() e import.meta.url.
// 3. Utiliza await y access() para comprobar si puedes acceder al archivo.
// 4. Si puedes acceder, lee su contenido con readFile() usando la codificación UTF-8.
// 5. Muestra el contenido del archivo en consola.
// 6. Gestiona los errores con try/catch, incluyendo el caso en que el archivo no exista o no pueda leerse.
// 7. Realiza el ejercicio en exercise20.ts.
// 8. No instales dependencias adicionales.

// Pistas:
// - access() lanza un error si no puede acceder al archivo.
// - readFile() devuelve una Promise.
// - Crea manualmente example.txt junto a exercise20.ts y escribe algún texto dentro.
// - No necesitas utilizar existsSync() ni instalar paquetes.

// Importación:
// Importa access y readFile desde "node/promises".

import { access, readFile } from 'node:fs/promises';

try {
    const filePath = new URL('./example.txt', import.meta.url);
    await access(filePath);
    const contents = await readFile(filePath, 'utf-8');
    console.log("Contenido del archivo:", contents);
} catch (error) {
    console.error(
        "Error al acceder o leer el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}