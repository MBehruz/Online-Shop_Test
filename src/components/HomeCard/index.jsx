import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import data from "../../database/index.json";
import { useNavigate } from "react-router-dom";

export default () => {
  const products = data.product;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const sotak = (id) => {
    navigate("productCard", {state:{productId:id }})
  };


  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: -45,
        }}
      >
        {products.map((val, index) => (
          <Card key={index} sx={{ maxWidth: 320, marginTop: 5 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={val.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                oncl
                style={{
                  color: "black",
                  border: "1px solid black",
                  left: 100,
                }}
                onClick={() => sotak(val)}
                size="medium"
                color="primary"
              >
                Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </Row>
    </div>
  );
};
