import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex mb-[4.5rem] mt-[3rem] flex-col-reverse gap-16  min-h-[98vh] items-center justify-center pr-[10%] pl-[10%] md:flex-row md:gap-[15%] md:mb-[0] md:mt-[0]">
       
        <section className="flex flex-initial flex-col sm:min-w-[16rem]">
          <h1 className="font-hyeon text-white text-[2.25rem]">Mikael <strong className="text-[#ff577f]">Cauã</strong></h1>
          <p className=" text-justify pt-8 text-white text-[1.5rem]max-w-[30rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad dicta quo voluptates voluptas molestias voluptate maxime, a veritatis hic perferendis corrupti quia quas at odio. Magnam, tenetur voluptatum. A, modi?</p>

          <section className="flex flex-col items-center justify-center pt-11 gap-[1.5rem] ">
            <h2 className="text-white font-hyeon text-[1rem] font-bold">Acesse minhas redes:</h2>

            <Button alt="botão git" src={'/button_icons/github.png'}href="">
            Github
            </Button>

            <Button alt="botão Linedin" src={'/button_icons/linkedin.png'}href="">
            Linkedin
            </Button>

          </section>
        </section>
        
        <img src="/my_photo.png" alt="Foto de Mikael" className="h-[100%] w-[100%] min-h-[20rem] rounded-[0.5rem] max-h-[40rem] max-w-[30rem]"/>
    </main>
  );
}
