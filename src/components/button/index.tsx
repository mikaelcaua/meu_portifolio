
import Link from "next/link";
import Image from "next/image";

interface ButtonProps{
    children:string
    href:string
    src:string
    alt:string
}

export default function Button({children, href,src,alt}:ButtonProps){
    return(
        <Link href={href} target="_blank" className="border-[#ff577f] border-[2px] pt-[1em] pb-[1em] rounded-[0.5rem] text-center w-[15rem] text-[#F6F6F6] font-semibold flex text-[1.5rem] items-center justify-center gap-[0.5rem] hover:bg-slate-100 hover:text-[#ff577f] transition-[1s]">
              <Image src={src} width={32} height={32} alt={alt}></Image>
              {children}
            </Link>
    )
}