import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Index from "./Index"
import Artist from "./Artist"
import Math from "./Math"
import Unbox from "./Unbox"
import { setBgColor, setHeaderClass } from "../stores"
import { useRecoilValue } from "recoil"

export default function Layout() {

    const headerClass = useRecoilValue(setHeaderClass)
    const bgColor = useRecoilValue(setBgColor)

    document.body.style.background = bgColor
    
    return (
        <section id="layout">
            <Header backgroundClass={headerClass} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="math" element={<Math />} />
                    <Route path="artist" element={<Artist />} />
                    <Route path="unbox" element={<Unbox />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </section>
    )
}