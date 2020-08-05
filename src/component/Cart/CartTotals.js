import React from 'react';
import{Link} from 'react-router-dom';
import Paypalbutton from './paypalbutton';
export default function CartTotals(Props){
    const{cartsubtotal,carttax,carttotal}=Props.value.obj;
    const{clearAll}=Props.value;
    const history=Props.history;
   return(
       <React.Fragment>
           <div className="container py-5">
               <div className="row">
                   <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                       <Link to='/'>
                           <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                           onClick={()=>clearAll()}>
                               clear cart
                           </button>
                       </Link>
                       <h5>
                           <span className="Text-titlel">
                               subtotal:
                           </span>
                           <strong>
                                  ${cartsubtotal}
                               </strong>
                       </h5>
                       <h5>
                           <span className="Text-titlel">
                               tax:
                           </span>
                           <strong>
                                  ${carttax}
                               </strong>
                       </h5>
                       <h5>
                           <span className="Text-titlel">
                              total:
                           </span>
                           <strong>
                                  ${carttotal}
                               </strong>
                       </h5>
                       <Paypalbutton total={carttotal} history={history} clearAll={clearAll}/>
                   </div>

               </div>
           </div>
       </React.Fragment>
   )
}