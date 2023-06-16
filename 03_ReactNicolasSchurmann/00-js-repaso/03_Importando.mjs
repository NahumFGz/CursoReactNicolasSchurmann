// ! Forma  antigua de importar 
/*
// Arhivo que importa el modulo 03_ImportExport.js
const chanchos = require('./03_ImportExport.js')

console.log(chanchos)
*/

// ! Nueva forma de importar
import chanchos, {chanchosTristes, otrosChanchos, fn1, fn2} from './03_ImportExport.mjs'

console.log(chanchos)
console.log(chanchosTristes)
console.log(otrosChanchos)
fn1()
fn2()