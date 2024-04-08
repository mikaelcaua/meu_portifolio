import Image from "next/image";
import Link from "next/link";

interface ProjectProps{
    url:string
    src:string
    alt:string
}

export default function Project({url,src,alt}:ProjectProps){
    return(
        <div className="project flex">
            <Link href={url}>
                <Image width={250} height={400} alt={alt} src={src}></Image>
            </Link>
        </div>
    )
}