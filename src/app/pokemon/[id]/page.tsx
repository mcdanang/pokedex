import { cn, colorMap } from "@/lib/utils";
import { fetchPokemonData, fetchSpeciesData, fetchEvolutionChain } from "@/lib/pokeapi";

import PokemonHeader from "@/components/pokemon/header";
import PokemonImage from "@/components/pokemon/image-section";
import PokemonDetailTabs from "@/components/pokemon/tabs";
import { EvolutionChainResponse } from "@/types/pokemon";
import { getEvolutionDataFromChain } from "@/lib/evolution";

export default async function PokemonDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const [pokemon, species] = await Promise.all([fetchPokemonData(id), fetchSpeciesData(id)]);

	const evolutionChain: EvolutionChainResponse = await fetchEvolutionChain(
		species.evolution_chain.url
	);

	const evolutionData = await getEvolutionDataFromChain(evolutionChain.chain);
	const bgColor = colorMap[species.color.name] || "bg-gray-200";

	return (
		<div className={cn("flex flex-col mx-auto pt-8 min-h-svh text-white", bgColor)}>
			<div className="absolute -left-16 -top-16 bg-white/10 size-40 rounded-4xl -rotate-12"></div>

			<div className="xl:w-7xl mx-auto w-full min-h-svh flex flex-col">
				<PokemonHeader pokemon={pokemon} />
				<div className="flex flex-col grow lg:grow-0 lg:grid lg:grid-cols-2 lg:gap-8">
					<PokemonImage pokemon={pokemon} />
					<PokemonDetailTabs pokemon={pokemon} species={species} evolutionData={evolutionData} />
				</div>
			</div>
		</div>
	);
}
