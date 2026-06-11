
const offset = 0 /* Configurando o 'passo' de apresentação dos pokemons */

const limit = 10 // Configurando a quantidade máxima de pokemons a serem exibidos na tela 

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon) { // Função que converte os dados do pokemon pra HTML, substituindo pelo nome de cada pokemon
    return `
        <li class="pokemon">
            <span class="number">#001</span>
                <span class="name">${pokemon.name}</span> 
                
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
        </li>  
        `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
    const listItens = []

        for (let i = 1; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItens.push(convertPokemonToHtml(pokemon))
        }    
        
        console.log(listItens)
    }) 
        
    

