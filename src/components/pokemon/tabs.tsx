import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PokemonAboutTab from "./tabs/about-tab";
import PokemonStatsTab from "./tabs/stats-tab";
import PokemonEvolutionTab from "./tabs/evolution-tab";
import PokemonMovesTab from "./tabs/moves-tab";
import { Pokemon, PokemonEvolutionData, PokemonSpecies } from "@/types/pokemon";

export default function PokemonTabs({
	pokemon,
	species,
	evolutionData,
}: {
	pokemon: Pokemon;
	species: PokemonSpecies;
	evolutionData: PokemonEvolutionData[];
}) {
	return (
		<Tabs
			defaultValue="about"
			className="bg-white rounded-t-4xl lg:rounded-b-4xl grow lg:grow-0 lg:mb-10 lg:mr-10 p-6 py-12 text-foreground -mt-10"
		>
			<TabsList className="grid grid-cols-4 w-full">
				<TabsTrigger value="about">About</TabsTrigger>
				<TabsTrigger value="stats">Base Stats</TabsTrigger>
				<TabsTrigger value="evolution">Evolution</TabsTrigger>
				<TabsTrigger value="moves">Moves</TabsTrigger>
			</TabsList>

			<TabsContent value="about">
				<PokemonAboutTab pokemon={pokemon} species={species} />
			</TabsContent>

			<TabsContent value="stats">
				<PokemonStatsTab pokemon={pokemon} species={species} />
			</TabsContent>

			<TabsContent value="evolution">
				<PokemonEvolutionTab evolutionData={evolutionData} />
			</TabsContent>

			<TabsContent value="moves">
				<PokemonMovesTab pokemon={pokemon} />
			</TabsContent>
		</Tabs>
	);
}
