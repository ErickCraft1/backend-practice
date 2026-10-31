// Ejercicio 15: variables de entorno

// Objetivo: acceder a variables de entorno mediante process.env, sin instalar dependencias.

// Requisitos
// 1. Consulta la variable de entorno NODE_ENV mediante process.env.
// 2. Guarda su valor en una constante.
// 3. Si existe, muestra su valor en consola.
// 4. Si no existe, muestra el mensaje "NODE_ENV no está definida".
// 5. No instales dependencias ni uses archivos.env todavía.


// Pistas
//  process.env.NODE_ENV puede ser string o undefined.
//  Puedes usar un if/else para comprobar si existe.
//  No necesitas async / await ni try/catch.

// // Ejercicio 15 — Consultar variables de entorno
const nodeEnv = process.env.NODE_ENV;

if (nodeEnv) {
    console.log("Valor de NODE_ENV:", nodeEnv);
} else {
    console.log("NODE_ENV no está definida");
}