import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context"
import "./navigation.styles.scss"

const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
 
  console.log(currentUser)
    return(
      <>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">SHOP</Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                )
                : (
                <Link className="nav-link" to="/auth">SIGN IN</Link>
              )
            }
            <CartIcon />
            {/* <Link className="nav-link" to="/shop">SHOP</Link> */}
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </>
    )
  }

  export default Navigation