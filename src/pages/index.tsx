import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-[98vh] bg-[#2b2b2b] items-center justify-center md:gap-[15%] gap-20 pr-[10%] pl-[10%]">
       
        <section className="flex flex-initial flex-col sm:min-w-[16rem]">
          <h1 className="font-hyeon text-white text-3xl">Mikael <strong className="text-[#ff577f]">Cauã</strong></h1>
          <p className=" text-justify pt-8 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dicta quo voluptates voluptas molestias voluptate maxime, a veritatis hic perferendis corrupti quia quas at odio. Magnam, tenetur voluptatum. A, modi?</p>

          <section className="flex flex-col items-center justify-center pt-11 gap-[1.5rem] ">
            <h2 className="text-white font-hyeon text-[1rem] font-bold">Acesse minhas redes:</h2>
            <Link href={""} className="border-[#ff577f] border-[2px] pt-[1em] pb-[1em] pr-[5rem] pl-[5rem] rounded-[0.5rem] text-center w-[15rem] text-[#F6F6F6] font-semibold">Github</Link>
            <Link href={""} className="border-[#ff577f] border-[2px] pt-[1em] pb-[1em] pr-[5rem] pl-[5rem] rounded-[0.5rem] text-center w-[15rem] text-[#F6F6F6] font-semibold">Instagram</Link>
          </section>

        </section>
        
        <img src="/my_photo.png" alt="Foto de Mikael" className="h-[100%] w-[100%] min-h-[20rem] rounded-[0.5rem]"/>
    </main>
  );
}
