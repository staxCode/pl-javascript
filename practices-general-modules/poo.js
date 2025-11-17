// Ejercicio de POO en JavaScript

/**
 * Escenario Real: Estás desarrollando una librería para gestionar distintos tipos de vehículos
 * (Coches, Motos) en un sistema de inventario. Necesitas modelar la jerarquía y el comportamiento 
 * común de los vehículos.
 */

class Vehicle {
    // Asi se define una propiedad estatica de la clase
    // Las propiedades estáticas pertenecen a la clase misma, no a las instancias.
    // Se acceden directamente desde la clase (Vehicle.count) sin necesidad de crear un objeto.
    // Se inicializa con un valor por defecto que se comparte entre todas las instancias.
    static count = 0;
    
    // Asi se definen las propiedades de la clase
    // Las propiedades son variables que pertenecen a la clase y almacenan el estado de cada instancia.
    // Cada objeto creado a partir de esta clase tendrá sus propios valores para estas propiedades.
    model;
    make;
    
    // Asi se define el constructor de la clase
    // El constructor es un método especial que se ejecuta automáticamente al crear una nueva instancia.
    // Se usa para inicializar las propiedades del objeto con valores específicos.
    constructor(model){
        this.model = model;
        // Asi se inicializa una propiedad estatica de la clase
        // Las propiedades estaticas pertenecen a la clase misma, no a las instancias.
        // Se acceden directamente desde la clase (Vehicle.count) sin necesidad de crear un objeto.
        // Se incrementa el contador de vehículos cada vez que se crea una nueva instancia de la clase padre.
        Vehicle.count++;
    }

    // Asi se define un metodo estatico de la clase
    // Los métodos estáticos pertenecen a la clase misma, no a las instancias.
    // Se llaman directamente desde la clase (Vehicle.getVehicleCount()) sin necesidad de crear un objeto.
    static getVehicleCount(){
        return `Hay ${Vehicle.count} vehículos`;
    }
    
    // Asi se define un metodo privado de la clase
    // Los métodos privados solo pueden ser accedidos desde dentro de la misma clase.
    // El prefijo # indica que es privado y no puede ser llamado desde fuera de la clase.
    #startEngine(){
        return `Hola desde el metodo privado de la clase padre`;
    }

    // Asi se define un metodo publico de la clase
    // Los métodos públicos pueden ser llamados desde cualquier parte donde se tenga acceso al objeto.
    // Son la interfaz principal para interactuar con la clase desde el exterior.
    // Este método puede ser sobrescrito por las clases hijas, lo cual es un ejemplo de POLIMORFISMO.
    // El polimorfismo permite que diferentes clases tengan diferentes implementaciones del mismo método.
    startEngine(){
        return this.#startEngine();
    }    
}

// Asi se define una clase hija que hereda de la clase padre
// La clase hija hereda las propiedades y métodos de la clase padre.
// La clase hija puede agregar nuevas propiedades y métodos propios, o bien, sobreescribir los métodos de la clase padre.
class Car extends Vehicle {
    // Asi se define una propiedad estatica propia de la clase hija
    // Las propiedades estáticas de la clase hija son independientes de las de la clase padre.
    // Se acceden directamente desde la clase hija (Car.count) sin necesidad de crear un objeto.
    static count = 0;
    
    constructor(model, make){
        // Asi se llama al constructor de la clase padre
        // El constructor de la clase padre se llama automáticamente cuando se crea una nueva instancia de la clase hija.
        // Se usa para inicializar las propiedades de la clase hija con valores específicos.
        // El super() es una palabra reservada que se usa para llamar al constructor de la clase padre.
        // Se pasa el valor del modelo a la clase padre para que lo inicialice.
        super(model);
        // Asi se inicializa una propiedad heredada de la clase padre
        // Las propiedades heredadas de la clase padre pueden ser inicializadas con valores específicos.
        // Se pasa el valor del make a la clase padre para que lo inicialice.
        this.make = make;
        // Asi se inicializa una propiedad propia de la clase hija
        // Las propiedades propias de la clase hija pueden ser inicializadas con valores específicos.
        this.color = 'red';
        this.numberOfDoors = 4;
    }

    // Asi se sobrescribe un metodo de la clase padre (POLIMORFISMO)
    // El polimorfismo permite que diferentes clases tengan diferentes implementaciones del mismo método.
    // Aquí, Car sobrescribe el método startEngine() de Vehicle con su propia implementación.
    // Esto permite que cada tipo de vehículo tenga un comportamiento específico al arrancar.
    // Se usa super.startEngine() para llamar a la implementación de la clase padre antes de añadir comportamiento propio.
    startEngine(){
        return `Hola desde el metodo propio de la clase hija ${super.startEngine()} y este es el modelo ${this.model}`;
    }

    // Asi se define un metodo estatico propio de la clase hija
    // Los métodos estáticos propios de la clase hija pueden ser llamados directamente desde la clase hija (Car.getCarCount()) sin necesidad de crear un objeto.
    static getCarCount(){
        return `There are ${Car.count} cars`;
    }

    // Asi se accede al prototipo de la clase base usando Object.getPrototypeOf()
    // El prototipo es el mecanismo que JavaScript usa para la herencia. Cada objeto tiene una referencia a su prototipo.
    // Object.getPrototypeOf() devuelve el prototipo del objeto, que en este caso es la clase Vehicle.
    // Esto permite acceder a métodos y propiedades de la clase padre directamente desde el prototipo.
    getParentClassInfo(){
        // Obtiene el prototipo de la instancia actual (que es Car.prototype)
        const carPrototype = Object.getPrototypeOf(this);
        // Obtiene el prototipo del prototipo (que es Vehicle.prototype, la clase padre)
        const vehiclePrototype = Object.getPrototypeOf(carPrototype);
        
        // Obtiene el nombre de la clase padre desde el constructor
        const parentClassName = vehiclePrototype.constructor.name;
        
        // Obtiene los nombres de los métodos disponibles en la clase padre
        const parentMethods = Object.getOwnPropertyNames(vehiclePrototype)
            .filter(name => name !== 'constructor' && typeof vehiclePrototype[name] === 'function');
        
        // Accede a una propiedad de la clase padre usando el prototipo
        // En este caso, accedemos a la propiedad 'model' que fue definida en Vehicle
        const parentModel = vehiclePrototype.constructor.prototype.model !== undefined 
            ? 'Definida' 
            : 'Instancia: ' + this.model;
        
        return {
            parentClass: parentClassName,
            parentMethods: parentMethods,
            modelInfo: parentModel,
            // Ejemplo de llamar a un método de la clase padre usando el prototipo
            parentStartEngine: vehiclePrototype.startEngine.call(this)
        };
    }    
}