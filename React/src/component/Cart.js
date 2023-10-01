import { useSelector } from "react-redux"
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utility/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

    return (
      <div>
        <h1>cart</h1>
        <button onClick={() => {
          dispatch(clearCart())
          
        }}>Clear</button>
        <ItemList data={cartItem} />
      </div>
    );
}
export default Cart