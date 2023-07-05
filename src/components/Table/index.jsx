  import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BsXLg } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";


function Cart() {
  const data = useSelector((s) => s.products.products);
  // console.log(data);

  const dispatch = useDispatch();
  const { state } = useLocation();

 
  const handleDel = (id) => {
    dispatch({ type: "DEL_PRODUCTS", payload: { id } });
  };

  function jami () {
    var a=data.forEach(element => {
      var b=Array.from(element.price)
    });
  }
    
    return (
    <div>
      <Table striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Narx</th>
            <th>Kg</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.price * v.kg}$</td>
              <td>{v.kg}kg</td>
              <td>
                <IconButton
                  onClick={() => handleDel(v.id)}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  <BsXLg />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
