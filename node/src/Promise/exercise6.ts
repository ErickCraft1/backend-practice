// Ejercicio 6 — Promise.any()
// Objetivo: obtener el primer resultado exitoso entre varias operaciones.

// Requisitos:
// 1. Parte de tus funciones users(), products() y orders().
// 2. Modifica únicamente main().
// 3. Utiliza Promise.any() junto con await.
// 4. Muestra el valor de la primera promesa que se resuelva correctamente.
// 5. Si todas las promesas fallan, captura y muestra el error.
// 6. No modifiques las tres funciones originales.
// 7. No utilices .then() ni .catch().

// Pistas:
// - Promise.any() espera hasta encontrar una promesa resuelta
//   correctamente.
// - Si una promesa falla, Promise.any() no se rechaza inmediatamente.
// - Si todas fallan, Promise.any() rechaza con un AggregateError.
// - Puedes utilizar try/catch para gestionar ese caso.

// Importación:
import { users, products, orders } from './exercise2.ts'


async function main() {
    try {

        // Creamos un array con las promesas de las tres funciones
        const store = [users(), products(), orders()];

        // Utilizamos Promise.any() para obtener el primer resultado exitoso
        const result = await Promise.any(store);

        // Mostramos el valor de la primera promesa que se resuelva correctamente
        console.log("First successful result:", result);
    } catch (error) {
        // Si todas las promesas fallan, capturamos y mostramos el error
        console.error(
            "All promises failed:",
            error instanceof AggregateError
                ? error.message
                : String(error)
        )
    }
}

main();