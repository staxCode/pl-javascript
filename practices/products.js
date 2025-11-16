const productos = [
    { id: 101, nombre: 'Laptop Gamer', categoria: 'Electronica', precio: 1200, descuento: 150 },
    { id: 102, nombre: 'Monitor Curvo', categoria: 'Electronica', precio: 300, descuento: 30 },
    { id: 103, nombre: 'Silla Ergonomica', categoria: 'Mobiliario', precio: 250, descuento: 50 },
    { id: 104, nombre: 'Teclado Mecanico', categoria: 'Perifericos', precio: 90, descuento: 10 },
];

const resumenInventario = productos.map(producto => {
    const { id, nombre, categoria, precio, descuento } = producto;
    return {
        id,
        nombre_completo: `${nombre} - ${categoria}`,
        precio_final: precio - descuento,
        ...producto,
    }
})

const precioPromedioFinal = resumenInventario.reduce((acumulador, producto) => {
    return acumulador + producto.precio_final;
}, 0) / resumenInventario.length;


console.log('Resumen del Inventario:', resumenInventario);
console.log('Precio Promedio Final:', precioPromedioFinal);


const filtrarPorCategoria = (categoria) => {
    return (categorias) => {
        const _categorias = categorias.filter(producto => producto.categoria === categoria);
        if (_categorias.length === 0 ) {
            return categorias.filter(producto => Object.keys(producto).length > 0);
        }
        return _categorias;
    }
}

const usuarios = [
  { id: 1, nombre: 'Ana', configuracion: { tema: 'Oscuro', notificaciones: true } },
  { id: 2, nombre: 'Beto', email: 'b@ej.com' }, // Sin 'configuracion'
  { id: 3, nombre: 'Carlos', configuracion: { notificaciones: false } }, // Sin 'tema'
];

const propiedadOpcionales = (listaUsuarios) => {
 return listaUsuarios.map(usuario => `${usuario.nombre} ${usuario.configuracion?.tema ?? 'Claro'}`);
}

console.log('Filtrar por Categoria Electronica:', filtrarPorCategoria('Electronica')(productos));
console.log('Propiedades Opcionales:', propiedadOpcionales(usuarios));