// ! Forma antigua de exportar
// const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3', 'chancho 4', 'chancho 5']
// const chanchosTristes = ['triste 1', 'triste 2', 'triste 3', 'triste 4', 'triste 5']

// //module.exports = chanchosFelices

// // Par exportar mas de una variable
// // se convierte en un objeto y se exporta
// module.exports = {
//     chanchosFelices,
//     chanchosTristes
// }

// ! Nueva forma de exportar

// * Se exporta al declarar la variable
// const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3', 'chancho 4', 'chancho 5']
// export const chanchosTristes = ['triste 1', 'triste 2', 'triste 3', 'triste 4', 'triste 5']
// export const otrosChanchos = ['otro 1', 'otro 2', 'otro 3', 'otro 4', 'otro 5']

//  export default chanchosFelices

// * Se puede exportar despues de declarar las variables
const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3', 'chancho 4', 'chancho 5']
const chanchosTristes = ['triste 1', 'triste 2', 'triste 3', 'triste 4', 'triste 5']
const otrosChanchos = ['otro 1', 'otro 2', 'otro 3', 'otro 4', 'otro 5']

// * Tambien se pueden exporta funciones
const fn1 = () => {
    console.log('Soy la funcion 1')
}

const fn2 = () => {
    console.log('Soy la funcion 2')
}

export { chanchosTristes, otrosChanchos, fn1, fn2}
export default chanchosFelices