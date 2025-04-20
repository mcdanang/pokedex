// components/loading-component.tsx
import { Pokeball } from "@/components/pokeball-icon";
import { cn } from "@/lib/utils";

export default function LoadingComponent({
	className,
	text = "Loading...",
}: {
	className?: string;
	text?: string;
}) {
	return (
		<div
			className={cn(
				"flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-6",
				className
			)}
		>
			<div className="animate-spin">
				<Pokeball className="w-16 h-16 fill-red-400" />
			</div>
			<p className="text-lg font-medium">{text}</p>
		</div>
	);
}
