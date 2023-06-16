// Funciones que se declaran con la palabra reservada function
// ! Las funciones son clases basadas en prototipos
function Fn(){
    // {prop: 'propiedad'}
    
    this.prop = 'propiedad'
}

Fn.prototype.lala = function FuncionDePrototipo(){};

const r = new Fn();
//console.log(r.__proto__);


// ! No contienen contexto this -> no existe el objeto this dentro de las fat arrow functions
// ? Fat arrow functions 
console.log(this)
const fatFn = () => {
    /*
        * Puedo asignar el objeto utilizando this
        ? this.prop = 'propiedad' 
        * o creando un objeto y retornando el objeto
    */
    
    /*
    * Cuando hago esta asignacion, hace referencia al this de la primera funcion
    this.prop = 'lala'
    */
    const obj = {}
    obj.prop = 'propiedad'
    return obj
}

const r1 = fatFn();
console.log(r1);


// Tienen un return implicito
const fnR = () => 2

console.log(fnR());

const fnR2 = () => {
    return 2
}

console.log(fnR2());