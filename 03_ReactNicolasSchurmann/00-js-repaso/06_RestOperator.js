const rest = (...argumentos) => {
    console.log(argumentos)
}

rest(1,2,3)

// ! El RestOperator Siempre debe ser el ultimo parametro
const rest2 = (a,b, ...argumentos) => {
    console.log(a)
    console.log(b)
    console.log(argumentos)
}
rest2(1,2,3,4,5)


const obj = {
    a:1, b:2, c:3, d:4
}

// ! Object destructuring, indica que propiedades del objeto quiero utilizar
// const { a, b, ...restobj} = obj
// console.log('')
// console.log(a,b, restobj)


// ! Array destructuring
const arr = [1,2,3,4,5]
//const [a , b, c, d, e, f, g] = arr
const [a , b, ...r] = arr
console.log(a,b,r)

const useState = () => ['valor', () => {}]
console.log(useState())

// ! Array destructuring con funciones
const [valor, setValor] = useState()
console.log(valor, setValor)