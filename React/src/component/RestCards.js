const Restcard=(props)=>{
    const {resdata}= props;
    //console.log(resdata);
    return (
        <div className="restcard">
           <img  id="restimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resdata.info.cloudinaryImageId} alt="sorry" />
           <h2>{resdata.info.name}</h2>
           <h4>{resdata.info.cuisines.join(" ")}</h4>
           <h4>{resdata.info.avgRating}⭐</h4>

        </div>
    );
};

export const promRestCard=(Restcard)=>{
    return (props) => {
        
        return (
          <div  className="lable-div">
            <label className="lable">Open</label>
            <Restcard {...props} />
          </div>
        );

     

    }
}

export default Restcard;