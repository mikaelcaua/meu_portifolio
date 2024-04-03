import { ReactElement } from "react"
import Header from "../header"
import Footer from "../footer"



interface LayoutProps{
    children:ReactElement
}


export default function Layout({children}:LayoutProps){
    return(
        <>
        <Header></Header>
        {children}
        <Footer></Footer>
        </>
        
    )
}