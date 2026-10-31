// Ejercicio 42 — Observar cambios con watch() y filtrar eventos

// Objetivo: identificar y procesar diferentes tipos de eventos mediante watch().

// Requisitos:
// 1. Importa watch desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo notes.txt dentro de data.
// 5. Utiliza watch() para observar el archivo.
// 6. Recorre los eventos mediante for await...of.
// 7. Utiliza una estructura condicional para identificar si el evento es change o rename.
// 8. Muestra un mensaje diferente según el tipo de evento recibido.
// 9. Muestra el nombre del archivo afectado, contemplando que filename puede ser null.
// 10. Gestiona los errores mediante try/catch.
// 11. Realiza el ejercicio en exercise42.ts, dentro de la misma carpeta.
// 12. No instales dependencias.

// Pistas:
// - Utiliza event.eventType para evaluar el tipo de evento.
// - Puedes utilizar if / else if / else.
// - Utiliza el operador ?? para contemplar un filename nulo.
// - Modifica notes.txt mientras el observador está activo.

import { watch } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    const notesFile = join(cwd(), 'data', 'notes.txt');
    const watcher = watch(notesFile);
    for await (const event of watcher) {
        if (event.eventType === 'change') {
            console.group('Evento de cambio:\n');
            console.log(`El archivo ${event.filename ?? 'No disponible'} ha sido modificado.\n\n`);
            console.groupEnd();
        } else if (event.eventType === 'rename') {
            console.group('Evento de renombrado:\n');
            console.log(`El archivo ${event.filename ?? 'No disponible'} ha sido renombrado o eliminado.\n\n`);
            console.groupEnd();
        }
    }
} catch (error) {
    console.error(
        "Error al observar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}