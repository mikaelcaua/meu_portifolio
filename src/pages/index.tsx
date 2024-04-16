import Button from "@/components/button";

export default function Home() {
  return (
    <main className="flex mb-[4.5rem] mt-[3rem] flex-col-reverse gap-16  min-h-[98vh] items-center justify-center pr-[10%] pl-[10%] sm:flex-row md:gap-[15%] md:mb-[0] md:mt-[0] md:pt-12 md:pb-12">
       
        <section className="flex flex-initial flex-col max-w-[30rem] sm:min-w-[16rem]">
          <h1 className="font-hyeon text-white text-[2.25rem]">Mikael <strong className="text-[#ff577f]">Cauã</strong></h1>
          <p className=" font-normal font-lato pt-8 text-left text-white text-[1.5rem] ">
            Meu nome é Mikael, atualmente estou cursando Ciência da Computação na UFMA e sou bolsista no programa Jovem Tech, sou apaixonado por matemática, animes, música e gosto bastante de praticar atividades físicas.
          </p>

          <section className="flex flex-col items-center justify-center pt-11 gap-[1.5rem] ">
            <h2 className="text-white font-hyeon text-[1rem] font-bold">Acesse minhas redes:</h2>

            <Button alt="botão git" src={'/button_icons/github.png'}href="https://github.com/mikaelcaua">
            Github
            </Button>

            <Button alt="botão Linedin" src={'/button_icons/linkedin.png'}href="https://br.linkedin.com/in/mikael-cau%C3%A3-silva">
            Linkedin
            </Button>

          </section>
        </section>
        
        <img src="/my_photo.jpeg" alt="Foto de Mikael" className="h-[100%] w-[100%] sm:w-[60%] min-h-[20rem] rounded-[0.5rem] max-h-[40rem] max-w-[30rem]"/>
    </main>
  );
}
