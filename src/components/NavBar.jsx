function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <ul className="Pokemon_buttons">
      {pokemonList.map((pokemon, index) => (
        <li NavBar key={pokemon.name} pokemon={pokemon}>
          <button onClick={() => setPokemonIndex(index)}>{pokemon.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
