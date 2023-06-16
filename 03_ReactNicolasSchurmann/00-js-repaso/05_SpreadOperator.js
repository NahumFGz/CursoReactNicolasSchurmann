const fn = (a,b,c) => console.log(a + b + c)

const arr = [1,2,3,4]


// fn(arr[0], arr[1], arr[2])
// Spread operator asigna variables según el contexto

// ! El argumento es el valor que contiene el parametro
//   1, 2, 3 -> argumentos
//   a, b, c -> parametros
fn(...arr)



const arr1 = [5,6]
// ! Forma antigua de concatenar arrays
const arr2 = arr.concat(arr1)
console.log(arr2)

// ! Forma nueva
const arr3 = [...arr, ...arr1]
console.log(arr3)

// !'...arr' es una copia del array, al modificar arr no se modifica arr4 
const arr4 = [...arr, 2, 3]
arr[0] = 'Chanchito feliz'
console.log(arr4)

// ? Otro caso
const arr5 = arr
arr[0] = 'Chanchito feliz'
console.log(arr, arr4, arr5)




