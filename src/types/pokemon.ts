export interface PokemonAbility {
	ability: {
		name: string;
	};
}

export interface PokemonStat {
	base_stat: number;
	stat: {
		name: string;
	};
}

export interface PokemonMove {
	move: {
		name: string;
	};
}

export interface PokemonType {
	type: {
		name: string;
	};
}

export interface Pokemon {
	id: number;
	name: string;
	sprites: {
		other: {
			["official-artwork"]: {
				front_default: string;
			};
		};
	};
	height: number;
	weight: number;
	abilities: PokemonAbility[];
	stats: PokemonStat[];
	moves: PokemonMove[];
	types: PokemonType[];
}

export interface PokemonSpecies {
	habitat: {
		name: string;
	};
	genera: PokemonGenus[];
	gender_rate: number;
	egg_groups: PokemonEggGroup[];
	shape: {
		name: string;
	};
	flavor_text_entries: PokemonFlavorText[];
}

export interface PokemonFlavorText {
	language: {
		name: string;
	};
	flavor_text: string;
}

export interface PokemonEggGroup {
	name: string;
}

export interface PokemonGenus {
	genus: string;
	language: { name: string };
}

export interface EvolutionChainResponse {
	chain: EvolutionChain;
}

export interface EvolutionChain {
	species: {
		name: string;
	};
	evolves_to: EvolutionChain[];
}

export interface PokemonEvolutionData {
	id: number;
	name: string;
	image: string;
}
