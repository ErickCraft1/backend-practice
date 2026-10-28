// Ejercicio 2 — Promise.all() con async/await y try/catch
// 1. Conserva las tres funciones.
// 2. Crea una función main() declarada con async.
// 3. Ejecuta las tres consultas usando Promise.all() y await.
// 4. Usa try/catch para manejar el rechazo.
// 5. Si una consulta falla, muestra el error; si todas funcionan, muestra los datos de las tres.
// Restricción: no uses .then() ni .catch() en esta versión. El objetivo es practicar la sintaxis alternativa de manejo de promesas.

export async function users() {
    const userData = [
        {
            name: "John Doe",
            age: 30,
        },
        {
            name: "Jane Smith",
            age: 25,
        },
        {
            name: "Alice Johnson",
            age: 28,
        }
    ]
    return userData
}

export async function products() {
    const productData = [
        {
            name: "Product A",
            price: 19.99,
        },
        {
            name: "Product B",
            price: 29.99,
        },
        {
            name: "Product C",
            price: 39.99,
        }
    ]
    return productData
}

export async function orders() {
    const orderData = [
        {
            name: "Order 1",
            total: 49.99,
        },
        {
            name: "Order 2",
            total: 79.99,
        },
        {
            name: "Order 3",
            total: 99.99,
        }
    ]
    return Promise.reject(new Error("Failed to fetch orders"))
    // return orderData
}

async function main() {
    try {
        const [userData, productData, orderData] = await Promise.all([users(), products(), orders()])
        console.log("data:", userData, productData, orderData);
    } catch (error) {
        console.error("Error fetching data:", error instanceof Error ? error.message : String(error))
    }
}
// main()