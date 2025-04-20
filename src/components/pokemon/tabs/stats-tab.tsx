import { Progress } from "@/components/ui/progress";
import { dashToSpace } from "@/lib/utils";
import { Pokemon, PokemonFlavorText, PokemonSpecies, PokemonStat } from "@/types/pokemon";

export default function PokemonStatsTab({
	pokemon,
	species,
}: {
	pokemon: Pokemon;
	species: PokemonSpecies;
}) {
	const totalStat = pokemon.stats.reduce(
		(total: number, stat: { base_stat: number }) => total + stat.base_stat,
		0
	);

	return (
		<div className="mt-4 space-y-2">
			{pokemon.stats.map((stat: PokemonStat) => (
				<div key={stat.stat.name} className="grid grid-cols-6 gap-x-4 gap-y-3 items-center ">
					<div className="text-muted-foreground capitalize col-span-2">
						{dashToSpace(stat.stat.name === "hp" ? "HP" : stat.stat.name)}
					</div>
					<div className="text-center">{stat.base_stat}</div>
					<Progress
						className="col-span-3 [&>*]:bg-green-600"
						value={(stat.base_stat / 255) * 100}
					/>
				</div>
			))}
			<div className="grid grid-cols-6 gap-x-4 gap-y-3 items-center ">
				<div className="text-muted-foreground capitalize col-span-2">Total</div>
				<div className="text-center">{totalStat}</div>
				<Progress className="col-span-3 [&>*]:bg-blue-600" value={(totalStat / (255 * 6)) * 100} />
			</div>

			<div className="font-bold pt-4 pb-2 col-span-3">Description</div>
			<div className="text-muted-foreground capitalize col-span-2">
				{species.flavor_text_entries.find((f: PokemonFlavorText) => f.language.name === "en")
					?.flavor_text || "No description available"}
			</div>
		</div>
	);
}
