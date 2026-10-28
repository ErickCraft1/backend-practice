// Ejercicio 1 — Procesamiento concurrente

// Tienes tres funciones asíncronas que simulan consultar información de usuarios, productos y pedidos.Cada una devuelve una promesa.

// Tu tarea es:
// - Ejecutar las tres operaciones concurrentemente mediante Promise.all().
// - Obtener sus tres resultados.
// - Manejar el caso en el que una de las promesas sea rechazada.
// - Mostrar los resultados únicamente si las tres operaciones terminan correctamente.
// No uses bibliotecas externas; trabaja con JavaScript o TypeScript nativo.


async function users() {
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

async function products() {
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

async function orders() {
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
}

Promise.all([users(), products(), orders()])
    .then((values) => {
        console.log(values)
    })
    .catch((error) => {
        console.error("Error fetching data:", error.message)
    })