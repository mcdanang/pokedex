export const fetchJSON = (url: string) => fetch(url).then(res => res.json());

export const fetchPokemonData = (id: string) =>
	fetchJSON(`https://pokeapi.co/api/v2/pokemon/${id}`);

export const fetchSpeciesData = (id: string) =>
	fetchJSON(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

export const fetchEvolutionChain = (url: string) => fetchJSON(url);
