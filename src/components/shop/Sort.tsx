import { FaArrowLeft } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Sort = ({status, setSortStatus} : {status: boolean, setSortStatus: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return(
            //wysokosc nav = 68px
            <>
            {status ? (
                <div className="w-full absolute h-screen bg-white top-[68px] p-10 flex justify-center overflow-hidden">
                    <div className="w-full max-w-[270px]">
                        <div className="flex items-center"><FaArrowLeft className="text-2xl" onClick={() => setSortStatus(false)}/><p className="text-xl ml-2">Produkty</p></div>
                        <div className="mt-5">
                            <h3>Cena</h3>
                            <div className="flex items-center space-x-2 mt-2">
                                <input type="text" placeholder="0.00 zł" className="w-[100px] p-2 bg-gray-200 rounded-md"/>
                                <FaMinus />
                                <input type="text" placeholder="0.00 zł" className="w-[100px] p-2 bg-gray-200 rounded-md"/>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3>Sortuj</h3>
                            <select name="" id="" className="bg-gray-200 mt-2">
                                <option value="">Popularne</option>
                                <option value="">Nowości</option>
                                <option value="">Najniższa Cena</option>
                                <option value="">Najwyższa Cena</option>
                                <option value="">Promocje</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <h3>Materiał</h3>
                            <select name="" id="" className="bg-gray-200 mt-2">
                                <option value="">Popularne</option>
                                <option value="">Nowości</option>
                                <option value="">Najniższa Cena</option>
                                <option value="">Najwyższa Cena</option>
                                <option value="">Promocje</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <h3>Kolor</h3>
                            <select name="" id="" className="bg-gray-200 mt-2">
                                <option value="">Popularne</option>
                                <option value="">Nowości</option>
                                <option value="">Najniższa Cena</option>
                                <option value="">Najwyższa Cena</option>
                                <option value="">Promocje</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <h3>Płeć</h3>
                            <div>
                                <input type="radio" name="sex" id="women" value={"women"}/>
                                <label htmlFor="women">Kobieta</label>

                                <input type="radio" name="sex" id="men" value={"men"} className="ml-5"/>
                                <label htmlFor="men">Mężczyzna</label>
                            </div>
                        </div>
                    </div>     
                </div>
                ) : (null)}
                </>
            )
}

export default Sort;