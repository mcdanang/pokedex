import { Badge } from "@/components/ui/badge";
import { zeroPad } from "@/lib/utils";
import { Pokemon } from "@/types/pokemon";
import { Button } from "@/components/ui/button";
import { Heart, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function PokemonHeader({ pokemon }: { pokemon: Pokemon }) {
	const { name, id, types } = pokemon;
	return (
		<>
			<div className="flex items-center justify-between sticky top-0 z-10 px-4">
				<Button
					asChild
					variant="ghost"
					size="icon"
					className="hover:bg-transparent hover:text-slate-200"
				>
					<Link href="/" className="flex items-center">
						<span className="sr-only">Back</span>
						<MoveLeft className="size-6" strokeWidth={3} />
					</Link>
				</Button>

				<Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-red-500">
					<span className="sr-only">Like</span>
					<Heart className="size-6 " strokeWidth={3} />
				</Button>
			</div>
			<div className="flex items-center justify-between p-6">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold capitalize">{name}</h1>
					<div className="flex gap-2 mt-2 flex-wrap">
						{types.map(t => (
							<Badge
								key={t.type.name}
								className="px-5 py-1 text-sm bg-white/30 rounded-full capitalize"
							>
								{t.type.name}
							</Badge>
						))}
					</div>
				</div>
				<div className="font-bold text-lg">#{zeroPad(id, 3)}</div>
			</div>
		</>
	);
}
