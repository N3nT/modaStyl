import { FaArrowLeft } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Categories = ({status, setCategoryStatus} : {status: boolean, setCategoryStatus: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        //wysokosc nav = 68px
        <>
        {status ? (
            <div className="w-full absolute h-screen bg-white top-[68px] p-10 flex justify-center overflow-hidden">
                <div className="w-full max-w-[270px]">
                    <div className="flex items-center"><FaArrowLeft className="text-2xl" onClick={() => setCategoryStatus(false)}/><p className="text-xl ml-2">Produkty</p></div>
                    <div className="flex items-center my-5">
                        <input type="text" name="" id="" placeholder="Szukaj..." className="border-1 p-3 h-[50px]"/>
                        <button type="submit" className="bg-black p-3 h-[50px]"><FaSearch className="text-white text-2xl"/></button>
                    </div>
                    <ul className="p-5 *:p-1 *:text-gray-500">
                        <li>Bielizna</li>
                        <li>Buty</li>
                        <li>Garnitur</li>
                        <li>Kamizelka</li>
                        <li>Marynarka</li>
                        <li>Nakrycie Głowy</li>
                        <li>Akcesoria</li>
                        <li>Płaszcze</li>
                    </ul>
                </div>     
            </div>
        ) : (null)}
        </>
    )
}

export default Categories;