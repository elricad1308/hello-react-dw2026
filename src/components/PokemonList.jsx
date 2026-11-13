function PokemonList ({pokemon}) {
    return (
        pokemon.map(element => 
            <li>
                <span>{ element.id }</span>
                <span>{ element.name }</span>
                <img src={element.sprite}/>
            </li>
        )
    )
}

export default PokemonList