{
    //Currificacion de funciones
    function multiply(a) {
        return function (b) {
            return a * b;
        }
    }

    const multiplyByTwo = multiply(2);
    // ...multiplarlo por n
    console.log(multiplyByTwo(9)) // 18
}