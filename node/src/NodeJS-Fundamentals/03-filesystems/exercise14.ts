// Ejercicio 14 — Escribir un archivo con node:fs/promises
// Objetivo: crear o sobrescribir un archivo de texto mediante una operación asíncrona.

// Requisitos:
// 1. Importa writeFile desde "node:fs/promises".
// 2. Define un texto que quieras guardar en un archivo llamado output.txt.
// 3. Construye la ruta utilizando new URL() e import.meta.url.
// 4. Utiliza await y writeFile() para guardar el contenido como texto UTF-8.
// 5. Muestra un mensaje en consola cuando la escritura termine correctamente.
// 6. Gestiona los errores con try/catch.
// 7. Realiza el ejercicio en exercise14.ts.
// 8. No instales dependencias adicionales.

// Pistas:
// - writeFile() crea el archivo si no existe y puede sobrescribirlo si ya existe.
// - La escritura es asíncrona.
// - Comprueba la ubicación donde se creará output.txt.

// Importación:
import { writeFile } from 'node:fs/promises';

try {
    const outputFile = new URL('./output.txt', import.meta.url);
    const writeData = "Este es un texto de ejemplo para guardar en el archivo output.txt.";
    await writeFile(outputFile, writeData, { encoding: 'utf-8' });
    console.log("Archivo escrito correctamente en:", outputFile.pathname);
} catch (error) {
    console.error("Error al escribir el archivo:", error);
}