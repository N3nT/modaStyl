import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="p-5">
            <p className="flex items-center text-xl text-gray-400">ModaStyl <div className="bg-black w-2 h-2 rounded-full mx-3"></div><span className='text-black'><Link to="/">Sklep</Link></span></p>
        </div>
    )
}

export default Nav;