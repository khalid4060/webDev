import React from "react";
class Profile extends React.Component{
   constructor(props){
    super()
    console.log(props)
    this.state={
        count:0,
        count2:1,
        api:{}
    }
   }
  async componentDidMount(){

    const data=await fetch("https://mocki.io/v1/c217286a-7891-4fad-88a5-ae82b4ff2014");
    const json=await data.json();

    console.log(json)

    this.setState({
        api:json

    })

   }
   
    render(){
        return(
         <div>
            {console.log(this.props)}

            <h1>Name:{this.state.api.name}</h1>
            <h2>location:{this.state.api.location}</h2>
            <h3>{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>counter</button>
         </div>   
        );
    }
}
export default Profile;