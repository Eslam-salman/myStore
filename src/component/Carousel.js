import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';


const CarouselPage = () => {
  return (
      
    <Container>
        <Paper className="text-caption bground p-4">
    <MDBContainer >
      <MDBCarousel 
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner  style={{height:"20rem"}}   className=" w-100 ">
        <MDBCarouselItem itemId="1" >
          <MDBView  >
            <img
              className="d-block w-100 card-img-top "
              src="img/adv-6.jpg"
              alt="First slide"
              style={{height:"20rem" }}
            />
          <MDBMask  overlay="black-light " />
          </MDBView>
          <MDBCarouselCaption  className="text-caption">
            <h3 className="h3-responsive">Transparent Smartphone</h3>
            <p>A transparent smartphone with multi touch display is amazing where the future of smartphones is going.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100 card-img-top"
              src="img/adv-7.jpg"
              alt="Second slide"
              style={{height:"20rem"}}
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="text-caption">
            <h3 className="h3-responsive">Transparent Smartphone</h3>
            <p>with micro sim card with microphone and batteries just like a regular smartphone</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100 card-img-top"
              src="img/adv-.jpg"
              alt="Third slide"
              style={{height:"20rem"}}
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption className="text-caption">
            <h3 className="h3-responsive">Transparent Smartphone</h3>
            <p>Everything from movies like the Iron Man 2 is coming to reality in a fast pace.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </Paper> </Container>
  );
}

export default CarouselPage;
const Container=styled.div`
margin:2rem; background: var(--mainWhite) !important;


 `