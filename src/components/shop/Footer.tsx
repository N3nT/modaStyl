const Footer = () => {
    return(
        <>
            <footer className="bg-darkBlue w-full py-10">
                <div className="flex justify-center">
                    <img src="../logo.png" alt=""/>
                </div>
                <div className="*:text-center *:text-white mt-10">
                    <h3 className="text-2xl font-bold">Moda Styl Sp.j Bochnia</h3>
                    <h3 className="text-lg font-bold mt-5">Adresy i dane kontaktowe</h3>
                    <div className="lg:flex justify-center lg:space-x-10 lg:mt-5">
                        <div>
                            <h4 className="font-bold mt-3">Siedziba firmy - produkcja, sprzedaż</h4>
                            <p>ul. Proszwoska 1</p>
                            <p>32-700 Bochnia</p>
                        </div>
                        <div>
                            <h4 className="font-bold mt-3">Sklep firmowy</h4>
                            <p>Galeria Rondo - 1 piętro</p>
                            <p>32-700 Bochnia</p>
                        </div>
                        <div>
                            <h4 className="font-bold mt-3">Telefony kontaktowe</h4>
                            <p>+48 14 6113035</p>
                            <p>+48 14 6113872</p>
                        </div>
                        <div>
                            <h4 className="font-bold mt-3">Emaile</h4>
                            <p>modastyl@poczta.onet.pl</p>
                            <p>produkcja@modastyl.com.pl</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-white text-center w-full py-10  flex items-center justify-center">
                <p>&copy; 2021 - 2025 | ModaStyl - Garnitury</p>
            </div>
        </>
    )
}

export default Footer;