import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Grid,
  Flex,
  Image,
  Link,
  Box
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  console.log(checkout)
  console.log(checkout.totalPrice)
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? checkout.lineItems.map((item) => (
              <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                <Flex alignItems="center" justifyContent="center">
                  <CloseIcon cursor="pointer" onClick={() => removeLineItem(item.id)} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Image src={item.variant.image.src} />
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Text>{item.title}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Text>{item.quantity}</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Text>{item.variant.price}</Text>
                </Flex>

              </Grid>
            )) :
              <Box h="100%" w="100%">
                <Text h="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                  Your Cart is empty!
                </Text>
              </Box>
            }


          </DrawerBody>

          {checkout.lineItems?.length ?
            <DrawerFooter>
 {checkout.totalPrice > 100.00 ? (
                  <Text>Total: {checkout.totalPrice - (checkout.totalPrice * .1)}</Text>
                ) : (
                  <Text>Total: {checkout.totalPrice}</Text>
                )}


              <Button w="100%">
                <Link
                  href={checkout.webUrl}>
                  Checkout
                </Link>
              </Button>
            </DrawerFooter> : null
          }

        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
