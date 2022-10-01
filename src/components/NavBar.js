import React, { useContext } from "react";
import { Flex, Icon, Image, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { Link } from 'react-router-dom'
import { MdMenu, MdShoppingBasket } from "react-icons/md";

import { ChevronLeftIcon } from '@chakra-ui/icons'

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      backgroundColor="#f3f1ef"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
    >


      <ChevronLeftIcon size="24px" w={30} h={30} />

      <Link to="/"> Add Product</Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
