import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState,useEffect } from "react";
import { Text, Flex, Button, Collapse, Center } from "@mantine/core";
import styles from "../../assets/css/QuantityCounter.module.css";
import { useDisclosure } from "@mantine/hooks";
import {Products} from '../Product/Product';


interface Props {
  product: Products;
}

function QuantityCounter({product}: Props) {
  const [productsInCart, setProductsInCart] = useState<Products[]>([]);

  const [quantity, setQuantity] = useState(0);
  const [opened, handle] = useDisclosure(false);

  useEffect(() => {
    product.crrAmount = quantity;
    console.log(product.crrAmount);
  }, [quantity, product]);
  return (
    <>
   

      {!opened && (
        <Button
          variant="filled"
          color="rgba(255, 255, 255, 1)"
          radius="md"
          size="compact-xs"
          onClick={() => {
            setQuantity(quantity + 1);

            handle.open();
          }} 
          className={styles.defaultButton}
        >
          <IconPlus size="12" stroke="4" color="rgba(255, 66, 66, 0.82)" />
        </Button>
      )}

      <Collapse in={opened} className={styles.collap}>
        <Button
          variant="filled"
          color="rgba(255, 255, 255, 1)"
          radius="md"
          size="compact-xs"
          onClick={() =>
            quantity > 1
              ? setQuantity(quantity - 1)
              : (setQuantity(quantity - 1), handle.close())
          }
          className={styles.buttons}
        >
          <IconMinus size="12" stroke="4" color="rgba(255, 66, 66, 0.82)" />
        </Button>
        <Text c="black" fw={500} className={styles.text}>{quantity}</Text>
        <Button
          variant="filled"
          color="rgba(255, 255, 255, 1)"
          radius="md"
          size="compact-xs"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          className={styles.buttons}
        >
          <IconPlus size="12" stroke="4" color="rgba(255, 66, 66, 0.82)" />
        </Button>
      </Collapse>
    </>
  );
}

export default QuantityCounter;
