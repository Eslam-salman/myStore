import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Blog extends Component {
 
  render() {
    const {id,title, img, info } = this.props.item;
    return (
      <div className="col-12 mx-auto my-3 col-md-6 col-lg-4 col-sm-12 ">
        <ProductConsumer>
          {(value) => (
           
             <Link  to={{ pathname: `/blog/${id}`, state:id }}
              className={`card-wrapper restore-${id}`}
            >
            <Card 
            style={{ height: "140" }}>
              <div className="img-container p-5">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={img}
                    title="Contemplative Reptile"
                    height="140"
                  />
                  <CardContent style={{ height: "310px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {info}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            </Card> </Link>
          )}
        </ProductConsumer>
      </div>
    );
  }
}
export default Blog;
