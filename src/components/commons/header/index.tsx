import Image from "next/image"
import Link from "next/link"
import NavBar from "./navbar"

export default function Header(){
    return(
        <header className="pt-14" >
           <NavBar></NavBar>
        </header>
    )
}