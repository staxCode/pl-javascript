// Metodos utiles para trabajar con objetos y arrays en JavaScript

// -> Metodos de alto orden (Higher-Order Methods) para arrays
// Estos metodos permiten manipular arrays de manera funcional 
// pero sin mutar el array original.
console.log('--- Metodos de alto orden para arrays ---');
const users = [
    { id: 1, name: 'Alice', age: 28, points: 150 },
    { id: 2, name: 'Bob', age: 34, points: 200 },
    { id: 3, name: 'Charlie', age: 22, points: 100 },
    { id: 4, name: 'Diana', age: 17, points: 50 },
    { id: 5, name: 'Eve', age: 19, points: 75 },
];
// For each
const usersLogs = [];
users.forEach(user => {
    usersLogs.push(`Usuario: ${user.name}, Edad: ${user.age}`);
});
console.log('Logs de usuarios:', usersLogs);
// Map
const userNames = users.map(user => user.name);
console.log('Nombres de usuarios:', userNames);
// Filter
const usersMayores = users.filter(user => user.age > 18);
console.log('Usuarios mayores de 18:', usersMayores);
// Reduce
const userTotalPoints = users.reduce((total, user) => total + user.points, 0);
console.log('Total de puntos de usuarios:', userTotalPoints);
console.log('Lista de usuarios original:', users);

// -> Metodos para trabajar con objetos
console.log('--- Metodos para trabajar con objetos ---');
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000, categoria: 'Electrónica', soldOut: false },
    { id: 2, nombre: 'Camiseta', precio: 20, categoria: 'Ropa', soldOut: false },
    { id: 3, nombre: 'Teléfono', precio: 500, categoria: 'Electrónica', soldOut: false },
];

// find
const productosElectronica = productos.find(producto => producto.categoria === 'Electrónica');
console.log('Primer producto de electrónica:', productosElectronica);
// Find index
const indexCamiseta = productos.findIndex(producto => producto.nombre === 'Camiseta');
console.log('Índice de la camiseta:', indexCamiseta, productos[indexCamiseta].nombre);
// some
const existeCategoriaRopa = productos.some(producto => producto.categoria === 'Ropa');
console.log('¿Existe algún producto de ropa?:', existeCategoriaRopa);
// every
const todosDisponibles = productos.every(producto => !producto.soldOut);
console.log('¿Todos los productos están disponibles?:', todosDisponibles);
// Flat map
// const categorias = productos.flatMap(producto => producto.categoria);
// console.log('Categorías de productos:', categorias);