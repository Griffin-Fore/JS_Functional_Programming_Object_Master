// Object Master
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// Using the above Pokemon array, find the following:

// an array of pokémon objects where the id is evenly divisible by 3

// How to compare by the id out of an object in an array:
let pokemonWithIdsDivisibleByThree = pokemon.filter(({id}) => id % 3 === 0)
console.log(pokemonWithIdsDivisibleByThree);

// an array of pokémon objects that are "fire" type
// loops through the array, looks at the types key, loops through the values
let pokemonWithFireType = pokemon.filter(({types:[type]}) => type === "fire" )
console.log(pokemonWithFireType);
// an array of pokémon objects that have more than one type
// filter
let pokemonWithMultipleTypes = pokemon.filter(({types}) => types.length > 1)
console.log(pokemonWithMultipleTypes);

// an array with just the names of the pokémon
// for each iteration, add to the array a return of just the name
let pokemonNames = pokemon.map(({name}) => name)
console.log(pokemonNames);

// an array with just the names of pokémon with an id greater than 99
let pokemonWithIdGreaterThan99 = pokemon.filter(({id}) => id > 99).map(({name}) => name)
console.log(pokemonWithIdGreaterThan99)

// an array with just the names of the pokémon whose only type is poison
// filter
let namesOfPoisonTypePokemon = pokemon.filter(({types}) => types.length <= 1 && types[0] === "poison").map(({name}) => name)
console.log(namesOfPoisonTypePokemon);

// an array containing just the first type of all the pokémon whose second type is "flying"
let firstTypeOfFlyingType = pokemon.filter(({types}) => types[1] === "flying").map(({types}) => types[0])
console.log(firstTypeOfFlyingType)

// a count of the number of pokémon that are "normal" type
let normalTypePokemon = pokemon.filter(({types:[type]}) => type === "normal").length
console.log(normalTypePokemon)

// an array with all pokemon except the pokemon with the id of 148
let allPokemonExceptForId148 = pokemon.filter(({id}) => id != 148)
console.log(allPokemonExceptForId148)

// an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
// spread, 
// const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
// Get an array with all the pokemon whose id is not equal to 35, at id 35, break into the object and change the type tto fairy
//                                              {pokemon object from the pokemon array}
let changingPokemonId35 = pokemon.map((pokemon) => pokemon.id != 35 ? pokemon : {...pokemon, types: ["fairy"]})
// It goess through the entire pokemon array of object and only changes the pokemon with the 'id' key value of 35 to fairy
console.log(changingPokemonId35)