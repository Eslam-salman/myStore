import React, { Component } from "react";
import { storeProducts, detailProduct, blog } from "./data";
import $ from "jquery";
const ProviderContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Products: [],
    detailProduct: detailProduct,
    Blogs: [],
    cart: [],
    modelopen: false,
    modelprodact: detailProduct,
    cartsubtotal: 0,
    carttax: 0,
    carttotal: 0,
    currentScroll: 0,
  };
  componentDidMount() {
    this.setProduct();
    this.setBlog();
    console.log(this.state.Products);
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      tempProduct.push(item);
    });
    this.setState({
      Products: tempProduct,
    });
  };
  setBlog = () => {
    let tempBlog = [];
    blog.forEach((item) => {
      tempBlog.push(item);
    });
    this.setState({
      Blogs: tempBlog,
    });
  };

  getProduct = (id) => {
    const details = this.state.Products.find((item) => item.id === id);
    return details;
  };
  handelDetails = (id) => {
    const details = this.getProduct(id);

    this.setState({
      detailProduct: details,
    });
  };
  addToCart = (id) => {
    const temp = this.state.Products;
    const index = temp.indexOf(this.getProduct(id));
    const tempcart = temp[index];
    tempcart.inCart = true;
    tempcart.count = 1;
    const temprice = tempcart.price;
    tempcart.total = temprice;
    console.log(tempcart);

    this.state.cart.push(temp[index]);

    this.setState({
      Products: temp,
    });
    this.addtotal();
  };
  lockscroll = () => {
    $(window).scrollTop(this.state.currentScroll);
  };
  closemodel = () => {
    this.setState({
      currentScroll: $(window).scrollTop(),
    });
    //currentScroll=$(window).scrollTop();
    $(window).unbind("scroll");
    this.setState({
      modelopen: false,
    });
  };
  openmodel = (id) => {
    this.setState({
      currentScroll: $(window).scrollTop(),
    });
    //currentScroll=$(window).scrollTop();
    $(window).bind("scroll", this.lockscroll);
    const product = this.getProduct(id);
    this.setState({
      modelprodact: product,
      modelopen: true,
    });
  };
  increment = (id) => {
    let tempCart = this.state.cart;
    const index = tempCart.indexOf(this.getProduct(id));
    const selectedCart = tempCart[index];
    selectedCart.count += 1;
    selectedCart.total = selectedCart.count * selectedCart.price;
    this.setState({
      cart: tempCart,
    });
    this.addtotal();
  };
  decrement = (id) => {
    let tempCart = this.state.cart;
    const index = tempCart.indexOf(this.getProduct(id));
    const selectedCart = tempCart[index];
    selectedCart.count -= 1;
    if (selectedCart.count === 0) {
      this.removeItem(id);
    } else {
      selectedCart.total = selectedCart.count * selectedCart.price;
      this.setState({
        cart: tempCart,
      });
      this.addtotal();
    }
  };
  removeItem = (id) => {
    let tempProduct = this.state.Products;
    let tempCart = this.state.cart;
    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProduct.indexOf(this.getProduct(id));
    const removedProduct = tempProduct[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState({
      cart: tempCart,
      Products: tempProduct,
    });
    this.addtotal();
  };
  clearAll = () => {
    let tempProduct = [];
    storeProducts.forEach((item) => {
      item.total = 0;
      item.inCart = false;
      item.count = 0;
      tempProduct.push(item);
    });
    this.setState({
      cart: [],
      Products: tempProduct,
      cartsubtotal: 0,
      carttax: 0,
      carttotal: 0,
    });
  };
  addtotal = () => {
    let subtotal = 0;
    this.state.cart.map((item) => {
      subtotal += item.total;
    });
    const temptax = subtotal * 0.1;
    const tax = parseFloat(temptax.toFixed(2));
    const total = subtotal + tax;
    this.setState({
      cartsubtotal: subtotal,
      carttax: tax,
      carttotal: total,
    });
  };

  render() {
    return (
      <ProviderContext.Provider
        value={{
          obj: this.state,
          handelDetails: this.handelDetails,
          addToCart: this.addToCart,
          openmodel: this.openmodel,
          closemodel: this.closemodel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearAll: this.clearAll,
        }}
      >
        {this.props.children}
      </ProviderContext.Provider>
    );
  }
}
export const ProductConsumer = ProviderContext.Consumer;
export default ProductProvider;
