import React, { Component } from 'react'
import { Link} from 'react-router-dom'

export  default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Token:"true"
        };
      }
    
    
    createNewItem=()=>{
        //  console.log('localStorage.setItem',localStorage.getItem("token"));
         if (!!localStorage.getItem("token")){
           this.setState({Token:"true"})
         }else{
          this.setState({Token:"false"})
         }
          
        }
   
    render() {

        return(
            <div className="container">
<div className="search ">
    <input type="text" placeholder="search"/>
    <input type="submit"/>

</div>


                <div className="div_img">
            <img  className="img" src=" http://arabic.streetsportmotorcycles.com/photo/pl17830979-bike_gasoline_engine_gasoline_motor_bike_kit_125cc_150cc_cheap_gas_scooter_for_sale_blue_plastic_body.jpg"/> 
           <img className="img" src= "https://cdn.al-ain.com/images/2020/2/16/102-103623-a-new-nikon-camer_700x400.jpg"/>
           <Link className="link" to="/add">
           <button className="btn" onClick={this.createNewItem} token={this.state.Token}>Add item</button>
           </Link>
           </div>
           </div>
        )
    }
}


