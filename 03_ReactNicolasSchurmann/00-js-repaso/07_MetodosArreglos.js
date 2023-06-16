const arr = [-5, -1, -2, -3, -4]

const r = arr.filter(el => el > 2)
// console.log(r)

const r2 = arr.filter((el,i) => {
    //console.log(i)
    return el > 2
})
//console.log(r2)


const mapped = arr.map((el) => el * 2)
//console.log(mapped)


// const mapped2 = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped2)
const users = [
    {id: 1, name: 'Chanchito feliz'},
    {id: 2, name: 'Chanchito triste'},
    {id: 3, name: 'Chanchito emocionado'},
    {id: 4, name: 'Felipe'}
]

const mapped2 = users.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped2)

// ? acc: es el acumulador
// ? el: es el elemento del array
// ? '0' el segundo parametro es el valor inicial del acumulador
// const r1 = arr.reduce((acc,el) => acc + el, 0)
// console.log(r1)


// ! Reduce es una función muy flexible
const getMax = (a,b) => Math.max(a,b)
const r1 = arr.reduce(getMax)
console.log(r1)


// !Arroja un string con una coma al inicio
const r3 = users.reduce((acc,el) => `${acc}, ${el.name}`,'')
console.log(r3)


const r4 = users.reduce((acc,el) => 
    `${acc === '' ? '' : `${acc}, `}${el.name}`
    ,''
)
// console.log(r4)

// Filter y map al mismo tiempo
const r5 = users.reduce((acc,el) => {
    if (el.id <2) {
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r5)