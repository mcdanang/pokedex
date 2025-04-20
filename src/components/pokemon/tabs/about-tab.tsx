import { Pokemon, PokemonAbility, PokemonEggGroup, PokemonSpecies } from "@/types/pokemon";
import { Mars, Venus } from "lucide-react";

export default function PokemonAboutTab({
	pokemon,
	species,
}: {
	pokemon: Pokemon;
	species: PokemonSpecies;
}) {
	return (
		<div className="mt-4 space-y-2">
			<div className="grid grid-cols-3 gap-x-4 gap-y-3 ">
				<div className="text-muted-foreground">Genus</div>
				<div className="col-span-2 capitalize">
					{species.genera.find(g => g.language.name === "en")?.genus || "Unknown"}
				</div>

				<div className="text-muted-foreground">Habitat</div>
				<div className="col-span-2 capitalize">{species.habitat?.name}</div>

				<div className="text-muted-foreground">Height</div>
				<div className="col-span-2">{pokemon.height / 10} m</div>

				<div className="text-muted-foreground">Weight</div>
				<div className="col-span-2">{pokemon.weight / 10} kg</div>

				<div className="text-muted-foreground">Abilities</div>
				<div className="col-span-2">
					{pokemon.abilities
						.map(
							(a: PokemonAbility) =>
								a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)
						)
						.join(", ")}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-x-4 gap-y-3 ">
				<div className="font-bold pt-4 pb-2 col-span-3">Breeding</div>

				<div className="text-muted-foreground">Gender</div>
				<div className="col-span-2 flex gap-6">
					<div className="flex items-center gap-1">
						<Mars className="size-4 text-blue-600" />
						{((8 - species.gender_rate) / 8) * 100}%
					</div>
					<div className="flex items-center gap-1">
						<Venus className="size-4 text-pink-600" />
						{(species.gender_rate / 8) * 100}%
					</div>
				</div>

				<div className="text-muted-foreground">Egg Groups</div>
				<div className="col-span-2">
					{species.egg_groups
						.map(
							(egg_group: PokemonEggGroup) =>
								egg_group.name.charAt(0).toUpperCase() + egg_group.name.slice(1)
						)
						.join(", ")}
				</div>

				<div className="text-muted-foreground">Shape</div>
				<div className="col-span-2 capitalize">{species.shape.name}</div>
			</div>
		</div>
	);
}
