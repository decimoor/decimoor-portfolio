import Link from "next/link";

import {FaGithub, FaTelegram, FaVk} from "react-icons/fa";
import {HHIcon} from "@/components/Icons"

type ISocial = {
    icon: React.ReactNode,
    path: string;
}

const socials: ISocial[] = [
    {
        icon: <FaGithub />,
        path: "https://github.com/decimoor",
    },
    {
        icon: <FaTelegram />,
        path: "https://t.me/r1spammer4ever",
    },
    {
        icon: <FaVk />,
        path: "https://vk.com/praiseeethesun",
    },
    {
        icon: <HHIcon className="w-9 h-9"/>,
        path: "https://hh.ru/resume/009dd896ff0cf14eff0039ed1f555a3573696b",
    }
]

export default function Socials({customStyles, iconStyles}: {customStyles: string, iconStyles: string}) {
    return (
        <div className={customStyles}>
            {socials.map((item, index) => {
                return <Link 
                            key={index} 
                            href={item.path}
                            className={iconStyles}
                            target="_blank"
                        >
                            {item.icon}
                        </Link>
            })}
        </div>
    )
}