export function getUserById(id: number): {
    id: number;
    name: string;
} | null {
    // Definir el tipo de retorno de la función
    if (id === 1) {
        return { id: 1, name: "Alex" };
    } else {
        return null;
    }
}