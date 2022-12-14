import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
import { Progress } from "@chakra-ui/react";
import "./Footer.css"
import myImage from './progressbar.png'
function Footer() {
    return (
        <footer class="footer">
            <h1 class="h1-1">Add $100 to save 10%</h1>
            <Image src={myImage} class="image" />
        </footer>
    )
}

export default Footer
