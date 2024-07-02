import { Card, Image, Flex, Indicator, Button } from "@mantine/core";

import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import {
  IconCircleCheck,
  IconBook2,
  IconHome,
  IconTruckDelivery,
} from "@tabler/icons-react";
import styles from "../../assets/css/Navbar.module.css";
import {Products} from '../Product/Product';

interface Props {
  amount?: number;
}

function Navbar({ amount }: Props) {
  return (
    <Flex
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      className={styles.positioning}
    >
      <Link to="/">
        <Button variant="transparent" color="yellow">
          <IconHome size="28"></IconHome>
        </Button>
      </Link>
      <Button variant="transparent" color="yellow">
        <IconBook2 size="28"></IconBook2>
      </Button>
      <Button variant="transparent" color="yellow">
        <IconCircleCheck size="28"></IconCircleCheck>
      </Button>
      <Link to="/cart">
        <Indicator
          position="top-end"
          label={amount}
          size={16}
        >
          <Button variant="transparent" color="yellow">
            <IconTruckDelivery size="28"></IconTruckDelivery>
          </Button>
        </Indicator>
      </Link>
    </Flex>
  );
}

export default Navbar;
