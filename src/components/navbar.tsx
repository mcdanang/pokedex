"use client";

import { Menu, MoveLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between top-0 z-10">
			<Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-slate-500">
				<span className="sr-only">Back</span>
				<MoveLeft className="size-6" strokeWidth={3} />
			</Button>

			<Button variant="ghost" size="icon" className="hover:bg-transparent hover:text-slate-500">
				<span className="sr-only">Menu</span>
				<Menu className="size-6" strokeWidth={3} />
			</Button>
		</nav>
	);
}
