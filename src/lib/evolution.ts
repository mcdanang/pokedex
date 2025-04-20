import { EvolutionChain, PokemonEvolutionData } from "@/types/pokemon";
import { fetchPokemonData } from "./pokeapi";

export async function getEvolutionDataFromChain(
	chain: EvolutionChain
): Promise<PokemonEvolutionData[]> {
	const evolutionData: PokemonEvolutionData[] = [];

	// Traverse chain recursively
	async function traverse(node: EvolutionChain) {
		const name = node.species.name;
		const pokemon = await fetchPokemonData(name);

		evolutionData.push({
			id: pokemon.id,
			name: pokemon.name,
			image: pokemon.sprites.other["official-artwork"].front_default,
		});

		if (node.evolves_to && node.evolves_to.length > 0) {
			for (const evo of node.evolves_to) {
				await traverse(evo);
			}
		}
	}

	await traverse(chain);
	return evolutionData;
}
