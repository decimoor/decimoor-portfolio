"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Key } from "react";

type ILink = {
    name: string;
    path: string;
};

const links: ILink[] = [
    {
        name: "Главная",
        path: "/",
    },
    {
        name: "Навыки",
        path: "/skills",
    },
    {
        name: "Резюме",
        path: "/resume",
    },
    {
        name: "Работы",
        path: "/work",
    },
    {
        name: "Связаться",
        path: "/contact",
    },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-white hover:text-accent transition-colors duration-300" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary">
                <div className="mt-32 mb-40 text-center text-2xl flex items-center justify-center">
                    <Link
                        href="/"
                        className="w-fit">
                        <h1 className="text-4xl font-semibold relative group w-fit">
                            decimoor
                            <div className="absolute left-0 bottom-0 w-[3px] h-[3px] bg-accent group-hover:w-full transition-all duration-300"></div>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link: ILink, index: Key) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={` ${
                                    link.path === pathname &&
                                    "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}
