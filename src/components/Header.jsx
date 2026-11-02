import NavBar from "./NavBar";


function Header({cantidadTotal}) {
    return <header className="sticky-top">
        <NavBar cantidadTotal={cantidadTotal}/>
    </header>
};

export default Header;