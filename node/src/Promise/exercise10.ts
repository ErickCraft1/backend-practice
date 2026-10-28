// Ejercicio 10 — Transformar datos obtenidos de una Promise
// Objetivo: obtener usuarios y crear un nuevo array que contenga únicamente sus nombres.

// Requisitos:
// 1. Utiliza users().
// 2. Obtén los usuarios utilizando await.
// 3. Transforma el resultado en un nuevo array que contenga únicamente los nombres de los usuarios.
// 4. Guarda el array transformado en una variable independiente.
// 5. Muestra el array original y el array transformado.
// 6. Gestiona los errores con try/catch.
// 7. Utiliza finally para indicar que el proceso terminó.
// 8. Modifica únicamente main().
// 9. No utilices .then() ni .catch().

// Pistas:
// - users() devuelve una promesa con un array de usuarios.
// - Utiliza await para obtener el resultado de users().
// - Puedes utilizar .map() para crear un nuevo array a partir del original.
// - Consulta la estructura de los usuarios en exercise2.ts para identificar la propiedad que contiene sus nombres.

// Importación:
import { users } from './exercise2.ts'

async function main() {
    try {
        // Obtenemos los usuarios utilizando await
        const userData = await users();

        // Extraemos los nombres de los usuarios y creamos un nuevo array
        const userNames = userData.map(user => user.name);

        // Mostramos el array original y el array transformado
        console.group("User transformation");
        console.log("User Data:", userData);
        console.log("User Names:", userNames);
        console.groupEnd();
    } catch (error) {
        // Gestionamos los errores
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