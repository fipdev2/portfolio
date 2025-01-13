import {useState} from "react";
import {projetos} from '@/data';
import Image from "next/image";

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
        <div className="w-full flex flex-col justify-center items-center">
            <div className="relative w-full max-w-5xl  min-h-[424px] flex items-center justify-center overflow-hidden">
                {projetos.map((projeto, index) => {
                    const isActive = index === activeIndex;
                    const isPrev =
                        index === (activeIndex - 1 + projetos.length) % projetos.length;
                    const isNext =
                        index === (activeIndex + 1) % projetos.length;

                    return (
                        <div
                            key={projeto.id}
                            className={`absolute transition-transform duration-500 ${isActive
                                ? "z-10 scale-100 translate-x-0"
                                : isPrev
                                    ? "-translate-x-[120%] scale-90 opacity-50"
                                    : "translate-x-[120%] scale-90 opacity-50"
                            }`}
                            style={{
                                transformOrigin: "center",
                                width: "calc(100% / 1.5)",
                                height: "100%",
                            }}
                        >
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block bg-black rounded-lg overflow-hidden shadow-lg h-full"
                            >
                                <Image
                                    src={projeto.imagem}
                                    alt={projeto.nome}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-opacity duration-300"
                                    style={{
                                        filter: "brightness(0.8)",
                                    }}
                                />
                                <div
                                    className="absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 hover:opacity-75 transition-opacity duration-500">
                                    <h3 className="text-lg font-bold text-white">
                                        {projeto.nome}
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-2 px-4 text-center">
                                        {projeto.descricao}
                                    </p>

                                </div>
                            </a>
                        </div>
                    )
                        ;
                })}
            </div>
            <div className="mt-8 flex space-x-4">
                <button
                    onClick={handlePrev}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Anterior
                </button>
                <button
                    onClick={handleNext}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Próximo
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
