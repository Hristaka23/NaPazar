import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import { useState, createContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import Navbar from "../components/NavBar/Navbar";
import { Table } from "@mantine/core";
import { Products } from "../components/Product/Product";

interface Props {
  products?: Products[];
}

function Cart({ products }: Props) {
  return (
    <>
      {/* <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Product</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
        
          {products?.map((product) => (
            <Table.Tr>
              <Table.Td>{product.title}</Table.Td>
              <Table.Td>{product.crrAmount}</Table.Td>
              
              <Table.Td>{product.price}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table> */}
      {/* {products?.map((product) => (
       
              {product.title}
              {product.crrAmount}
        
             {product.price}
        
          ))} */}
      <Navbar></Navbar>
    </>
  );
}

export default Cart;
