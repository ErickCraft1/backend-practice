// Ejercicio 5 — Combinar Promise.all() y Promise.race()
// Objetivo: comprender cómo se comportan dos grupos de operaciones asíncronas.

// Requisitos:
// 1. Parte de tus funciones users(), products() y orders().
// 2. Modifica únicamente main().
// 3. Utiliza Promise.all() para agrupar users() y products().
// 4. Utiliza Promise.race() para competir entre ese grupo y orders().
// 5. Muestra el resultado si la primera promesa termina correctamente.
// 6. Captura y muestra el error si la primera promesa termina con un rechazo.
// 7. No modifiques las tres funciones.
// 8. No utilices .then().

// Pistas:
// - Promise.all() devuelve una promesa que se resuelve cuando todas
//   las operaciones del grupo se resuelven.
// - Promise.all() se rechaza si alguna de sus operaciones falla.
// - Promise.race() adopta el resultado de la primera promesa que termina.
// - Puedes combinar ambas dentro de Promise.race().

// Importación:
import { users, products, orders } from './exercise2.ts'

async function main() {
    try {
        // Agrupamos users() y products() con Promise.all()
        const aproved = Promise.all([
            users(),
            products()
        ]);

        // Competimos entre el grupo de operaciones y orders() con Promise.race()
        const result = await Promise.race([
            aproved,
            orders()
        ]);

        console.log("First completed:", result);

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