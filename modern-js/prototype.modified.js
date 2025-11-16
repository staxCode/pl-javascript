{
    String.prototype.saySomething = function(text) {
        return `${text}, ${this}`;
    }
    const texto = "Pepe".saySomething("Hola");
    console.log(texto);
}