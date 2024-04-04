import Image from "next/image";

export default function Footer(){
    return(
        <footer className=" flex items-center justify-center pt-5 pb-5 flex-col gap-6 text-[#b8b8b8] border-t border-t-[#ff577f]">
            <Image src={"/footer_icons/alura_footer.png"} width={130} height={75} alt="logo alura"></Image>
            <p className="font-[16px] ">Desenvolvido por Mikael</p>
        </footer>
    )
}