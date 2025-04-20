import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const zeroPad = (num: number, places: number) => String(num).padStart(places, "0");

export const colorMap: Record<string, string> = {
	black: "bg-zinc-800",
	blue: "bg-blue-300",
	brown: "bg-amber-700",
	gray: "bg-gray-400",
	green: "bg-emerald-400",
	pink: "bg-pink-300",
	purple: "bg-purple-400",
	red: "bg-red-400",
	white: "bg-stone-300 text-black",
	yellow: "bg-amber-300",
};

export function dashToSpace(text: string): string {
	return text.replace(/-/g, " ");
}
