
import {SunIcon } from '@chakra-ui/icons'
import { Flex, Box, Spacer} from '@chakra-ui/react'
import React from 'react'


const CartWidget = () => {
  return (
    <Flex>
      <Box>
        <SunIcon/>
      </Box>
      <Spacer/>
      <Box>
        <p>5</p>
      </Box>  
    </Flex>
  )
}

export default CartWidget