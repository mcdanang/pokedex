"use client";

import { Pokeball } from "@/components/pokeball-icon";

export default function Loading() {
	return (
		<div
			className={
				"flex flex-col items-center justify-center h-screen text-center text-gray-500 space-y-6"
			}
		>
			<div className="animate-spin">
				<Pokeball className="size-40 fill-red-400" />
			</div>
			<p className="text-lg font-medium">Loading...</p>
		</div>
	);
}
