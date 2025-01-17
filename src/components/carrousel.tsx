import { useState } from "react";
import { projetos } from "@/data";

type Projeto = {
    id: number,
    nome: string,
    descricao: string,
    imagem: StaticImageData,
    link: string
}
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image";

const Carrousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projetos.length);
    };

    const handlePrev = () => {
        setActiveIndex(
            (prevIndex) => (prevIndex - 1 + projetos.length) % projetos.length
        );
    };

    return (
        <Carousel className="w-full max-w-5xl xl:max-w-xl 2xl:max-w-3xl">
            <div className="rounded-xl md:rounded-none overflow-hidden">
                <CarouselContent>
                    {projetos.map((projeto: Projeto, index) => {
                        return (
                            <CarouselItem key={index}>
                                <div className='overflow-hidden'>
                                    <a
                                        href={projeto.link}
                                        target="_blank"
                                        className="relative block shadow-lg"
                                    >
                                        <Image
                                            src={projeto.imagem}
                                            width={1024}
                                            alt={projeto.nome}
                                            className="transition-opacity duration-300 rounded-xl"
                                            style={{
                                                filter: "brightness(0.8)",
                                            }}
                                        />
                                        <div className="hidden md:block mt-2">
                                            <p className="text-sm uppercase text-white group-hover:animate-fade-up text-center">
                                                {projeto.nome}
                                            </p>
                                            <p className="text-sm text-gray-300 px-4 text-center group-hover:animate-fade-up">
                                                {projeto.descricao}
                                            </p>
                                        </div>
                                        <div
                                            className=" absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 hover:opacity-75 transition-opacity duration-500 group md:hidden">
                                            <h3 className="text-lg font-bold text-white group-hover:animate-fade-up">
                                                {projeto.nome}
                                            </h3>
                                            <p className="text-sm text-gray-300 mt-2 px-4 text-center group-hover:animate-fade-up">
                                                {projeto.descricao}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </CarouselItem>
                        )

                    })

                    }
                </CarouselContent>
            </div>
            <div className="md:mt-10 flex justify-center items-center gap-10 md:hidden">
                <CarouselPrevious
                    className="text-green-400 bg-zinc-900 border-green-400 transition-colors duration-300 hover:bg-green-400 hover:text-zinc-900" />
                <CarouselNext
                    className="text-green-400 bg-zinc-900 border-green-400 transition-colors duration-300 hover:bg-green-400 hover:text-zinc-900" />
            </div>

        </Carousel>
    );
};

export default Carrousel;
