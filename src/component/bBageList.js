import React,{Component} from 'react';
import BlogBage from './blogBage';
import Titel from './titel';
import {ProductConsumer} from '../Context';
class bBlogList extends Component{
    
    render(){
          
       
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Titel name="" titel="Blog"/>
                        <div className="row">
                            <ProductConsumer>
                            
                                {value=>{
                                
                                  if(this.props.match.params.id){
                                     var id=this.props.match.params.id;
                                     var len = id.length;
                                     var indexPos = len -1;
                                     var index= Number(id.substring(indexPos)) ;
                                     return value.obj.Blogs.map(items=>{
                                 
                                         return < BlogBage key={items.id} index={index} item={items}/>;
                                     
                                  
                                              
                                                 
                                                
                                            });
                                  
                                  }
                                  else{
                                     return value.obj.Blogs.map(items=>{
                                 
                                         return < BlogBage key={items.id} item={items}/>;
                                     
                                  
                                              
                                                 
                                                
                                            });
                                  
                                  }
                                   
                                
                                 
 
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
export default bBlogList;