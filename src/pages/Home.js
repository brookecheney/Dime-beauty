import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button, } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { StarIcon } from "@chakra-ui/icons";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  const { addItemToCheckout, product } =
    useContext(ShopContext);


  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  console.log(products.totalPrice);
  console.log(products);
  if (!products) return <div>Loading...</div>;
  return (
    <Box>


      <Grid templateColumns={["repeat(2, 2fr)", "repeat(2, 2fr)"]}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id} margin-left="auto">



            <Box
              maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden"
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
              width="240px"
              height="400px"
              borderRadius="20px"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" p="2rem" bottom="24%" w="100%" fontWeight="bold">
                {product.title}
              </Text>


              <Box d="flex" p="1rem" mt="2" alignItems="center" bottom="-6%">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < 3 ? "#2d2d2d" : "#2d2d2d"}
                    />
                  ))}
                <Box as="span" h={8} ml="2" color="#2d2d2d" fontSize="sm">
                  7 reviews


                </Box>

              </Box>
              <Text fontWeight="bold">{product.variants[0].price}</Text>
              <Button

                onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                _hover={{ opacity: "70%" }}
                w="10rem"
                bottom="-7%"
                backgroundColor="#2d2d2d"
                color="white"
              >
                Add To Bundle
              </Button>

            </Box>

          </Link>
        ))}
      </Grid>

    </Box>
  );
};

export default Home;
