import Restcard from "./RestCards";
import { Link } from "react-router-dom";
import { resobj } from "../utility/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { promRestCard } from "./RestCards";

const Body = () => {
 var latitude;
 var longitude;
// navigator.geolocation.getCurrentPosition(success);
//   async function success(pos) {
//     const crd = await pos.coords;
//     latitude = crd.latitude;
//     longitude = crd.longitude;
//   }
  
  const [resList, setreslist] = useState([]); //resobj(is passed as default value which will assign to resList)
  const [inputtext, setinputText] = useState("");
    const [filterresList, setfilterResList] = useState([]);
    
    const PromtedCard = promRestCard(Restcard);

  //console.log(resList);
   
   
  

  try {
    
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      console.log("asdasdads");
      console.log(await latitude);
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.510753384971&lng=77.41082578474402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
       
      const json = await data.json();

      console.log(json);

      const apiRestList =
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          .restaurants;
      const apiFilRestList =
        json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setreslist(apiRestList);
      setfilterResList(apiFilRestList);
    };
  } catch (error) {
    console.log(error);
  }

  if (resList.length === 0) {
    return (
      <div className="rescontainer">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          className="input-search"
          type="text"
          placeholder="Search...                           🔍"
          value={inputtext}
          onChange={(e) => {
            console.log(e);
            setinputText(e.target.value);
          }}
        />
        <button
          className="btn-search"
          onClick={() => {
            // Search filter logic
            console.log("asdadasdas");
            const fliterRes = resList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(inputtext.toLowerCase());
            });
            console.log(fliterRes);
            setfilterResList(fliterRes);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter for top restro
            const newObj = filterresList.filter(
              (restro) => restro.info.avgRatingString > 4
            );
            console.log(newObj);
            //setreslist(newObj);
            setfilterResList(newObj);
          }}
        >
          Top Rated Restrents
        </button>
      </div>
      <div className="rescontainer">
        {filterresList.map(function (restro) {
          return (
            <Link
              className="text-link-res "
              to={"/menu/" + restro.info.id}
              key={restro.info.id}
            >
              {console.log(restro.info.isOpen)}
              {restro.info.isOpen ? (
                <PromtedCard resdata={restro} />
              ) : (
                <Restcard resdata={restro} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
