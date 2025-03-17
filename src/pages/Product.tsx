import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    return(
        <>
            <h1>Product</h1>
            <p>{id}</p>
        </>
    )
}

export default Product;