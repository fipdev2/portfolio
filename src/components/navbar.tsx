import {scrollToNextSection} from "@/utils/scroll-to-next-section";
import {navItemHoverIn, navItemHoverOut} from "@/utils/nav-item-hover";
import {useState} from "react";
import {CircleX, X} from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <nav className="py-6 text-opacity-50 text-white fixed top-0 left-0 w-full z-50 bg-black"
            >
                <div className="container flex items-center justify-between px-6">
                    {/* Logo ou Título */}
                    <div className="text-2xl font-bold h-full flex justify-center items-center">{'</>'}</div>

                    {/* Links de navegação */}
                    <ul className="h-full pb-2 flex space-x-8 sm:hidden md:hidden text-md">
                        <li>
                            <a
                                id="hero-trigger"
                                onMouseEnter={() => navItemHoverIn('hero-trigger')}
                                onMouseLeave={() => navItemHoverOut('hero-trigger')}
                                onClick={() => scrollToNextSection('hero')}
                                className="block hover:text-opacity-100 hover:text-white hover:cursor-pointer transition-all duration-300"
                            >
                                Início
                                <div className="hidden h-0.5 w-full bg-green-400 relative bottom-0"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                id="experience-trigger"
                                onMouseEnter={() => navItemHoverIn('experience-trigger')}
                                onMouseLeave={() => navItemHoverOut('experience-trigger')}
                                onClick={() => scrollToNextSection('experience')}
                                className=" block hover:text-opacity-100 hover:text-white hover:cursor-pointer transition-all duration-300"
                            >
                                Experiência
                                <div className="hidden h-0.5 w-full bg-green-400 relative bottom-0"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                id="education-trigger"
                                onMouseEnter={() => navItemHoverIn('education-trigger')}
                                onMouseLeave={() => navItemHoverOut('education-trigger')}
                                onClick={() => scrollToNextSection('education')}
                                className=" block hover:text-opacity-100 hover:text-white hover:cursor-pointer transition-all duration-300"
                            >
                                Formação
                                <div className="hidden h-0.5 w-full bg-green-400 relative bottom-0"></div>
                            </a>
                        </li>
                        <li>
                            <a
                                id="projects-trigger"
                                onMouseEnter={() => navItemHoverIn('projects-trigger')}
                                onMouseLeave={() => navItemHoverOut('projects-trigger')}
                                onClick={() => scrollToNextSection('projects')}
                                className=" block hover:text-opacity-100 hover:text-white hover:cursor-pointer transition-all duration-300"
                            >
                                Projetos
                                <div className="hidden h-0.5 w-full bg-green-400 relative bottom-0"></div>
                            </a>
                        </li>
                    </ul>

                    {/*mobile*/}


                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        data-collapse-toggle="navbar-hamburger" type="button"
                        className="hidden md:inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
                        aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div
                        className={`${isMenuOpen === false && 'sm:hidden md:hidden'} hidden absolute top-0 right-2 md:inline-flex`}
                    >
                        <ul className="flex flex-col font-medium mt-4 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 p-2">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className='flex items-center justify-center w-5  place-self-end focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600'>
                                <X/>
                            </button>
                            <li>
                                <a
                                    onClick={() => scrollToNextSection('hero')}
                                    className="block px-3 py-2 transition-all duration-300"
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToNextSection('experience')}
                                    className="block px-3 py-2 transition-all duration-300"
                                >
                                    Experiência
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToNextSection('education')}
                                    className="block px-3 py-2 transition-all duration-300"
                                >
                                    Formação
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => scrollToNextSection('projects')}
                                    className="block px-3 py-2 transition-all duration-300"
                                >
                                    Projetos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;