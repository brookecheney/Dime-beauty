import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image, Button, } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { StarIcon } from "@chakra-ui/icons";
import "../components/Footer.css"
import myImage from '../components/progressbar.png'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
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
    <body>
      <main>
        <Box ml={5}>
          <Grid templateColumns={["repeat(2, 2fr)", "repeat(2, 2fr)"]}>
            {products.map((product) => (
              <Link m={2} p="2rem" to={`/products/${product.handle}`} key={product.id} margin-left="auto">
                <Box
                  m={2}
                  boxShadow="lg"
                  maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden"
                  _hover={{ opacity: "80%" }}
                  textAlign="left"
                  position="relative"
                  width="200px"
                  height="340px"
                  borderRadius="20px"
                >
                  <Image src={product.images[0].src} />
                  <Text textAlign="left" ml={1} w="100%" fontWeight="bold">
                    {product.title}
                  </Text>
                  <Box d="flex" p=".5rem" alignItems="center">
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
                    <Text fontWeight="bold">${product.variants[0].price}</Text>
                  </Box>
                  <Button
                    onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                    _hover={{ opacity: "70%" }}
                    w="10rem"
                    ml={4}

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
      </main>
      <footer class="footer">
        <h1 class="h1-1">Add $100 to save 10%</h1>
        <Image src={myImage} class="image" />
      </footer>
    </body>
  );
};

export default Home;
