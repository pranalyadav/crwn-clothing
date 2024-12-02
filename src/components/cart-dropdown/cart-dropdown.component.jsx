import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles"
import CartItem from "../cart-item/cart-item.component"
import Button from "../button/button.component"
// import { useContext } from "react"
// import { CartContext } from "../../contexts/cart.context"
import { selectCartItems } from "../../store/cart/cart.selector"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const CartDropdown = () => {
    const cartItems  = useSelector(selectCartItems)
    const navigate = useNavigate()
    const gotToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item}/>
                    )) : (
                        <EmptyMessage>Your Cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
                <Button onClick={gotToCheckoutHandler}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown