import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="w-full h-fit grid xl:grid-cols-2 grid-cols-1 gap-8">

                        <div className="text-center xl:text-left order-2 xl:order-none">
                            <span>Frontend Разработчик</span>
                            <h1 className="h1 mb-6">
                                Привет, Я <br />{" "}
                                <span className="text-accent"> Рашид Чотчаев</span>
                            </h1>
                            <p className="max-2-[500px] mb-9 text-white/80">
                                Я создаю качественные веб приложения,
                                специализируясь на фронтенд разработке. Я стремлюсь
                                создавать привлекательные и функциональные
                                пользовательские интерфейсы.
                            </p>

                            <div className="flex flex-col xl:flex-row items-center gap-8">
                                <Link href="/assets/Чотчаев Рашид резюме.pdf" target="_blank">

                                    <Button
                                        variant={"outline"}
                                        size="lg"
                                        className="uppercase flex flex-center gap-2">
                                        <span>Загрузить CV</span>
                                        <FiDownload className="text-xl" />
                                    </Button>
                                </Link>
                                <div className="mb-8 xl:mb-0">
                                    <Socials
                                        customStyles="flex gap-6"
                                        iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-fit flex justify-center items-center">
                            <AnimatedLogo />
                        </div>
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
}
