import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import PropTypes from 'prop-types'
class Product extends Component{
    
    render(){
        const{id,title,img,price,inCart}=this.props.item;
        return(
            <Productwrapper className="col-12 mx-auto my-3 col-md-6 col-lg-4 col-sm-12 ">
            <div className="card">
            <ProductConsumer>
                {value=>(
                    
                    <div className="img-container p-5" onClick= {()=>value.handelDetails(id)} >
                    <Link to='details'>
                    <img src={img}  alt ="product" className="card-img-top" />
                    </Link>
                    <button className="card-btn " disabled={inCart?true:false}
                     onClick={()=>{
                        value.addToCart(id);
                        value.openmodel(id);}

                     }> 
                       {inCart?(<p className="capitalize mb-0" disabled> {" "}in cart</p>)
                       :(<i className="fas fa-cart-plus"/>)}
                     </button>
                </div>

                )
                   
                }
              
               </ProductConsumer>
                        {/*card footer*/}
                 <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>  
                    <h5 className="text-blue font-italic mb-0">
                      <span className="mr-1">$</span> 
                      {price}
                    </h5>
                </div>
            </div>
            </Productwrapper>
        )
    }
   
}
export default Product;
{/*to cach the type*/}
Product.propTypes={
    item:PropTypes.shape(
        {
            id:PropTypes.number,
            title:PropTypes.string,
            img:PropTypes.string,
            price:PropTypes.number,
            inCart:PropTypes.bool,
            

        }
    ).isRequired
};
const Productwrapper=styled.div`
 .card{
     border-color:transparent;
     transition:all 1s linear;

 }
 .card-footer{
     background:transparent;
     border-top:transparent;
     transition:all 1s linear;

 }
 &:hover{
     .card{
         border:0.04rem solid rgba(0,0,0,0.2);
         box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2);
     }
     .card-footer{
         background:rgb(247,247,247);
     }
 }
 .img-container{
     position:relative;
     overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;   
}

    .img-container:hover .card-img-top{
       transform: scale(1.2);
        }
    
 .card-btn{
     position :absolute;
     bottom:0px;
     right:0px;
     padding:0.2rem 0.4rem;
     background:var(--lightBlue);
     color:var(--mainWhite);
     border:none;
     font-size:1.4rem;
     border-radius:0.5rem 0 0 0;
     transform: translate(100%,100%);
     transition:all 1s linear; 
     &:hover{
        color:var(--mainBlue); 
        curser:pointer;
     } 
 }
 .img-container:hover .card-btn{
    transform: translate(0,0);
     }


`;