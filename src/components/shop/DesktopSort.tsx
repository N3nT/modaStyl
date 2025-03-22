const DesktopSort = () => {
    return(
        <div className="space-x-2 justify-center mb-5 hidden lg:flex *:bg-gray-200 *:mt-2 *:w-[150px]">
        <select name="" id="">
            <option value="" disabled selected hidden>Cena</option>
            <option value="">Domyślnie</option>
            <option value="">Cena rosnąco</option>
            <option value="">Cena malejąco</option>
            <option value="">Promocje</option>
        </select>
        <select name="" id="">
            <option value="" disabled selected hidden>Materiał</option>
            <option value="">Bawełna</option>
            <option value="">Len</option>
            <option value="">Wełna</option>
        </select>
        <select name="" id="">
            <option value="" disabled selected hidden>Inne</option>
            <option value="">Ostatnie sztuki</option>
            <option value="">Nowości</option>
        </select>
        </div>
    );
}

export default DesktopSort;