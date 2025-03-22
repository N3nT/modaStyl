import { FaCartArrowDown } from "react-icons/fa6";
const ProductCard = () => {
    return(
        <div className="max-w-[280px] my-10 mx-5 hover:scale-101 transition-transform">
            <img src="/product.png" alt="Product image" />
            <div className="mt-2 text-lg flex">
                <div>
                    <p>Garnitur Granatowy Wełniany Monterrey</p>
                    <p className="text-base text-gray-600">1399,90 zł</p>
                </div>
                <div className="bg-[#183B57] hover:bg-[#d9d9d9] transition-colors flex items-center justify-center p-4 rounded-l-2xl" onClick={(e) => {
                        e?.stopPropagation();
                        e?.preventDefault();
                        console.log("addToCart");
                    }}>
                    <FaCartArrowDown className="addToCart text-3xl text-white"/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;