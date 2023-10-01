import { useState } from "react";
import { useEffect } from "react";
const useResMenu=(resid)=>{
    const [resData,setresData]=useState([]);
    console.log(resid);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.510753384971&lng=77.41082578474402&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        //console.log(json);
        setresData(json.data);
    }
   
    return resData
}
export default useResMenu;