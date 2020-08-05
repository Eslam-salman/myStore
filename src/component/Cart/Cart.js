import React,{Component} from 'react';
import {ProductConsumer} from '../../Context';
import Titel from '../titel';
import CartColumn from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals'

class Cart extends Component{
    render(){
        return(
            <section>
                <div className="py-5">
                   <div className="container">
                <ProductConsumer>
                    {value=>{
                        const{cart}=value.obj;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                   <Titel name="your" titel="cart"/>
                                  <CartColumn/>
                                  <CartList value={value}/>
                                   <CartTotals value={value} history={this.props.history}/>
                                </React.Fragment>
                                
                            );
                        }
                        else{
                            return(
                                <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>
                
                </div></div>
            </section>
        )
    }
   
}
export default Cart;