// Ejercicio 7 — Promise.finally()
// Objetivo: ejecutar una acción al finalizar una operación asíncrona.

// Requisitos:
// 1. Utiliza las funciones users() y products().
// 2. Utiliza Promise.all() para obtener ambos resultados.
// 3. Muestra los resultados si la operación tiene éxito.
// 4. Si ocurre un error, captúralo con try/catch.
// 5. Utiliza .finally() para mostrar un mensaje indicando
//    que la operación ha finalizado, independientemente del resultado.
// 6. No modifiques las funciones originales.
// 7. No utilices .then() ni .catch().

// Pistas:
// - finally() se ejecuta tanto si la promesa se resuelve como si se rechaza.
// - Puedes combinar await, try/catch y finally.
// - El bloque finally no recibe automáticamente los resultados.

// Importación:
import { users, products } from './exercise2.ts'

async function main() {
    try {
        // Creamos un array con las promesas de las dos funciones
        const store = [users(), products()];

        // Utilizamos Promise.all() para obtener ambos resultados
        const result = await Promise.all(store);

        // Mostramos los resultados si la operación tiene éxito
        console.log("Results:", result);
    } catch (error) {
        // Si ocurre un error, lo capturamos y mostramos
        console.error(
            "Error fetching data:",
            error instanceof Error
                ? error.message
                : String(error)
        )
    }
}

main().finally(() => {
    // Mostramos un mensaje indicando que la operación ha finalizado
    console.log("Operation has completed.");
})