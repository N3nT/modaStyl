import { Link } from 'react-router-dom';
import Nav from '../components/shop/Nav';
import ProductCard from '../components/shop/ProductCard';
import Pagination from '../components/shop/Pagination';

const Shop = () => {
    return(
        <div className='flex flex-col items-center font-OpenSans'>
            <Nav/>
            <h2 className='text-center text-3xl'>Produkty</h2>
            <div className='flex w-full justify-center space-x-2 my-5 *:bg-[#183B57] *:p-3 *:text-white *:text-center'>
                <div>Kategorie</div>
                <div>Sortowanie</div>
            </div>
            <div className='w-full flex flex-wrap justify-center space-x-5 max-w-[1200px]'>
                <Link to="/product/1"><ProductCard/></Link>
                <Link to="/product/1"><ProductCard/></Link>
                <Link to="/product/1"><ProductCard/></Link>
                <Link to="/product/1"><ProductCard/></Link>
            </div>
            <Pagination/>
        </div>
    )
}

export default Shop;