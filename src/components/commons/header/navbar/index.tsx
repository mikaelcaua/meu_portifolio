import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(
        <nav className="flex justify-around md:justify-center items-center md:gap-[3.5rem]">
        <Link href={""} className="flex text-[#ff577f] font-hyeon text-[1rem] md:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px]  hover:border-b-[#ff577f]">
            <Image src={'/nav_icons/home.png'} width={32} height={32} alt="botão git"></Image>
            Home
        </Link>

        <Link href={""} className="flex text-[#ff577f] font-hyeon text-[1rem] md:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px] hover:border-b-[#ff577f]">
            <Image src={'/nav_icons/habilities.png'} width={32} height={32} alt="botão git"></Image>
            Habilidades
        </Link>

        <Link href={""} className="flex text-[#ff577f] font-hyeon text-[1rem] md:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px]  hover:border-b-[#ff577f]">
            <Image src={'/nav_icons/projects.png'} width={32} height={32} alt="botão git"></Image>
            Projetos
        </Link>
    </nav>
    )
}