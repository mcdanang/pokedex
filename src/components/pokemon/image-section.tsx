import Image from "next/image";
import { Pokeball } from "@/components/pokeball-icon";
import { Dot } from "lucide-react";
import { Pokemon } from "@/types/pokemon";

export default function PokemonImage({ pokemon }: { pokemon: Pokemon }) {
	const src = pokemon.sprites.other["official-artwork"].front_default;
	return (
		<div className="relative flex items-center justify-center lg:w-full lg:h-[600px]">
			<div className="flex absolute top-0 right-60">
				{Array.from({ length: 5 }).map((_, i) => (
					<div key={i}>
						{Array.from({ length: 3 }).map((_, j) => (
							<Dot key={j} className="h-4 text-white/20" strokeWidth={6} />
						))}
					</div>
				))}
			</div>
			<Pokeball className="absolute -right-12 bottom-0 fill-white/20" size={200} />
			<Image
				src={src}
				alt={`${pokemon.name} official artwork`}
				width={240}
				height={240}
				className="mx-auto z-10 md:size-[300px] xl:size-[400px]"
			/>
		</div>
	);
}
