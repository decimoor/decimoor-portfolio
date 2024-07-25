"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Key } from "react";

type ILink = {
    name: string;
    path: string;
}

const links: ILink[] = [
    {
        name: "Главная",
        path: "/"
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
]

export default function Nav() {
    const pathname: String = usePathname();

    return (
        <nav className="flex gap-8">
            {
                links.map((link: ILink, index: Key) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })
            }

        </nav>
    )
}