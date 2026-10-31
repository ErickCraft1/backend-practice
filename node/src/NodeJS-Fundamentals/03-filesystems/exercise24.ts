// Objetivo: aprender a copiar archivos utilizando copyFile() de Node.js.

// Requisitos:
// 1. Importa copyFile desde "node/promises".
// 2. Importa join desde "node".
// 3. Importa cwd desde "node".
// 4. Construye la ruta absoluta del archivo de origen example.txt, ubicado en la carpeta de los ejercicios.
// 5. Construye la ruta de destino para copiarlo dentro del directorio data, creado en el ejercicio anterior, con el nombre example-copy.txt.
// 6. Utiliza await y copyFile() para realizar la copia.
// 7. Muestra un mensaje en consola con la ruta del archivo copiado.
// 8. Gestiona los errores mediante try/catch.
// 9. Realiza el ejercicio en exercise24.ts, dentro de la misma carpeta.
// 10. No instales dependencias adicionales.

// Pistas:
// - join() permite construir rutas a partir de varios segmentos.
// - cwd() devuelve el directorio de trabajo actual.
// - copyFile() recibe primero la ruta de origen y después la ruta de destino.
// - Comprueba que el directorio data y el archivo example.txt existan antes de ejecutar el ejercicio.
// - Consulta la documentación de node:fs/promises si necesitas conocer más opciones de copyFile().

// Importaciones:
// Importa copyFile desde "node/promises", join desde "node" y cwd desde "node".

import { copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

try {
    // Construye la ruta absoluta del archivo de origen example.txt, ubicado en la carpeta de los ejercicios
    const sourceFile = join(cwd(), 'node', 'src', 'NodeJS-Fundamentals', 'example.txt');

    // Construye la ruta de destino para copiar el archivo dentro del directorio data
    const destinationFile = join(cwd(), 'data', 'example-copy.txt');

    // Copia el archivo de origen al destino
    await copyFile(sourceFile, destinationFile);

    console.log("Archivo copiado correctamente a:", destinationFile);
} catch (error) {
    console.error(
        "Error al copiar el archivo:",
        error instanceof Error
            ? error.message
            : String(error)
    )
}