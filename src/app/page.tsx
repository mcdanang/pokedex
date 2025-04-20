"use client";

import ErrorComponent from "@/components/error-component";
import LoadingComponent from "@/components/loading-component";
import Navbar from "@/components/navbar";
import { Pokeball } from "@/components/pokeball-icon";
import PokemonCard from "@/components/pokemon-card";
import { Button } from "@/components/ui/button";
import { Pokemon } from "@/types/pokemon";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { useState } from "react";
import useSWR from "swr";

const LIMIT = 20;

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
	const [offset, setOffset] = useState(0);

	const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`;

	const { data, error, isLoading, mutate } = useSWR(apiURL, fetcher);

	if (error) return <ErrorComponent onRetry={() => mutate()} />;
	if (isLoading) return <LoadingComponent className="h-screen" />;

	return (
		<main className="p-6 md:p-10 relative space-y-6 max-w-7xl mx-auto">
			<Pokeball className="absolute -top-20 -right-24 fill-gray-100 -z-20" size={300} />
			<Navbar />
			<h1 className="text-4xl font-black">Pokédex</h1>

			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{data.results.map((pokemon: { name: string; url: string }) => (
					<PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
				))}
			</div>
			<Pagination offset={offset} setOffset={setOffset} data={data} />
		</main>
	);
}

function Pagination({
	offset,
	setOffset,
	data,
	limit = 20,
}: {
	offset: number;
	setOffset: React.Dispatch<React.SetStateAction<number>>;
	data: { next: string | null; previous: string | null; results: Pokemon[]; count: number };
	limit?: number;
}) {
	const currentPage = offset / limit + 1;
	const totalPages = Math.ceil(data.count / limit);
	const isFirstPage = offset === 0;
	const isLastPage = currentPage === totalPages;

	return (
		<div className="flex justify-center md:justify-end gap-2 md:gap-4 items-center mt-4">
			{/* First Page */}
			<Button
				onClick={() => setOffset(0)}
				disabled={isFirstPage}
				className="rounded-full"
				variant="ghost"
			>
				<ChevronsLeft className="size-5 md:size-6" />
			</Button>

			{/* Prev Page */}
			<Button
				onClick={() => setOffset((prev: number) => Math.max(0, prev - limit))}
				disabled={isFirstPage}
				className="rounded-full"
				variant="ghost"
			>
				<ChevronLeft className="size-5 md:size-6" />
			</Button>

			<span className="text-sm text-gray-500">
				Page {currentPage} of {totalPages}
			</span>

			{/* Next Page */}
			<Button
				onClick={() => setOffset((prev: number) => prev + limit)}
				disabled={isLastPage}
				className="rounded-full"
				variant="ghost"
			>
				<ChevronRight className="size-5 md:size-6" />
			</Button>

			{/* Last Page */}
			<Button
				onClick={() => setOffset((totalPages - 1) * limit)}
				disabled={isLastPage}
				className="rounded-full"
				variant="ghost"
			>
				<ChevronsRight className="size-5 md:size-6" />
			</Button>
		</div>
	);
}
