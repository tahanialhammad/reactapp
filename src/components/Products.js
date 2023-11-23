import React, { Component } from "react";
import ProductItem from "./ProductItem";
import productsInfo from "./productsInfo";

class Products extends Component {

  constructor() {
    super();
    this.state = { 
       productsInfo : productsInfo,
       products : [],
       counter : 0
      }

      //conenct event
      this.showMoreProductEvent = this.showMoreProductEvent.bind(this);
    }

    showMoreProductEvent(){
      // console.log(productsInfo); //retern all array
      if(this.state.counter < this.state.productsInfo.length){
        this.state.products.push(this.state.productsInfo[this.state.counter]);
        this.setState(function(prevState){
          return {counter : prevState.counter +1}
        });
     // console.log(this.state.products);
      
      this.newProducts = this.state.products.map(product => {
          return <ProductItem 
          key = {product.id}
          title ={product.title}
          img={product.img}
          price={product.price}
        />
        })
      }



    }

    mapping(x){
      const products = x.map(product => <ProductItem 
        key = {product.id}
        title ={product.title}
        img={product.img}
        price={product.price}
      />);
      return products;
    }

  render() {
    return (
      <div>
        <h1 className="text-center font-bold"> Our Products</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
            {/* {this.mapping(this.state.productsInfo)} */}

            {/* {this.newProducts} */}
        </div>

        <div className="text-center mt-8">
              <button onClick={this.showMoreProductEvents}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Show more</button>

                {this.newProducts}
        </div>
      </div>
    );
  }
}
export default Products;
