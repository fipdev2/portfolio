import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";

export default function Footer() {
    return (
        <>
            <footer className=' flex justify-between w-[1024px] mt-12 2xl:max-w-[calc(100%-70px)] xl:mt-4'>
                <Link href='/' className='p-4 flex items-center justify-center hover:border-light-purple hover:border-2 hover:bg-purple-gray hover:rounded-xl hover:bg-opacity-30 hover:backdrop-blur-md'>
                    <strong>Sobre mim </strong>
                    <TbChevronRight size={24} />
                </Link>
                <Link href='/projetos' className='p-4 flex items-center justify-center hover:border-light-purple hover:border-2 hover:bg-purple-gray hover:rounded-xl hover:bg-opacity-30 hover:backdrop-blur-md'>
                    <strong>Projetos </strong>
                    <TbChevronRight size={24} />
                </Link>
            </footer>
        </>
    )
}