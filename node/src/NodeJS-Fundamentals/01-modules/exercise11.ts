// Ejercicio 1 — Módulos y exportaciones en Node.js
// Objetivo: separar una funcionalidad en un módulo e importarla desde otro archivo.

// Requisitos:
// 1. Crea un archivo llamado userService.ts.
// 2. Dentro de userService.ts, crea y exporta una función llamada getUserById().
// 3. La función debe recibir un id de tipo number.
// 4. Debe devolver un objeto con las propiedades id y name.
// 5. Si el id es 1, devuelve un usuario con ese id y el nombre "Alex".
// 6. Si el id no es 1, devuelve null.
// 7. Crea un archivo llamado main.ts e importa getUserById() desde userService.ts.
// 8. Ejecuta la función con los ids 1 y 2, mostrando ambos resultados en consola.
// 9. Utiliza export e import; no copies la función dentro de main.ts.

// Pistas:
// - Usa export para permitir que otro archivo acceda a la función.
// - Usa import para traer la función a main.ts.
// - Define explícitamente el tipo de retorno de la función.
// - Puedes usar una condición if para comprobar el id.

// Archivos:
// userService.ts
// main.ts

import { getUserById } from './utils/userService.ts';

function main() {
    // Llamar a la función con id 1
    const user1 = getUserById(1);
    console.log(user1); // Debería mostrar: { id: 1, name: "Alex" }

    // Llamar a la función con id 2
    const user2 = getUserById(2);
    console.log(user2); // Debería mostrar: null
}

main();