import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Nav from "../components/shop/Nav";
import ProductCard from "../components/shop/ProductCard";
import Footer from "../components/shop/Footer";

const Product = () => {
    const { productName } = useParams();
    console.log(productName);

    const [firstAccordion, setFirstAccordion] = useState(false);
    const [test, setTest] = useState(false);
    const [three, setHtree] = useState(false);

    const resetScroll = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        resetScroll();
    }, []);

    return(
        <div className="flex flex-col items-center font-OpenSans">  
            <Nav displaySearch={false}/>
            <div className="w-full flex flex-col items-center md:items-start md:flex-row max-w-[1000px] md:space-x-10 justify-center">
                <div className="w-full mt-2 md:min-w-[400px] md:max-w-[400px]">
                    <img src="../product.png" alt="" className="w-full md:w-[400px]"/>
                </div>
                    <div>
                    <h1 className="text-center my-5 text-2xl">Garnitur Granatowy Wełniany Monterrey</h1>
                    <p className="text-xl text-center">1399,90 zł <span className="text-gray-400 text-sm">w tym VAT</span></p>
                    <form action="" className="w-full p-5 my-10">
                        <select name="" id="" className="p-5 border-darkBlue border-2 w-full">
                            <option value="" disabled selected hidden>Wybierz rozmiar</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XXL</option>
                        </select>
                        <button type="submit" className="p-5 bg-darkBlue w-full text-white mt-3">Dodaj do koszyka</button>
                    </form>
                    <div className="w-full max-w-[450px]">
                        <div className="flex flex-col w-full justify-between items-center border-y-1 border-black p-5">
                            <div className="flex w-full justify-between items-center">
                                <p>Opis</p>
                                <FaArrowDown onClick={() => {
                                    setFirstAccordion(!firstAccordion);
                                }}/>
                            </div>
                            {firstAccordion ? (
                                 <div className="mt-2 max-w-[410px]">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem harum delectus voluptatum voluptas repellendus repudiandae dolor culpa rerum, accusamus nisi debitis odit mollitia repellat commodi eaque placeat totam nostrum!</p>
                                </div>
                            ): (null)}
                        </div>
                        <div className="flex flex-col w-full justify-between items-center border-black p-5">
                            <div className="flex w-full justify-between items-center">
                                <p>Szczegóły produktu</p>
                                <FaArrowDown onClick={() => {
                                    setTest(!test);
                                }}/>
                            </div>
                            {test ? (
                                 <div className="mt-2 max-w-[430px]">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem harum delectus voluptatum voluptas repellendus repudiandae dolor culpa rerum, accusamus nisi debitis odit mollitia repellat commodi eaque placeat totam nostrum!</p>
                                </div>
                            ): (null)}
                        </div>
                        <div className="flex flex-col w-full justify-between items-center border-y-1 border-black p-5">
                            <div className="flex w-full justify-between items-center">
                                <p>Rozmiar i krój</p>
                                <FaArrowDown onClick={() => {
                                    setHtree(!three);
                                }}/>
                            </div>
                            {three ? (
                                 <div className="mt-2 max-w-[430px]">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem harum delectus voluptatum voluptas repellendus repudiandae dolor culpa rerum, accusamus nisi debitis odit mollitia repellat commodi eaque placeat totam nostrum!</p>
                                </div>
                            ): (null)}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-5 w-full p-5 max-w-[1300px]">
                <h2 className="text-left font-bold text-xl">Polecane produkty</h2>
                <div className="w-full flex flex-row justify-center space-x-5 flex-wrap">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product;