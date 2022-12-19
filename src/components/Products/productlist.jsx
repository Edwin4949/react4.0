
import axios from "axios";
import { Component } from "react";


class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }
    handleApi = () => {
       
        axios 
        .get("https://team3-step-dev-ed.develop.my.salesforce.com/services/apexrest/getbooklist", 
        { headers: {"Authorization" : `Bearer 00DDo000000JB9H!ARkAQARRwKmBENoVsNXQLTyEtqnmHlIfBEX1sXJeGx4q4EmZBI0s0.ZVz4AJAGYtbuNVX7kW0pI4pOUb1EKZLh784d3w3A12`} })
        .then ((Response) => {
            
            this.setState({

                books:Response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
    render(){
    {
        this.handleApi();
    }
    const item= this.state.books.map((item) => {
        return(
            <div className="div-style">
            <img className="image" style={{width:100}} src ={item.image} alt=""></img>
            <p>{item.title} </p>
            <h3 style={{ color: "red" }}> {item.price}</h3>
            </div>
        );
    });
    return(
        <body>
            <div>
              {item}
            </div>
        </body>
    );
}
   
}
   
export default ProductList;

             