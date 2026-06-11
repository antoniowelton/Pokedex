



function convertPokemonToli(pokemon) { // Função que converte os dados do pokemon pra HTML, substituindo pelo nome de cada pokemon
    return `
            <li class="pokemon ${pokemon.type}">            
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span> 
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}<\li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>  
         `
}

const pokemonList = document.getElementById('pokemonList')

/** Converte cada item da lista de pokemons em HTML e junta à lista de pokemons anteriores separados por 'espaço vazio' **/

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToli).join('')  
    pokemonList.innerHTML = newHtml 
}) 
        
    

