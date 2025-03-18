import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from '../components/shop/Nav';
import ProductCard from '../components/shop/ProductCard';
import Pagination from '../components/shop/Pagination';
import Categories from '../components/shop/Categories';
import Sort from '../components/shop/Sort';

const Shop = () => {
    const [categoriesStatus, setCategoriesStatus] = useState(false);
    const [sortStatus, setSortStatus] = useState(false);

    const handleAsideStatus = (status: boolean, changer: React.Dispatch<React.SetStateAction<boolean>>) : void => {
        changer(!status);
    }

    useEffect(() => {
        if(categoriesStatus || sortStatus){
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [categoriesStatus, sortStatus])

    return(
        <div className='flex flex-col items-center font-OpenSans'>
            <Nav/>
            <h2 className='text-center text-3xl'>Produkty</h2>
            <div className='flex w-full justify-center space-x-2 my-5 *:bg-[#183B57] *:p-3 *:text-white *:text-center *:w-[130px]'>
                <div onClick={() => {handleAsideStatus(categoriesStatus, setCategoriesStatus)}}>Kategorie</div>
                <div onClick={() => {handleAsideStatus(sortStatus, setSortStatus)}}>Sortowanie</div>
            </div>
            <p className='text-gray-400'>Ilość produktów: <span>10</span></p>
            <Categories status={categoriesStatus} setCategoryStatus={setCategoriesStatus}></Categories>
            <Sort status={sortStatus} setSortStatus={setSortStatus}></Sort>
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