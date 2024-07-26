"use client";


import { motion } from "framer-motion";
import { useState } from "react";

import { BsArrowDownRight } from "react-icons/bs";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const skills = [
    {
        num: "01",
        title: "Библиотеки для создания интерфейсов",
        description: "Я глубоко знаком с библиотекой React, что позволяет мне эффективно разрабатывать компоненты, управлять состоянием приложения и использовать hooks для улучшения функциональности.Также я использую Next.js для создания SSR приложений, что обеспечивает быструю загрузку страниц и улучшенную производительность SEO.",
        href: ""
    },
    {
        num: "02",
        title: "Стилизация",
        description: "Уверенное владение чистым CSS, а также препроцессорами для создания модульного и поддерживаемого кода. Работаю с популярными CSS-фреймворками, такими как Bootstrap и Tailwind CSS, для быстрой и эффективной разработки адаптивных интерфейсов. В практике пользовался современными UI-библиотеками, такими как Material-UI и Shadcn/ui, для создания компонентов с готовыми стилями, что ускоряет процесс разработки и улучшает визуальное качество приложений.",
        href: ""
    },
    {
        num: "03",
        title: "Стейт-менеджеры",
        description: "Я обладаю обширным опытом работы с различными стейт-менеджерами для управления состоянием в React-приложениях. В своей практике я использовал Redux и его упрощенную версию Redux Toolkit (RTK) для структурирования состояния и написания более лаконичного кода. RTK Query позволил мне эффективно управлять асинхронными запросами и кэшированием данных. Для более легких и гибких случаев я применял Zustand, который обеспечивает простое и прямолинейное управление состоянием. Также я знаком с MobX, который предлагает реактивный подход к управлению состоянием и позволяет создавать высокоэффективные приложения с минимальными усилиями.",
        href: ""
    },

]

export default function Skills() {

    const [selectedService, setSelectedSevice] = useState(null); // 1 - web development, 2 - ui/ux design, 3 - logo design, 4 - seo

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
                    className={`gap-[60px] transition-al duration-300`}
                >
                    <Accordion type="single" collapsible>
                        {skills.map((service, index) => {
                            return (
                                <AccordionItem key={index} value={service.num} className="mb-2">
                                    <div key={index} className={`flex-1 mb-5  flex flex-col  justify-center gap-6 group ${(selectedService !== service.num && selectedService) && "animate-disappear"} transition-all duration-300`}>
                                        {/* top */}
                                        <div className="w-full flex justify-between items-center">
                                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                                {service.num}
                                            </div>

                                            <AccordionTrigger className="w-[70px] h-[70px] rounded-full bg-white text-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center">

                                            </AccordionTrigger>
                                        </div>
                                        {/* title */}
                                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                            {service.title}
                                        </h2>
                                        {/* describtion */}
                                        <AccordionContent>
                                            <p className="text-white/60">
                                                {service.description}
                                            </p>
                                        </AccordionContent>
                                    </div>
                                </AccordionItem>

                            )
                        })}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}