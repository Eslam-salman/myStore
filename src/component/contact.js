import React,{Component} from 'react';
import Titel from './titel'; 
import styled from 'styled-components';

class Contact extends Component{
    render(){
        return(
          <React.Fragment>
             <div className="py-5">
                   <div className="container">
         <Titel name="Contact" titel="Us"/>
            <ContactSection>
           

                <CForm>
  <div className="form-row  ">
      <Inputtext type="text" className="form-control mr-2 " placeholder="Your Name"/>
      <Inputemail type="email" className="form-control" placeholder="Your Email"/>
  
  </div>
  <div className="form-row">
      <InputSubject type="text" className="form-control  " placeholder="Your Subject"/>
      
  </div>
  <div className="form-row">
  <textarea class="form-control"placeholder="Your Message" rows="10" cols="30" aria-label="With textarea">

  </textarea>
      
  </div>
  
  <div className="form-row my-2  ">
    <Button>
    <button type="button" style={{width:"100%"}} class="btn btn-primary">Send Message </button>
      
    </Button>
  
  </div>
  


  


</CForm>

            </ContactSection></div></div>
            </React.Fragment>
        )
    }
}
export default Contact ;
export const ContactSection= styled.div` 
    padding: 50px 0;
    text-align: center;
    width :100%
    
 `
 export const TitelStyle= styled.div` 
 margin-bottom:10px;
    
 `
 export const Button= styled.div` 
 position: absolute;
  left: 50%;
    
 `
 export const CForm=styled.form` 
    width:70%;
    margin:auto;
    
 `
 
 
export const FInput=styled.input`
    box-sizing: border-box;
    outline:0;
    padding:5px;
    margin-bottom:10px;
 `
 export const Input=styled(FInput)`
 width:49%;
 `
 export const Inputtext=styled(Input)`
    float: left
 `

 export const Inputemail=styled(Input)`
    float: right
 `
 export const InputSubject=styled(Input)`
 width: 100%;
 `
 