import React, { useContext } from "react";
import { Flex, Icon, Image, Box, Badge, Text } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import { Link } from 'react-router-dom'
import { MdMenu, MdShoppingBasket } from "react-icons/md";
import "./Footer.css"
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
      <Link to="/"><Text class="header-text" fontWeight="bold" size="29px"> Add Product</Text></Link>
      <Box>
        <Icon
          fill="#f3f1ef"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
      </Box>
    </Flex>
  );
};

export default NavBar;
