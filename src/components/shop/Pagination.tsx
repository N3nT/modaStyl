const Pagination = () => {
    //usun marginX
    return(
        <div className="flex *:p-3 my-10 space-x-2">
            <div className="bg-[#183B57] w-10 text-center text-white">1</div>
            <div className="bg-[#d9d9d9]">2</div>
            <div className="bg-[#d9d9d9]">3</div>
            <div className="bg-[#d9d9d9]">4</div>
            <div className="bg-[#183B57] w-10 text-center text-white">5</div>
        </div>
    )
}

export default Pagination;