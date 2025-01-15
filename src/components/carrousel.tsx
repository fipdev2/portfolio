import {useState} from "react";
import {projetos} from "@/data";

type Projeto = {
    id: number,
    nome: string,
    descricao: string,
    imagem: StaticImageData,
    link: string
}
// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image, {StaticImageData} from "next/image";

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
        // <div className="w-full flex flex-col justify-center items-center px-4">
        //   <div className=" flex relative w-full max-w-7xl min-h-[200px] h-[600px] max-h-[600px] items-center justify-center overflow-hidden">
        //     {projetos.map((projeto, index) => {
        //       const isActive = index === activeIndex;
        //       const isPrev =
        //         index === (activeIndex - 1 + projetos.length) % projetos.length;
        //       const isNext =
        //         index === (activeIndex + 1) % projetos.length;
        //
        //       return (
        //         <div
        //           key={projeto.id}
        //           className={`absolute transition-transform duration-500 ${
        //             isActive
        //               ? "z-10 scale-100 translate-x-0"
        //               : isPrev
        //               ? "-translate-x-[120%] scale-90 opacity-50"
        //               : "translate-x-[120%] scale-90 opacity-50"
        //           }`}
        //           // style={{
        //           //   transformOrigin: "center",
        //           //   width: "100%", // Aumenta a largura em telas menores.
        //           //   aspectRatio: "16 / 9", // Mantém proporção de tela widescreen.
        //           // }}
        //         >
        //           <a
        //             href={projeto.link}
        //             target="_blank"
        //             rel="noopener noreferrer"
        //             className="relative block bg-black rounded-lg overflow-hidden shadow-lg h-full"
        //           >
        //             <Image
        //               src={projeto.imagem}
        //               alt={projeto.nome}
        //               // layout="fill"
        //               // objectFit="cover"
        //               className="transition-opacity duration-300"
        //               style={{
        //                 filter: "brightness(0.8)",
        //               }}
        //             />
        //             <div className="absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 hover:opacity-75 transition-opacity duration-500">
        //               <h3 className="text-lg font-bold text-white">
        //                 {projeto.nome}
        //               </h3>
        //               <p className="text-sm text-gray-300 mt-2 px-4 text-center">
        //                 {projeto.descricao}
        //               </p>
        //             </div>
        //           </a>
        //         </div>
        //       );
        //     })}
        //   </div>
        //   <div className="mt-2 flex space-x-4">
        //     <button
        //       onClick={handlePrev}
        //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        //     >
        //       Anterior
        //     </button>
        //     <button
        //       onClick={handleNext}
        //       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        //     >
        //       Próximo
        //     </button>
        //   </div>
        // </div>
        <Carousel className="w-full max-w-2xl md:max-w-xl sm:max-w-md">
            <div className="rounded-xl overflow-hidden">
                <CarouselContent>
                    {projetos.map((projeto: Projeto, index) => {
                        return (
                            <CarouselItem key={index} className={'bg-amber-300'}>
                                <div className='h-96 overflow-hidden rounded-xl bg-black md:h-80 sm:h-56'>
                                    <a
                                        href={projeto.link}
                                        target="_blank"
                                        className="relative block shadow-lg"
                                    >
                                        <Image
                                            src={projeto.imagem}
                                            alt={projeto.nome}
                                            className="transition-opacity duration-300"
                                            style={{
                                                filter: "brightness(0.8)",
                                            }}
                                        />
                                        <div
                                            className=" absolute inset-0 flex flex-col justify-center items-center bg-black opacity-0 hover:opacity-75 transition-opacity duration-500 group">
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
                        {
                            projeto.descricao
                        }

                    })

                    }
                </CarouselContent>
            </div>
            <div className="md:mt-10 flex justify-center items-center gap-10 md:hidden">
                <CarouselPrevious
                    className="text-green-400 bg-zinc-900 border-green-400 transition-colors duration-300 hover:bg-green-400 hover:text-zinc-900"/>
                <CarouselNext
                    className="text-green-400 bg-zinc-900 border-green-400 transition-colors duration-300 hover:bg-green-400 hover:text-zinc-900"/>
            </div>

        </Carousel>
    );
};

export default Carrousel;
