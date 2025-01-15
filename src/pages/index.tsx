// import { api } from '@/api/api'
import {GraduationCapIcon, LanguagesIcon, MedalIcon} from 'lucide-react'
import {experiencias, formacoes} from '@/data';
import Navbar from '@/components/navbar'
import Carrousel from '@/components/carrousel'
import {EducationCard, ExperienceCard} from '@/components/card'
import {scrollToNextSection} from '@/utils/scroll-to-next-section'

export default function Home() {

    return (
        <>

            <Navbar/>
            <main
                id='hero'
                className='flex flex-col text-green-400 items-center justify-center h-screen overflow-y-hidden bg-[url("../assets/bg.gif")] bg-cover bg-no-repeat'>
                <div className="absolute inset-0 bg-black bg-opacity-80"></div>
                <div
                    className="text-4xl font-bold typing-animation whitespace-nowrap overflow-hidden border-r-2 border-green-400 z-10"
                    style={{animation: "typing 2s steps(20, end) forwards, blink 0.7s infinite step-end"}}
                >
                    Filipe Magalhães
                </div>
                <div
                    className="text-xl text-gray-500 opacity-0 transform translate-y-5 fade-in-animation z-10"
                    style={{animation: "fadeIn 1s ease-out 2s forwards"}}
                >
                    Desenvolvedor Fullstack
                </div>
                <button
                    onClick={() => scrollToNextSection('experience')}
                    className="z-10 opacity-0 transform translate-y-10 relative top-1/4 text-green-400 border-2 border-green-400 rounded-full px-4 py-2 text-lg font-medium hover:bg-green-400 hover:text-gray-900 transition-all duration-300 scroll-btn animate-bounce"
                    style={{animation: "fadeIn 1s ease-out 3s forwards, bounce 2s infinite 3s"}}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2"
                         strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-down">
                        <
                            path d="M8 18L12 22L16 18"/>
                        <
                            path d="M12 2V22"/>
                    </svg>
                </button>
            </main>
            <section
                id='experience'
                className='flex min-h-screen px-6 pt-20 items-center justify-center bg-zinc-900 p-4 bg-[url("../assets/medal.svg")] bg-no-repeat'>

                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-cols-3 gap-8 '>
                    <div className="flex flex-1 flex-col col-span-1 gap-2  items-end">
                        <h2 className='lg:text-5xl xl:text-8xl text-9xl leading-none  break-words uppercase font-black w-96 xl:w-72 lg:w-full'
                        >
                            Experiência
                        </h2>
                        {/* <p className='text-justify'>
              Desenvolvedor de software com 2 anos de experiência em criação e manutenção de aplicativos web e mobile. Hábil em
              diversas linguagens de programação, incluindo JavaScript, PHP e Java, com forte conhecimento em frameworks como
              React, Laravel e SpringBoot. Experiência em trabalhar em equipes ágeis, colaborando em todas as fases do ciclo de
              desenvolvimento de software, desde o planejamento até a implementação. Motivado por desafios técnicos e comprometido
              em entregar soluções eficientes que atendam às necessidades dos usuários.
            </p> */}
                    </div>
                    <div className='col-span-2 flex flex-col'>
                        <ul className='flex flex-col space-y-0 gap-2'>
                            {experiencias.map((exp, index) => (
                                <ExperienceCard exp={exp} key={index} bg='black'/>
                            ))}
                        </ul>
                    </div>

                </div>

            </section>
            <section
                id='education'
                className='flex min-h-screen px-6 pt-20 items-center justify-center bg-black p-4 bg-[url("../assets/education.svg")] bg-no-repeat'>

                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-cols-3 gap-8 '>
                    <div className="flex flex-1 flex-col col-span-1 gap-2  items-end">
                        <h2 className='lg:text-5xl xl:text-8xl text-9xl leading-none  break-words uppercase font-black w-96 xl:w-72 lg:w-full'
                        >
                            Formação
                        </h2>
                        {/* <p className='text-justify'>
              Desenvolvedor de software com 2 anos de experiência em criação e manutenção de aplicativos web e mobile. Hábil em
              diversas linguagens de programação, incluindo JavaScript, PHP e Java, com forte conhecimento em frameworks como
              React, Laravel e SpringBoot. Experiência em trabalhar em equipes ágeis, colaborando em todas as fases do ciclo de
              desenvolvimento de software, desde o planejamento até a implementação. Motivado por desafios técnicos e comprometido
              em entregar soluções eficientes que atendam às necessidades dos usuários.
            </p> */}
                    </div>
                    <div className='col-span-2 flex flex-col gap-4'>
                        <EducationCard edu={formacoes[0]} bg='zinc-900'/>

                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2 p-6  flex-1'>
                                <h3 className='flex gap-2 text-green-400 font-bold uppercase items-center'>
                                    <MedalIcon/>
                                    Conquistas

                                </h3>
                                <h4 className='font-bold'>
                                    2º lugar - Hackathon ManaMano <span className='float-right font-medium'>2022</span>
                                </h4>
                                <span className='break-words text-justify text-zinc-400'>
                  Protótipo desenvolvido em um Hackathon promovido pelas Minervas Digitais na UFRJ,
                  com foco em ajudar nanoempreendedoras a organizar e gerir melhor seus negócios.
                  A solução abordou desafios como a separação entre finanças pessoais e empresariais, promovendo autonomia e crescimento sustentável.
                </span>
                            </div>
                            <div className='flex flex-col gap-2 p-6  flex-1'>

                                <h3 className='flex gap-2 text-green-400 font-bold uppercase items-center'>
                                    <LanguagesIcon/>
                                    Idiomas
                                </h3>
                                <div className='grid grid-rows-3 gap-2'>
                                    <div className='grid grid-cols-8 xl:grid-cols-6 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2'>
                                        <span>Inglês 🇬🇧</span>
                                        <div className='inline-flex items-center gap-1'>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-8 xl:grid-cols-6 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2'>
                                        <span>Francês 🇫🇷</span>
                                        <div className='inline-flex items-center gap-1'>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-zinc-600'/>
                                            <div className='h-2 w-2 rounded-2xl bg-zinc-600'/>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-8 xl:grid-cols-6 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-2'>
                                        <span>Português 🇧🇷</span>
                                        <div className='inline-flex items-center gap-1'>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                            <div className='h-2 w-2 rounded-2xl bg-white'/>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className=' p-6  flex flex-col flex-1'>
                                <h3 className='flex gap-2 text-green-400 font-bold uppercase items-center mb-1'>
                                    <GraduationCapIcon/>
                                    Cursos & Certificados
                                </h3>
                                <a href=""
                                   className='hover:bg-green-800 w-full py-1'>
                                    Curso Java Gratuito
                                    <span className='float-right text-gray-400'>5h</span>
                                </a>
                                <a href=""
                                   className='hover:bg-green-800 w-full py-1'>
                                    NLW Expert - Trilha Java
                                    <span className='float-right text-gray-400'>9h</span>
                                </a>
                                <a href=""
                                   className='hover:bg-green-800 w-full py-1'>
                                    NLW Expert - Trilha Java
                                    <span className='float-right text-gray-400'>5h</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section
                id='projects'
                className='px-6 flex justify-center items-center min-h-screen bg-zinc-900 '>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 grid-cols-3 gap-8 '>
                    <div className="flex flex-1 flex-col col-span-1 gap-2  items-end">
                        <h2 className='lg:text-5xl xl:text-8xl text-9xl leading-none  break-words uppercase font-black w-96 xl:w-72 lg:w-full'
                        >
                            Projetos
                        </h2>
                    </div>
                    <div className='flex items-center justify-center flex-1 col-span-2'>
                        <Carrousel
                            // activeIndex={activeIndex}
                            // projetos={projetos}

                        />
                    </div>
                </div>

            </section>
        </>
    )
}
