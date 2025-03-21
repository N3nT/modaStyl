const DesktopSort = () => {
    return(
        <div className="space-x-2 justify-center mb-5 hidden lg:flex">
        <select name="" id="" className="bg-gray-200 mt-2">
            <option value="" disabled selected hidden>Cena</option>
            <option value="">Domyślnie</option>
            <option value="">Popularne</option>
            <option value="">Nowości</option>
            <option value="">Najniższa Cena</option>
            <option value="">Najwyższa Cena</option>
            <option value="">Promocje</option>
        </select>
        <select name="" id="" className="bg-gray-200 mt-2">
            <option value="" disabled selected hidden>Materiał</option>
            <option value="">Domyślnie</option>
            <option value="">Popularne</option>
            <option value="">Nowości</option>
            <option value="">Najniższa Cena</option>
            <option value="">Najwyższa Cena</option>
            <option value="">Promocje</option>
        </select>
        <select name="" id="" className="bg-gray-200 mt-2">
            <option value="" disabled selected hidden>Inne</option>
            <option value="">Domyślnie</option>
            <option value="">Popularne</option>
            <option value="">Nowości</option>
            <option value="">Najniższa Cena</option>
            <option value="">Najwyższa Cena</option>
            <option value="">Promocje</option>
        </select>
        </div>
    );
}

export default DesktopSort;