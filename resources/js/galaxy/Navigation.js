import { Link } from "react-router-dom";
import shoppingCart from '../../../storage/img/cart.png';




function Navigation(){

    return(
    
            
        <div>
               
            
            <div className="DarkDream">
                <h1><Link to="/">Dark Dream</Link></h1>
                    <p className="index">We want your money</p>
                <div className = "navigation">
                    
                    <Link to="/items/all"><p>All items</p></Link>
                    <Link to="/universes"><p>Choose universe</p></Link>
                    <Link to="/Galaxy"><p>Choose galaxy</p></Link>
                    <Link to="/owners"><p>Owners</p></Link>
                    <Link to="/AboutUs"><p>About us</p></Link>
                    <Link to="/login"><p>Login</p></Link>
                    <Link to="/register"><p>Register</p></Link>
                    <Link to="/shopping_cart"> <div className="cart"><img src={shoppingCart}/></div></Link>
                </div>
            </div>
        </div>
    )
}
export default Navigation;