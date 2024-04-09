
interface ProjectProps{
    clone_url:string
    name:string
    language:string
}

export default function Project({clone_url,name,language}:ProjectProps){
    const nameUpperCase:string = name.toLocaleUpperCase();
    return(
        <div className="flex flex-col w-[17rem] items-center gap-3 border-[2px] border-[#ff577f] rounded-[1rem] pb-[3rem] pr-[0.4rem] pl-[0.4rem] pt-[1rem]">
            <div className="min-h-[4rem] flex items-center justify-center"><h1 className="font-hyeon font-bold text-white text-center">{nameUpperCase}</h1></div>
            <h2 className="text-[#ff577f] font-[500]">Linguagem: <span className="text-white font-lato">{language}</span></h2>
            <p className="text-[#ff577f] font-[500]">Link: <a className="text-white font-lato hover:text-gray-600" target="_blank" href={clone_url}>Acessar Repositório</a></p>
        </div>
    )
}