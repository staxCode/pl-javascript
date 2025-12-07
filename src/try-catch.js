// TRY ... CATCH

// Rethrowing (Relanzando) de errores
function rethrowingDemo() {
    let json = '{ "age": 30 }'; // incomplete data
    try {
        user = JSON.parse(json);
        console.log(user.name);
        console.log(data) // ReferenceError
    } catch (e) {
        console.log("inside catch")
        if (e instanceof SyntaxError) {
            console.log("JSON Syntax Error")
        } else {
            console.log("Rethrowing the error")
            throw e; // rethrowing the error
        }
    }
}
// try {
//     rethrowingDemo();
// } catch (e) {
//     console.log("Outer catch: " + e);
// }
