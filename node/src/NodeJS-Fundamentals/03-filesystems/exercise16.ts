// Ejercicio 16 — Consultar variables de entorno al ejecutar Node.js
// Objetivo: acceder a una variable de entorno definida desde la terminal.

// Requisitos:
// 1. Consulta la variable de entorno APP_NAME mediante process.env.
// 2. Guarda su valor en una constante.
// 3. Si existe, muestra el nombre de la aplicación en consola.
// 4. Si no existe, muestra el mensaje "APP_NAME no está definida".
// 5. Realiza el ejercicio en exercise16.ts.
// 6. Ejecuta el archivo definiendo APP_NAME desde la terminal.
// 7. No utilices archivos .env.
// 8. No instales dependencias adicionales.

// Pistas:
// - process.env.APP_NAME puede devolver un string o undefined.
// - Puedes utilizar una condición if/else.
// - En Windows PowerShell puedes definir la variable y ejecutar el archivo así:
// wsl.exe -d Ubuntu -- zsh -lic 'cd /home/erick/backend && APP_NAME="MiBackend" pnpm exec tsx node/src/NodeJS-Fundamentals/exercise16.ts'
// - Ajusta la ruta del archivo según la carpeta desde la que ejecutes el comando.

const appName = process.env.APP_NAME;

if (appName) {
    console.log("Nombre de la aplicación:", appName);
} else {
    console.log("APP_NAME no está definida");
}