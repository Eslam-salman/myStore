import React,{Component} from 'react';
import Product from './Product';
import Titel from './titel';
import {ProductConsumer} from '../Context';
class ProductList extends Component{
    
    render(){
        return(
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                       <Titel name="Best" titel="Offers"/>
                       <div className="row">
                           <ProductConsumer>
                               {value=>{
                                return value.obj.Products.map(items=>{
                                    if(items.id<7){return <Product key={items.id} item={items}/>;}
                                        
                                       
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
export default ProductList;