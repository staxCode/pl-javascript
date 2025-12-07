// console.log('Holaa!');

//? Operador nullish
// Diremos que una expresión es “definida” cuando no es null ni undefined
{
    const a = undefined; // Para nullish es incorrecto
    const c = null; // Para nullish es incorrecto
    const e = -1;
    const b = 2;
    const resultOperatorNullish = c ?? e ?? a ?? b; // -1
    console.log(resultOperatorNullish)
}
//?OR '||' y  AND '&&'
{
    const a = 3;
    const b = 2;
    const c = 1;
    const resultOrComparation = (c && b) ?? a; // 2
    // null && 1 = ¿null?
    console.log(resultOrComparation)
}

//? Funciones
{
    //* Callbacks
    function saySommethingOne(input, fn, fn2) {
        const data = fn(input)
        setTimeout(() => {
            return fn2(data)
        }, 2400)
    }

    function saySommethingTwo(data) {
        console.log(data)
    }

    // saySommethingOne("John",
    //     function (name) {
    //         return `Hola ${name}`
    //     },
    //     saySommethingTwo
    // )

    function realizarPedido(pedido, callback) {
        console.log('Realizando pedido...')
        setTimeout(function () { return callback(pedido) }, 2000)
    }

    // realizarPedido("Tomates", function (pedido) {
    //     console.log(`Pedido realizado: ${pedido}`)
    // })

    // setTimeout(function () {
    //     console.log("Iniciando descarga...");
    //     return setTimeout(function () {
    //         console.log("Descargando datos...");
    //         return setTimeout(function () {
    //             console.log("Procesando datos...");
    //             return setTimeout(function () {
    //                 console.log("Finalizado");
    //             }, 4000)
    //         }, 3000)
    //     }, 2000)
    // }, 1000)

    function _filter(arr, callback) {
        if (!Array.isArray(arr)) {
            return callback(new Error("Se requiere que se un array"), null)
        }
        return callback(null, arr)
    }

    const numbersFilters = _filter([104774, 9, 3, 44, 76, 447, 845, 74444], function (err, data) {
        if (err) {
            throw new Error(err.message);
        }
        return data.filter(n => n % 2 === 0)
    })

    console.log(numbersFilters)

    //* Funciones de orden superior

    const numbers_map = [1, 2, 3, 4, 5, 6].map(n => n % 2 === 0 ? n * n : `${n}`).filter(
        n => n < 20
    )
    console.log(numbers_map);
    numbers_map.reduce((acc, n) => acc + n, 0);
    console.log(numbers_map);
}