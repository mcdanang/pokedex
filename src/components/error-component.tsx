import { Button } from "@/components/ui/button";

export default function ErrorComponent({ onRetry }: { onRetry?: () => void }) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[300px] text-center text-red-500 space-y-4">
			<p className="text-xl font-semibold">Oops! Failed to load data.</p>
			{onRetry && (
				<Button onClick={onRetry} variant="destructive">
					Try Again
				</Button>
			)}
		</div>
	);
}
