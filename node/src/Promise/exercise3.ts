// Ejercicio 3 — Promise.allSettled()
// Objetivo: obtener los resultados de las tres operaciones, incluso si alguna falla.

// Partiendo de tus funciones users(), products() y orders():
// 1. Modifica únicamente main().
// 2. Utiliza Promise.allSettled() con await.
// 3. Identifica qué operaciones se resolvieron y cuáles fueron rechazadas.
// 4. Muestra los datos de las operaciones exitosas.
// 5. Muestra el motivo del rechazo de las operaciones fallidas.
// Restricciones:
// - No modifiques las tres funciones.
// - No utilices .then() ni .catch().
// - No asumas que todas las operaciones tendrán éxito.
// Pista: cada resultado tiene una propiedad status. Si es "fulfilled", puedes consultar value; si es "rejected", puedes consultar reason.

import { users, products, orders } from './exercise2.ts'

async function main() {

    const result = await Promise.allSettled([
        users(),
        products(),
        orders()
    ]);

    result.forEach(r => {
        if (r.status === "fulfilled") {
            console.log("Exito:", r.value)
        } else if (r.status === "rejected") {
            console.error(
                "Error:",
                r.reason instanceof Error
                    ? r.reason.message
                    : String(r.reason)
            )
        }
    })

}

// main()