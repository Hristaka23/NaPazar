import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import { useState, createContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
import Navbar from "../components/NavBar/Navbar";
import axios from "axios";
import { Products } from "../components/Product/Product";
import Cart from "../pages/Cart";
import { Link } from "react-router-dom";
const PRIMARY_COL_HEIGHT = rem(300);

function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  const [products, setProducts] = useState<Products[]>([]);
  const [amount, setAmount] = useState(0);

  const getAllProductsAmount = (products: Products[]) => {
    const totalAmount = products.reduce(
      (acc, product) => acc + product.crrAmount,
      0
    );
    setAmount(totalAmount);
    console.log("Total amount calculated:", amount);
  };
  const getProducts = async () => {
    try {
      const response = await axios.get<Products[]>(
        "http://localhost:8082/api/products"
      ); // Full URL to your backend
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

    useEffect(() => {
      getAllProductsAmount(products);
    }, [products]);
  return (
    <>
      <Container my="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            {products.map((product) => (
              <Grid.Col span={6}>
                <Product
                  key={product.id}
                  height={rem(250)}
                  radius={10}
                  product={product}
                />
              </Grid.Col>
            ))}
            {products.map((product) => (
              <Grid.Col span={6}>
                <Product
                  key={product.id}
                  height={rem(250)}
                  radius={10}
                  product={product}
                />
              </Grid.Col>
            ))}
          </Grid>
        </SimpleGrid>
      </Container>
      <Navbar amount={amount}></Navbar>
    </>
  );
}

export default Home;
