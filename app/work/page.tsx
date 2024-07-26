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
    textColor: string;
    link: string;
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
            "framer-motion",
            "chart.js",
            "Axios",
            "Zod",
            "react-hook-form",
        ],
        textColor: "text-white",
        link: "https://www.heavens.pro/",
    },
    {
        projectName: "omikami",
        responsobilities: [
            "Верстка страниц",
            "Рефакторинг кода",
            "Создание лендинга",
            "Тестирование веб приложения",
        ],
        imageUrl: "/assets/omikami.png",
        shortDescription: "Сайт визитка",
        technologies: [
            "Next",
            "SASS",
            "React",
            "GSAP",
            "framer-motion",
        ],
        textColor: "text-white",
        link: "https://www.omikamitoken.com/",
    },
    {
        projectName: "quick.sms",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Создание простых анимаций",
            "Теститорвание",
            "Создание таблиц",
            "Подключение регистрации через Telegram"
        ],
        imageUrl: "/assets/quick.png",
        shortDescription: "Веб сервис по отправке сообщений",
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
        textColor: "text-white",
        link: "https://quicksms.io/",
    },
    {
        projectName: "Heavens Proxy",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Теститорвание",
            "Создание таблиц",
            "Подключение регистрации через Telegram",
        ],
        imageUrl: "/assets/heavens-proxy.png",
        shortDescription: "Веб сервис для аренды прокси",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "three.js",
        ],
        textColor: "text-black",
        link: "https://hproxy.com/",
    },
    {
        projectName: "Digi Proxy",
        responsobilities: [
            "Верстка страниц",
            "Подключение к API",
            "Рефакторинг кода",
            "Теститорвание",
            "Создание таблиц",
            "Подключение регистрации через Telegram",
            "Внедрение темной темы",
            "Внедрение нескольких языков на сайт",
        ],
        imageUrl: "/assets/digi-proxy.png",
        shortDescription: "Веб сервис для аренды прокси",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "three.js",
            "styled-components",
            "TypeScript",
            "Redux",
            "Redux Toolkit"
        ],
        textColor: "text-black",
        link: "https://digiproxy.cc/en"
    },
    {
        projectName: "XmrCrash",
        responsobilities: [
            "Верстка страниц",
            "Создание таблиц",
            "Внедрение темной темы",
            "Подключение к API",
            "Работа со сторонними API",
            "Создание графиков"
        ],
        imageUrl: "/assets/xmrcrash.png",
        shortDescription: "Веб сервис для ставок",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "three.js",
            "Axios",
            "chart.js",
            "TypeScript",
            "Redux",
            "Redux Toolkit"
        ],
        textColor: "text-white",
        link: "https://xmr.blackhole.gg/"
    },
    {
        projectName: "SoccerSupply",
        responsobilities: [
            "Верстка страниц",
            "Создание таблиц",
            "Внедрение темной темы",
            "Подключение к API",
            "Создание таблиц",
            "Создание графиков",
        ],
        imageUrl: "/assets/soccer-supply.png",
        shortDescription: "Интернет магазин",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "three.js",
            "Axios",
            "chart.js",
            "TypeScript",
            "Redux",
            "Redux Toolkit",
            "RTK Query",
        ],
        textColor: "text-white",
        link: "https://soccersupply.us/",
    },
    {
        projectName: "Legion Proxy",
        responsobilities: [
            "Верстка страниц",
            "Создание таблиц",
            "Внедрение темной темы",
            "Подключение к API",
            "Создание таблиц",
            "Создание графиков",
            "Рефакторинг кода",
            "Создание лендинга"
        ],
        imageUrl: "/assets/legion.png",
        shortDescription: "Веб сервис для аренды прокси",
        technologies: [
            "SCSS",
            "React",
            "Next",
            "GSAP",
            "three.js",
            "Axios",
            "chart.js",
            "TypeScript",
            "Redux",
            "Redux Toolkit",
            "RTK Query",
        ],
        textColor: "text-white",
        link: "https://legionproxy.io/",
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
                                    textColor={work.textColor}
                                />
                            </ProjectModalWindow>
                        </div>
                    )
                })}
                
            </div>
        </motion.div>
    );
}
