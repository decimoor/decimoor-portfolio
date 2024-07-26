"use client";

import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Link from "next/link";
import { Button } from "./ui/button";


interface Interface {
    children: React.ReactNode,
    imageUrl: string,
    projectName: string,
    responsobilities: string[],
    technologies: string[],
    link: string;
}
  

export default function ProjectModalWindow({children, imageUrl, projectName, responsobilities, technologies, link}: Interface) {
    return (
        <Dialog>
            <DialogTrigger className="w-full h-[300px]">
                {children}
            </DialogTrigger>
            <DialogContent className="w-fit max-w-fit">
                <DialogTitle>
                    {projectName}
                </DialogTitle>
                <div className="w-[600px] max-w-screen h-[600px] relative">
                    <img src={`/decimoor-portfolio${imageUrl}`} fill className="object-cover" alt=""/>
                </div>
                <DialogDescription className="bg-primary p-5">
                    <span>
                        Обязанности на проекте:
                    </span>
                    <ul>
                        {
                            responsobilities.map((resp, index) => {
                                return (
                                    <li key={index}>
                                        - {resp}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="w-full h-[1px] bg-white my-2"></div>
                    <span>
                        Используемые технологии:
                        <ul>
                            {
                                technologies.map((tec, index) => {
                                    return (
                                        <li key={index}>
                                            - {tec}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </span>
                    <div className="w-full h-[1px] bg-white my-2"></div>
                    <Link href={link} target="_blank" className="w-full">
                            <Button className="w-full">
                                Посетить сайт
                            </Button>
                    </Link>

                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}