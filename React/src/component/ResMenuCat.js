import { useState } from "react";
import ItemList from "./ItemList";
const ResMenuCat = (props) => {
    console.log(props?.data);
    const itemList = props?.data.card.card.itemCards;
    const [showItem,setShowItem]=useState(false)
    function checkHandle() {
        setShowItem(!showItem)
    }
   
    return (
      <div>
        <div className="Item-list">
          <div className="res-cat-Heading" onClick={checkHandle}>
            <span>
              {props?.data?.card?.card?.title} ({itemList.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItem&&<ItemList data={itemList} />}
        </div>
      </div>
    );
};

export default ResMenuCat;
