import Header from "../components/Header"
import Footer from "../components/Footer"
//import { bgColor, headerClass } from "../stores"

export default function Layout() {
    //document.body.style.background = bgColor
    
    return (
        <section id="layout">
            <Header backgroundClass="flowers" />
            <slot />
            <Footer />
        </section>
    )
}



{/* <style>
    #layout{
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style> */}