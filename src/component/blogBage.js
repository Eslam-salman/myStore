import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

import { withStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    display: "flex",
    minHeight: 300,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 500,
  },
});
class BlogBage extends Component {

  renderselected=()=>{
    const { classes } = this.props;
    const { id,title, img, info } = this.props.item;
    const{index}=this.props;
    return (
      
      <div className="col-12 mx-auto my-3  ">
        <ProductConsumer>
          {(value) => {
            if(id===index){
            
              return(
               
               
                  <div >
                      <div className="baground">
            <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  {info}
                </Typography>
              </CardContent>
            </div>
            <CardMedia className={classes.cover}  component="img" image={img} title={title} />
          </Card></div>
                    </div> 
                   
                   
              )
            }else{
              return null;
            }
          }}
            </ProductConsumer>
      </div>
    );

  }
  renderlist=()=>{
    const { classes } = this.props;
    const { id,title, img, info } = this.props.item;
    const{index}=this.props;
    return (
      
      <div className="col-12 mx-auto my-3  ">
        <ProductConsumer>
          {(value) => {
            if(id!==index){
            
              return(
               
               
                  <div >
                      <div>
            <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  {info}
                </Typography>
              </CardContent>
            </div>
            <CardMedia className={classes.cover} image={img} title={title} />
          </Card></div>
                    </div> 
                   
                   
              )
            }else{
              return null;
            }
          }}
            </ProductConsumer>
      </div>
    );

  }
  
  render() {
    const{index}=this.props;
   return(
     
     <div>

{index?this.renderselected():this.renderlist()}

     </div>
   
     
   )
}
}
export default withStyles(styles)(BlogBage);
