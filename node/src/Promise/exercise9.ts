// Ejercicio 9 — Ejecución en paralelo
// Objetivo: obtener varios conjuntos de datos de forma concurrente.

// Requisitos:
// 1. Utiliza users() y products().
// 2. Ejecuta ambas funciones en paralelo con Promise.all().
// 3. Guarda ambos resultados en variables independientes mediante
//    la desestructuración de un array.
// 4. Muestra ambos resultados en la consola.
// 5. Gestiona los errores con try/catch.
// 6. Utiliza finally para indicar que el proceso terminó.
// 7. Modifica únicamente main().
// 8. No utilices .then() ni .catch().

// Pistas:
// - Promise.all() recibe un array de promesas.
// - Puedes usar await Promise.all([...]).
// - La desestructuración permite asignar cada resultado a una variable.
// - Si una promesa falla, Promise.all() rechaza su promesa.

// Importación:
import { users, products } from './exercise2.ts'

async function main() {
    try {
        // Ejecutamos ambas funciones en paralelo con Promise.all()
        const [userData, productData] = await Promise.all([
            users(),
            products()
        ]);

        // Mostramos ambos resultados en la consola
        console.group();
        console.log("User Data:", userData);
        console.log("Product Data:", productData);
        console.groupEnd();
    } catch (error) {
        console.error(
            "Error fetching data:",
            error instanceof Error
                ? error.message
                : String(error)
        );
    }
}

main().finally(() => {
    // Indicamos que el proceso terminó
    console.log("Process completed.");
})