import React,{Component} from 'react';
import Product from './Product';
import Titel from './titel';
import {ProductConsumer} from '../Context';
class Shop extends Component{
    
    render(){
        return(
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Titel name="our" titel="product"/>
                       <div className="row">
                           <ProductConsumer>
                               {value=>{
                                return value.obj.Products.map(items=>{
                                   return <Product key={items.id} item={items}/>;
                                        
                                       
                                   });

                               }}
                           </ProductConsumer>

                       </div>
                   </div>
               </div>

           </React.Fragment>
            //
           
        )
    }
   
}
export default Shop;