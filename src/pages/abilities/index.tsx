import Button from "@/components/button"

export default function Abilities(){
  return(
    <main className="flex mb-[4.5rem] mt-[3rem] flex-col-reverse gap-16  min-h-[98vh] items-center justify-center pr-[10%] pl-[10%] sm:flex-row md:gap-[15%] md:mb-[0] md:mt-[0] md:pt-12 md:pb-12 sm:mr-8 sm:ml-8 ">
       
        <section className="flex flex-initial flex-col max-w-[40rem] min-w-[16rem]">
          <h1 className="font-hyeon text-white text-[2.25rem]">Minhas <strong className="text-[#ff577f]">Habilidades</strong></h1>
          <p className="font-lato font-normal text-left pt-8 text-white text-[1.5rem]">Experiência com React, Next, SQL e Java Spring Boot, atualmente sou monitor das disciplinas de Cálculo 1, Algoritmos e Estrutura de Dados 1, além disso tenho como hobby a participação em competições de programação.  </p>

          <section className="flex flex-col items-center justify-center pt-11 gap-[1.5rem] ">
            

            <Button alt="botão certificados" src={'/button_icons/certificates.png'} href="https://cursos.alura.com.br/user/mikaelcauasilva1profissional">
            Certificados
            </Button>

          

          </section>
        </section>
        
        <img src="/abilities.png" alt="Foto habilidades" className="h-[100%] w-[100%] min-h-[20rem] sm:w-[70%] rounded-[0.5rem] max-h-[40rem] max-w-[26rem]"/>
    </main>
  )
}