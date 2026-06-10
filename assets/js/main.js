
const offset = 0 /* Configurando o 'passo' de apresentação dos pokemons */

const limit = 10 // Configurando a quantidade máxima de pokemons a serem exibidos na tela 

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error)) // Função que mostra um erro em caso de haver erro na requisição.
        
    

