import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from "react-icons/fa";

type navProps = {
    displaySearch?: boolean;
}

const Nav = ({displaySearch = true}: navProps) => {
    return(
        <nav className="p-5 w-full max-w-[1300px] flex justify-between">
            <p className="flex items-center text-xl text-gray-400">ModaStyl <div className="bg-black w-2 h-2 rounded-full mx-3"></div><span className='text-black'><Link to="/">Sklep</Link></span></p>
            <div className='flex space-x-10 justify-center'>
                <Link to="/cart">
                    <div className='relative'>
                        <FaShoppingCart className='text-3xl'/>
                        <div className='absolute -bottom-3 left-4 z-10 bg-[#183B57] rounded-2xl w-6 h-6 text-center text-white'>3</div>
                    </div>
                </Link>
                {displaySearch ? <FaSearch className='text-3xl'/> : null}
            </div>
        </nav>
    )
}

export default Nav;