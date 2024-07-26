import Link from "next/link";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";

export default function Header() {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold relative group">
                        decimoor 
                        <div className="absolute left-0 bottom-0 w-[3px] h-[3px] bg-accent group-hover:w-full transition-all duration-300">

                        </div>
                    </h1>
                </Link>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}