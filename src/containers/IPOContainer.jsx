import { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Image,
  HStack,
  useColorModeValue,
  Link,
  Button,
  Icon,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { SiZoom } from "react-icons/si";


function IPOContainer() {
  
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start" bg={useColorModeValue("white", "gray.900")}>
      <Flex w="100%" h="95vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize={["4xl","6xl"]} fontWeight="700" color={useColorModeValue("gray.600", "gray.200")} my="10">
          🚀 IPO Plan
        </Text>
        <HStack>
          <Button 
            colorScheme="blue"
            variant="solid"
            size="lg"
            leftIcon={<Icon as={SiZoom} boxSize="16"/>}
            onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
          >
            Meeting Invitation
          </Button>
          <Button 
            colorScheme="blue"
            variant="outline"
            size="lg"
            onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
          >
            Learn More
          </Button>
          
        </HStack>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default IPOContainer;
