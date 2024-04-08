import Project from "@/components/project/project";
import IProject from "@/interfaces/IProject";
import { useState } from "react";
export default function Projectos(){
    
    const [projects,setProjects] = useState([
        {
            src:"/projects/project1.png",
            url:"",
            alt:""
        }
        ,
        {
            src:"/projects/project2.png",
            url:"",
            alt:""
        }
        ,
        {
            src:"/projects/project3.png",
            url:"",
            alt:""
        }
    ])

    return(
        <main className="flex mb-[4.5rem] mt-[3rem]  gap-16  min-h-[98vh] items-center justify-center pr-[10%] pl-[10%] flex-col md:gap-[15%] md:mb-[0] md:mt-[0] md:pt-12 md:pb-12 sm:mr-8 sm:ml-8 ">
           
            <section className="flex flex-initial flex-col min-w-[16rem]">
              <h1 className="font-hyeon text-white text-[2.25rem]">Minhas <strong className="text-[#ff577f]">Habilidades</strong></h1>
              <p className=" font-lato font-normal text-justify pt-8 text-white text-[1.5rem]">Lorem. A, modi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, quo repudiandae in tempore vitae saepe, error ducimus nesciunt quaerat ad assumenda enim ea nisi. Atque sequi ducimus natus tempora quasi!</p>
            </section>
            
            <section className=" flex justify-around gap-10 sm:pt-14 w-[100%] flex-col sm:flex-row items-center">
                {projects.map((p:IProject) => 
                    <Project src={p.src} url={p.url} alt={p.alt}></Project>
                )}
            </section>
            
        </main>
      )
}