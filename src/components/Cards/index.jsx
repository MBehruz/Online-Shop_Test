import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import data from "../../database/index.json";
import { useLocation } from "react-router-dom";

export default () => {
  // const products = data.product;
  const dispatch = useDispatch();
  const [kg, setKg] = useState(0);

  const { state } = useLocation();
  console.log("state => ", state);

  const Kilogramm = useSelector((state) => state.products.kg);
  const Name = useSelector((state) => state.products.name);
  const Price = useSelector((state) => state.products.price);

  const handleAddCart = (product) => {
    dispatch({
      type: "ADD_PRODUCTS",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        kg: Kilogramm,
      },
    });
  };

  const handleIncKg = () => {
    dispatch({
      type: "INC",
    });
  };

  const handleDecKg = () => {
    dispatch({
      type: "DEC",
    });
  };

  // console.log("state => syasxcjasnxasjnxj", state);

  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: -45,
        }}
      >
        <Card sx={{ width: "50%", ml: "25%", mt: "10%" }}>
          <CardActionArea
            sx={{
              display: "flex",
              flexDecoration: "row",
              justifyContent: "start",
            }}
          >
            <CardMedia
              style={{
                width: "300px",
                height: "400px",
                display: "inline-block",
              }}
              component="img"
              image={state.productId.img}
              alt="green iguana"
            />
            {/* {console.log(state.productId.img)} */}

            <CardContent style={{ display: "inline-block" }}>
              <Typography gutterBottom variant="h5" component="div">
                {state.productId.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ width: "100%" }}
              >
                {state.productId.description}
              </Typography>
              <CardActions sx={{mt:5}}>
                <button
                  style={{
                    // opacity: 0.7,
                    backgroundColor: "black",
                    width: 30,
                    color: "white",
                    border: "black",
                  }}
                  onClick={handleDecKg}
                >
                  -
                </button>
                <button
                  style={{
                    backgroundColor: "white",
                    width: 30,
                    color: "black",
                    border: "white",
                  }}
                  size="large"
                >
                  {Kilogramm}
                </button>
                <button
                  style={{
                    backgroundColor: "black",
                    width: 30,
                    color: "white",
                    border: "black",
                  }}
                  onClick={handleIncKg}
                  variant="contained"
                  size="large"
                >
                  +
                </button>
                <Button
                  style={{
                    color: "black",
                    border: "1px solid black",
                    left: 100,
                  }}
                  onClick={() => handleAddCart(state.productId)}
                  size="medium"
                  color="primary"
                >
                  Add
                </Button>
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      </Row>
    </div>
  );
};
