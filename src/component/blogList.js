import React,{Component} from 'react';
import Blog from './blog';
import Titel from './titel';
import {ProductConsumer} from '../Context';
class BlogList extends Component{
    
    render(){
        return(
           <React.Fragment>
               <div className="py-5 ">
                   <div className="container">
                       <Titel name="Latest" titel="Articles"/>
                       <div className="row">
                           <ProductConsumer>
                               {value=>{
                                   console.log(value.obj.Blogs)
                                return value.obj.Blogs.map(items=>{
                                    if(items.id<4)
                                        { return < Blog key={items.id} item={items}/>;}
                                        
                                     
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
export default BlogList;