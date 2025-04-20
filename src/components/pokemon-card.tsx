"use client";

import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { cn, colorMap, zeroPad } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pokeball } from "./pokeball-icon";
import LoadingComponent from "./loading-component";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function PokemonCard({ name, url }: { name: string; url: string }) {
	const { data: pokemon, error: error1 } = useSWR(url, fetcher);

	const id = url.split("/").filter(Boolean).pop();
	const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${name}/`;
	const { data: species, error: error2 } = useSWR(id ? speciesURL : null, fetcher);

	if (error1 || error2)
		return <div className="p-4 border rounded-2xl h-40">Failed to load {name}</div>;
	if (!pokemon || !species)
		return (
			<div className="p-4 border rounded-2xl ">
				<LoadingComponent className="text-xs" text={`Loading ${name}...`} />
			</div>
		);

	const bgColor = colorMap[species.color.name] || "bg-gray-200";

	return (
		<Link href={`/pokemon/${pokemon.id}`}>
			<Card
				className={cn("relative text-white overflow-hidden hover:scale-110 transition", bgColor)}
			>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex justify-between items-start gap-4">
						<div className="flex flex-col justify-center gap-1 mt-2 flex-wrap">
							{pokemon.types.map((t: { type: { name: string } }) => (
								<Badge
									key={t.type.name}
									className="px-2 py-0.5 text-xs bg-white/30 rounded-full capitalize"
								>
									{t.type.name}
								</Badge>
							))}
						</div>

						<Image
							src={pokemon.sprites.other["official-artwork"].front_default}
							alt={name}
							width={96}
							height={96}
							className="z-10"
						/>
					</div>
				</CardContent>
				<div className="absolute right-0 top-0 p-4 font-bold text-gray-500/20">
					#{zeroPad(pokemon.id, 3)}
				</div>
				<Pokeball className="absolute -right-8 -bottom-8 fill-white/20" size={160} />
			</Card>
		</Link>
	);
}
