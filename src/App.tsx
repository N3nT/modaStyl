import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/product/:productName" element={<Product/>} />
        <Route path="/cart/" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
