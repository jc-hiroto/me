import {
  Text,
  Flex,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" >
      <HStack spacing={4}>
      <Text mr="4" fontSize="3xl" fontWeight="700" color="gray.400">me<Text as="sup" style={{fontStyle: "italic"}} fontSize="md" fontWeight="600"> by jc-hiroto</Text></Text>
        <IconButton icon={<FaGithub size="1.5em"/>} size="sm" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto", "_blank")} _focus={{ boxShadow: "none", }}/>
        <IconButton icon={<FaLinkedin size="1.5em"/>} size="sm" aria-label="LinkedIn" variant="ghost" color="gray.500" onClick={() => window.open("https://www.linkedin.com/in/jc-hiroto/", "_blank")} _focus={{ boxShadow: "none", }}/>
        <IconButton icon={<FaFacebook size="1.5em"/>} size="sm" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://www.facebook.com/james.chang.com.tw/", "_blank")} _focus={{ boxShadow: "none", }}/>
      </HStack>
      <HStack spacing={2}>
        <Text fontSize="sm" fontWeight="500" color="gray.400" >Copyright © 2022 James Chang. All rights reserved.</Text>
      </HStack>
    </Flex>
  );
}

export default Footer;