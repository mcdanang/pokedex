import { PokemonEvolutionData } from "@/types/pokemon";
import { ChevronDown } from "lucide-react";
import PokemonCard from "@/components/pokemon-card";

export default function PokemonEvolutionTab({
	evolutionData,
}: {
	evolutionData: PokemonEvolutionData[];
}) {
	if (!evolutionData.length) return <p>No evolution data available.</p>;

	return (
		<div className="mt-10 flex flex-col items-center justify-center gap-4">
			{evolutionData.map((evo, index) => (
				<div key={evo.name} className="flex flex-col items-center">
					<PokemonCard name={evo.name} url={`https://pokeapi.co/api/v2/pokemon/${evo.id}`} />

					{index !== evolutionData.length - 1 && (
						<>
							<ChevronDown className="size-6 mt-4 text-gray-500" />
						</>
					)}
				</div>
			))}
		</div>
	);
}
