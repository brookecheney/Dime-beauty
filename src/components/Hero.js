import React from "react";
import { Box, Button, Text, Image, Center } from "@chakra-ui/react";
import myImage from "./blackbow_2.png";
const Hero = () => {
  return (
    <Box backgroundColor="#8F00FF" w="100%" position="relative" h="90vh">
      <Image
        src={myImage}
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />

      <Text
      position="absolute"
      bottom="20%"
      w="100%"
      textAlign="center"
      color="white"
      fontWeight="bold"
      fontSize="4rem"

      >Introducing Brookies Bows</Text>
      <Center>
        <Button
        w="10rem" backgroundColor="#FF38BD" color="white"
        _hover={{ opacity: "70%" }} position="absolute" bottom="10%"
        >
            Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
