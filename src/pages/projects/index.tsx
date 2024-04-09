import Project from "@/components/project/project";
import IProject from "@/interfaces/IProject";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Projectos(){
    
    const[projects, setProjects] = useState<IProject[]>([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const repos:IProject[] = (await axios.get("https://api.github.com/users/mikaelcaua/repos")).data;
            setProjects(repos)
        }
        fetchData();
    },[])

    return(
        <main className="flex mb-[4.5rem] mt-[3rem]  gap-16  min-h-[98vh] pr-[10%] pl-[10%] flex-col md:gap-[15%] md:mb-[0] md:mt-[0] md:pt-12 md:pb-12 sm:mr-8 sm:ml-8">
           
            <section className="flex flex-initial flex-col min-w-[16rem]">
              <h1 className="font-hyeon text-white text-[2.25rem]">Meus <strong className="text-[#ff577f]">Projetos</strong></h1>
              <p className=" font-lato font-normal text-left pt-8 text-white text-[1.5rem]">Segue abaixo alguns projetos que eu desenvolvi utilizando Java, TypeScript, C...</p>
            </section>
            
            {projects.length==0 && 
            <h1 className="font-hyeon font-bold text-white text-center pt-10 text-[1.5rem]">Carregando...</h1>}

            <section className=" flex flex-wrap  gap-10 sm:pt-14 w-[100%] items-center justify-center">
                {projects.map((p:IProject) => 
                    <Project clone_url={p.clone_url} name={p.name} language={p.language} key={p.name}></Project>
                )}
            </section>
            
        </main>
      )
}