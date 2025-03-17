const ProductCard = () => {
    return(
        <div className="max-w-[280px] my-5">
            <img src="/product.png" alt="Product image" />
            <div className="mt-2 text-lg">
                <p>Garnitur Granatowy Wełniany Monterrey</p>
                <p className="text-base text-gray-600">1399,90 zł</p>
            </div>
        </div>
    )
}

export default ProductCard;