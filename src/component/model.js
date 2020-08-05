import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import { ButttonCntainer } from "./Navstyle.js";
class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modelopen, closemodel } = value.obj;
          const { img, title, price } = value.obj.modelprodact;
          if (!modelopen) {
            return null;
          } else {
            return (
              <Modelcontainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-capitalize text-center "
                    >
                      <h5>item add to the cart</h5>
                      <img src={img} alt="product" className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price :${price}</h5>
                      <Link to="/">
                        <ButttonCntainer
                          cancel
                          onClick={() => value.closemodel()}
                        >
                          Close
                        </ButttonCntainer>
                      </Link>
                      <Link to="/cart">
                        <ButttonCntainer
                          cart
                          onClick={() => value.closemodel()}
                        >
                          Add to cart
                        </ButttonCntainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </Modelcontainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
export default Model;
const Modelcontainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flix;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
