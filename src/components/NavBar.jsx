function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
    }
    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    return (
        <div>
            {pokemonIndex > 0
                ?
                <button onClick={handleClickPrevious}>Précédent</button>
                :
                <p></p>
            }
            {
                pokemonIndex < pokemonList.length - 1
                    ?
                    < button onClick={handleClickNext}>Suivant</button>
                    :
                    <p></p>
            }
        </div>
    );
}

export default NavBar;