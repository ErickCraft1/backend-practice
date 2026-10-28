// Ejercicio 4 — Promise.race()
// Objetivo: identificar qué ocurre cuando varias promesas compiten por terminar primero.

//     Promise.race() devuelve una promesa que adopta el resultado de la primera promesa que se resuelva o se rechace.No necesariamente gana la primera que tiene éxito.
//         Requisitos
// 1. Parte de tus funciones users(), products() y orders().
// 2. Modifica únicamente main().
// 3. Utiliza Promise.race() junto con await.
// 4. Muestra el resultado si la primera promesa termina correctamente.
// 5. Captura y muestra el error si la primera promesa termina con un rechazo.
// 6. No modifiques las tres funciones ni utilices.then().
//     Pistas
//     - Promise.race() recibe un iterable de promesas.
// - Puedes usar try/catch para gestionar el resultado.
//     - Recuerda que tus funciones son asíncronas, pero eso no significa que una vaya a terminar antes que las demás en todos los casos.

import { users, products, orders } from './exercise2.ts'

async function main() {
    try {
        const result = await Promise.race([
            users(),
            products(),
            orders()
        ]);

        console.log("First completed:", result)

    } catch (error) {
        console.error(
            "Error fetching data:",
            error instanceof Error
                ? error.message
                : String(error)
        )
    }
}

// main()