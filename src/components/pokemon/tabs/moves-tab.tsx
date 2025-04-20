import { Badge } from "@/components/ui/badge";
import { dashToSpace } from "@/lib/utils";

interface Move {
	move: {
		name: string;
	};
}

interface Pokemon {
	moves: Move[];
}

interface PokemonMovesTabProps {
	pokemon: Pokemon;
}

export default function PokemonMovesTab({ pokemon }: PokemonMovesTabProps) {
	return (
		<div className="grid grid-cols-3 mt-4 gap-2 text-sm">
			{pokemon.moves.map((m: Move) => (
				<div key={m.move.name} className="capitalize px-3 py-1 rounded bg-white/10">
					<Badge variant="outline">{dashToSpace(m.move.name)}</Badge>
				</div>
			))}
		</div>
	);
}
