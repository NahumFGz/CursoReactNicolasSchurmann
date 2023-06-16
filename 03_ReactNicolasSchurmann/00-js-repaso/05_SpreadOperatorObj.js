// ! Spread operator en objetos
const obj1 = {a: 1, b: 2}
const obj2 = {b: 5, c: 'chanchito feliz'}

const obj3 = {...obj1}
obj1.a = 10
console.log(obj3, obj1)

// ! Cuando se asignan dos objetos por spreadoperator con el mismo nombre de propiedad, se sobreescribe el valor
const obj4 = {...obj1, ...obj2}
console.log(obj1)
console.log(obj2)
console.log(obj4)


const obj5 = {
    ...obj1,
    loading: true,
    data: {
        prop: 'lala',
        animal: 'perrito'
    }
}
console.log(obj5)