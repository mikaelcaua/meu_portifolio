import Link from "next/link"
import Image from "next/image"

export default function NavBar(){
    return(
    
    <nav className="flex justify-around sm:justify-center items-center sm:gap-[3.5rem] ">
        
        <Link href={"/"} className="flex text-[#ff577f] font-hyeon text-[1rem] sm:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px]  hover:border-b-[#ff577f] h-[4rem]">
            <Image src={'/nav_icons/home.png'} width={32} height={32} alt="home"></Image>
            Home
        </Link>

        <Link href={"/abilities"} className="flex text-[#ff577f] font-hyeon text-[1rem] sm:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px] hover:border-b-[#ff577f] h-[4rem]">
            <Image src={'/nav_icons/habilities.png'} width={32} height={32} alt="habilidades"></Image>
            Habilidades
        </Link>

        <Link href={"/projects"} className="flex text-[#ff577f] font-hyeon text-[1rem] sm:text-[1.5rem] font-semibold items-center justify-center gap-[0.3rem] hover:border-b-[3px]  hover:border-b-[#ff577f] h-[4rem]">
            <Image src={'/nav_icons/projects.png'} width={32} height={32} alt="projetos"></Image>
            Projetos
        </Link>
    </nav>

    )
}