// Ejercicio 12 — Trabajar con rutas usando node:path
// Objetivo: construir y analizar rutas de archivos utilizando el módulo nativo path de Node.js.

// Requisitos:
// 1. Importa el módulo node:path utilizando la sintaxis de módulos que ya usas en tu proyecto.
// 2. Utiliza path.join() para construir una ruta que contenga las carpetas "src", "utils" y el archivo "userService.ts".
// 3. Guarda la ruta construida en una variable.
// 4. Utiliza path.basename() para obtener el nombre del archivo.
// 5. Utiliza path.dirname() para obtener el directorio de la ruta construida.
// 6. Muestra en consola la ruta completa construida, el nombre del archivo y el directorio.
// 7. Realiza el ejercicio en exercise12.ts.
// 8. No instales dependencias adicionales; utiliza el módulo nativo de Node.js.

// Pistas:
// - Puedes importar las funciones necesarias desde "node:path".
// - join() combina segmentos de una ruta.
// - basename() devuelve el último componente de una ruta.
// - dirname() devuelve el directorio que contiene ese componente.

// Importación de referencia:
import path from 'node:path';

// Construir la ruta utilizando path.join()
const filePath = path.join("src", "utils", "userService.ts");

// Obtener el nombre del archivo utilizando path.basename()
const filePathName = path.basename(filePath);

// Obtener el directorio utilizando path.dirname()
const fileDir = path.dirname(filePath);

// Mostrar en consola la ruta completa, el nombre del archivo y el directorio
console.group("Ruta de archivo y directorio");
console.log("Ruta completa:", filePath);
console.log("Nombre del archivo:", filePathName);
console.log("Directorio:", fileDir);
console.groupEnd();