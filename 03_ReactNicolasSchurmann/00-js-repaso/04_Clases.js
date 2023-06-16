// ! Es una expresion de clase
// const Rectangulo = class R {

// }

// ! Esta es una declaracion de clase
// ? Clases declaradas con 'class' no tienen Hoisting
class Rectangulo {

}

// * Se llama Hoisting
// * Y esto es cuando tomamos las varibles definidas con var 
// * las funciones con function y la lleva al inicio del archivo
//console.log(Cuadrado)
function Cuadrado() {}
//console.log(Rectangulo, Cuadrado)

const r = new Rectangulo()


class Chancho {
    propiedad = 'mi propiedad'

    // ! Una propiedad privada solo se puede acceder desde la clase
    #hambre = false

    // ! Una propiedad estatica se puede acceder sin instanciar la clase
    static estatico = 42

    constructor(estado = 'feliz', hambre = false){
        this.estado = estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`Soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!': 'satisfecho!'}`)
    }

    // ! Un método estatico se puede ejecutar sin instanciar la clase
    // ? Los metodos estaticos no pueden acceder a las propiedades de la clase
    static comer(){
        console.log(this.estatico,`El chancho come`)
    }
}

const feliz = new Chancho('feliz')
console.log(feliz)
feliz.hablar()
console.log(feliz)
Chancho.comer()

// Al ejecutar en node no muestran los métodos
// Pero si se ejecuta en el explorador, sí aparecen
//console.log(feliz.__proto__) 
