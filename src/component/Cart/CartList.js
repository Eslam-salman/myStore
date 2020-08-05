import React from 'react';
import CartItem from './CartItem';
export default function CartList(Props){
    const{cart}=Props.value.obj;
    return(
        <div className="continer-fluid">
            {cart.map(item=>{
                return(<CartItem key={item.id} item={item}value={Props.value}/>);
            })}
           
        </div>
       
    );

        }