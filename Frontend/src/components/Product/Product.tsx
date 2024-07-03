import {
  Card,
  Image,
  Flex,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from "@mantine/core";
import styles from "../../assets/css/Product.module.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import BadgeDiscount from "../BadgeDiscount/BadgeDiscount";

export type Products = {
  id: string;
  title: string;
  price: string;
  image: string;
  crrAmount: number;
};

interface Props {
  height: string;
  radius: number;
  product: Products;
  updateProduct(product: Products): void;
}

function Product({ height, radius, product, updateProduct }: Props) {
  return (
    <Card
      radius="lg"
      padding="0"
      className={styles.card}
      style={{ height: height }}
    >
      <Card.Section>
        <Image src={product.image} h={180} radius={radius} />
        <Flex justify="flex-end" align="center" className={styles.badgeOnImg}>
          <BadgeDiscount />
        </Flex>
        <Flex
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
          className={styles.counterOnImg}
        >
          <QuantityCounter updateProduct={updateProduct} product={product} />
        </Flex>
      </Card.Section>

      <Text className={styles.title} fw={550}>
        {product.title}
      </Text>

      <Text fz="sm" fw={500} ta="left">
        {product.price} лв.
      </Text>
      <Text fz="xs" ta="left" c="dimmed">
        300g.
      </Text>
    </Card>
  );
}

export default Product;
