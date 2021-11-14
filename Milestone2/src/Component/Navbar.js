import react from 'react';
function Navbar(){

    return(
        <nav className="Navbar">
            <h1>Dessert Journal</h1>
        <div className="Links">
        <a href='/' className="link_dessert">Desserts</a>
        <a href='/' className="contact">Contact us</a>
        </div>
        </nav>
    )
}
export default Navbar;