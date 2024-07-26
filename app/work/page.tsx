"use client";

import Project from "@/components/Project";
import ProjectModalWindow from "@/components/ProjectModalWindow";
import { motion } from "framer-motion";

type IWork = {
    projectName: string;
    responsobilities: string[];
    imageUrl: string;
    technologies: string[];
    shortDescription: string;
};

const works: IWork[] = [
    {
        projectName: "Heavens.pro",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Создание простых анимаций",
        ],
        imageUrl: "/assets/heavens.png",
        shortDescription: "Сайт галлерея",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "frame-motion",
            "chart.js",
            "Axios",
            "Zod",
            "react-hook-form",
        ],
    },
    {
        projectName: "Heavens.pro",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Создание простых анимаций",
        ],
        imageUrl: "/assets/heavens.png",
        shortDescription: "Сайт галлерея",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "frame-motion",
            "chart.js",
            "Axios",
            "Zod",
            "react-hook-form",
        ],
    },
    {
        projectName: "Heavens.pro",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Создание простых анимаций",
        ],
        imageUrl: "/assets/heavens.png",
        shortDescription: "Сайт галлерея",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "frame-motion",
            "chart.js",
            "Axios",
            "Zod",
            "react-hook-form",
        ],
    },
];

export default function Works() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duraion: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] py-12 xl:py-0">
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-12">
                {works.map((work, index) => {
                    return (
                        <div className="w-full h-full" key={index}>
                            <ProjectModalWindow
                                {...work}>
                                <Project
                                    shortDescription={work.shortDescription}
                                    imageUrl={work.imageUrl}
                                    projectName={work.projectName} 
                                    
                                />
                            </ProjectModalWindow>
                        </div>
                    )
                })}
                
            </div>
        </motion.div>
    );
}
