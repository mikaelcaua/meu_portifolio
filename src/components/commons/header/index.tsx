import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return(
        <header className="pt-14 bg-[#2b2b2b]">
            <nav className="flex justify-center items-center gap-16">
                <Link href={""} className="flex text-[#ff577f] font-hyeon text-2xl">
                    Home
                </Link>

                <Link href={""} className="flex text-[#ff577f] font-hyeon text-2xl">
                    Habilidades
                </Link>

                <Link href={""} className="flex text-[#ff577f] font-hyeon text-2xl">
                    Projetos
                </Link>
            </nav>
        </header>
    )
}