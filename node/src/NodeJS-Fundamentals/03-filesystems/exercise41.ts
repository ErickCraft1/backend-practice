// Ejercicio 41 — Observar cambios con watch()

// Objetivo: detectar cambios realizados en un archivo utilizando la API de Node.js.

// Requisitos:
// 1. Importa watch desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo notes.txt, ubicado dentro del directorio data.
// 5. Utiliza watch() para observar los cambios del archivo.
// 6. Utiliza for await...of para recorrer los eventos recibidos.
// 7. Muestra el tipo de evento recibido (eventType).
// 8. Muestra el nombre del archivo afectado (filename).
// 9. Gestiona los errores mediante try/catch.
// 10. Realiza el ejercicio en exercise41.ts, dentro de la misma carpeta.
// 11. No instales dependencias.

// Pistas:
// - watch() devuelve un iterador asíncrono.
// - Cada evento contiene eventType y filename.
// - Los tipos de eventos habituales son rename y change.
// - El observador permanece activo hasta que se interrumpe o se cierra.
// - Puedes detener la ejecución con Ctrl + C.

import { watch } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const notesFile = join(cwd(), 'data', 'notes.txt');
    const watcher = watch(notesFile);
    for await (const event of watcher) {
        console.group('Evento recibido:\n');
        console.log(`Tipo de evento: ${event.eventType}`);
        console.log(
            `Nombre del archivo afectado: 
            ${event.filename ?? 'No disponible'
            }\n\n`
        );
        console.groupEnd();
    }
} catch (error) {
    console.error(
        "Error al observar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}