import { useParams } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import Nav from "../components/shop/Nav";
import ProductCard from "../components/shop/ProductCard";
import Footer from "../components/shop/Footer";

const Product = () => {
    const { productName } = useParams();
    return(
        <div className="flex flex-col items-center font-OpenSans">  
            <Nav displaySearch={false}/>
            <div className="w-full mt-2">
                <img src="../product.png" alt="" className="w-full"/>
            </div>
            <h1 className="text-center my-5 text-2xl">Garnitur Granatowy Wełniany Monterrey</h1>
            <p className="text-xl">1399,90 zł <span className="text-gray-400 text-sm">w tym VAT</span></p>
            <form action="" className="w-full p-5 my-10">
                <select name="" id="" className="p-5 border-darkBlue border-2 w-full">
                    <option value="" disabled selected hidden>Wybierz rozmiar</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XLL</option>
                </select>
                <button type="submit" className="p-5 bg-darkBlue w-full text-white mt-3">Dodaj do koszyka</button>
            </form>
            <div className="w-full">
                <div className="flex w-full justify-between items-center border-y-1 border-black p-5">
                    <p>Szczegóły</p>
                    <FaArrowDown />
                </div>
                <div className="flex w-full justify-between items-center border-black p-5">
                    <p>Materiał</p>
                    <FaArrowDown />
                </div>
                <div className="flex w-full justify-between items-center border-y-1 border-black p-5">
                    <p>Opinie</p>
                    <FaArrowDown />
                </div>
            </div>
            <div className="mt-5 w-full p-5">
                <h2 className="text-left font-bold text-xl">Polecane produkty</h2>
                <div>
                    <ProductCard/>
                </div>
            </div>
            <p>{productName}</p>
            <Footer></Footer>
        </div>
    )
}

export default Product;