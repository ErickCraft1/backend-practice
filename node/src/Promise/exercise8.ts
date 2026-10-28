// Ejercicio 8 — Encadenamiento de operaciones asíncronas
// Objetivo: ejecutar operaciones en secuencia utilizando async/await.

// Requisitos:
// 1. Utiliza las funciones users() y orders().
// 2. Primero, obtén los usuarios y guarda el resultado.
// 3. Después, obtén los pedidos y guarda el resultado.
// 4. Muestra ambos resultados en la consola.
// 5. Gestiona los errores con try/catch.
// 6. Utiliza finally para indicar que el proceso terminó.
// 7. Modifica únicamente main().
// 8. No utilices .then() ni .catch().

// Pistas:
// - Con await, la siguiente línea espera a que termine la operación anterior.
// - Si una operación falla, el flujo pasa al catch.
// - finally se ejecuta tanto si hay éxito como si ocurre un error.

// Importación:
import { users, orders } from './exercise2.ts'

async function main() {
    try {
        // Obtenemos los datos de usuarios y pedidos en secuencia
        const userData = await users();
        const orderData = await orders();

        // Mostramos ambos resultados en la consola
        console.group()
        console.log("User Data:", userData);
        console.log("Order Data:", orderData);
        console.groupEnd()
    } catch (error) {
        // Gestionamos los errores
        console.error(
            "Error fetching data:",
            error instanceof Error
                ? error.message
                : String(error)
        )
    } finally {
        // Indicamos que el proceso terminó
        console.log("Process completed.");
    }
}

main()