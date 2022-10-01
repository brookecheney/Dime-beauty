import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
import { Progress } from "@chakra-ui/react";
import "./Footer.css"
import myImage from './progressbar.png'
function Footer() {
  return (
    <Box backgroundColor="#f3f1ef">
         <div class="wrapper">
            <h1 class="h1-1">Add $100 to save 10%</h1>
          <div class="push">

            <Image src={myImage} class="image" />
          </div>
          </div>
      <footer class="footer"></footer>
    </Box>

  
  )
}

export default Footer
