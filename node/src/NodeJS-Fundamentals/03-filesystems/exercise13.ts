// Ejercicio 13 — Leer un archivo con node:fs
// Objetivo: leer el contenido de un archivo de texto utilizando las herramientas nativas de Node.js.

// Requisitos:
// 1. Importa readFile de "node:fs/promises".
// 2. Crea un archivo llamado example.txt dentro de la carpeta NodeJS-Fundamentals.
// 3. Escribe manualmente en example.txt una frase de tu elección.
// 4. Utiliza readFile() para leer el contenido del archivo como texto UTF-8.
// 5. Muestra el contenido leído en consola.
// 6. Gestiona posibles errores de lectura con try/catch.
// 7. Utiliza async/await para esperar la lectura del archivo.
// 8. Realiza el ejercicio en exercise13.ts.
// 9. No instales dependencias adicionales.

// Pistas:
// - readFile() de "node:fs/promises" devuelve una Promise.
// - Puedes indicar la codificación con "utf8".
// - Resuelve la ruta del archivo teniendo en cuenta desde qué directorio se ejecuta el programa.
// - Si el archivo no existe en la ruta indicada, la lectura fallará.

// Importación:
import { readFile } from 'node:fs/promises';

try {
    const filePath = new URL('./example.txt', import.meta.url);
    const contents = await readFile(filePath, 'utf-8');
    console.log("Contenido del archivo:", contents);
} catch (error) {
    console.error("Error al leer el archivo:", error);
}