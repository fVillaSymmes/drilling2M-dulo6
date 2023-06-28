import { arrays } from "./datos.js";
import lodash from 'lodash'

const autosSinRepetir = lodash.uniq(arrays.autos)

console.log(autosSinRepetir);

const soloAnimalesSalvajes = lodash.filter(arrays.animales, function(animal) { return animal.tipo == 'salvaje'})

console.log(soloAnimalesSalvajes);
