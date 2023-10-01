import { useDispatch } from "react-redux";
import { addItem } from "../utility/cartSlice";

const ItemList = ({data}) => {
  console.log(data)
  const dispatch=useDispatch()
  const clickhandle= (item) => {
    dispatch(addItem(item));
  };
    return (
      <div className="Acr-body-parent">
        {/* <div className="Item-name">
          <span>{props.data.card.info.name}</span>
          <span>{props.data.card.info.price}</span>
        </div>
        <p>{props.data.card.info.description}</p> */}
        {data.map((item) => (
          <div className="Acr-body">
            <div>
              <div className="Acr-name">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>

              <p>{item.card.info.description}</p>
            </div>
            <div className="acr-img">
              <div className="item-add">
                <button onClick={()=>clickhandle(item)}>Add +</button>
              </div>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  item.card.info.imageId
                }
                alt="No image"
            
                
              />
            </div>
          </div>
        ))}
      </div>
    );
}
export default ItemList