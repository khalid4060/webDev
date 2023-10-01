import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useResMenu from "../utility/useResMenu";
import ResMenuCat from "./ResMenuCat";

const Menu=()=>{
    const {resid}=useParams();
    const resData=useResMenu(resid);
    if(resData.length===0){
        return(
            <div>
                <Shimmer/>
            </div>
        )
    }
    const ResCat = resData?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.filter((c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    })

  return (
    <div className="Res-menu-head-parent">
      <div className="Res-menu-head">
        <div className="Menu-head">
          <div>
            <h1>{resData.cards[0].card.card.info.name}</h1>
          </div>
          <div className="star-rating">
            <span>⭐ {resData.cards[0].card.card.info.avgRating}</span>
          </div>
        </div>
        <div className="cusin-name">
          <p>
            {resData.cards[0].card.card.info.cuisines.join(" ,")} -{" "}
            {resData.cards[0].card.card.info.costForTwoMessage}
          </p>
        </div>

        {ResCat.map((cat) => {
          console.log(cat);
          return <ResMenuCat data={cat} />;
        })}
      </div>
    </div>
  );
}

export default Menu;