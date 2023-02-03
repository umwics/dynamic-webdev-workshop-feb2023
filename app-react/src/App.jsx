import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Index from "./pages/Index"
import Artist from "./pages/Artist"
import Math from "./pages/Math"
import Unbox from "./pages/Unbox"

export function App() {
  <section id="layout">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="math" element={<Math />} />
          <Route path="artist" element={<Artist />} />
          <Route path="unbox" element={<Unbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </section>
}

// export default App
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)