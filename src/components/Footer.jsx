import {
  Text,
  Flex,
  IconButton,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa"

function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  if(isMobile) {
    return(
      <Flex w="100%" h="5vh" pt="24" px="8" justifyContent="end" alignItems="center" flexDirection="column" >
      <Flex w="100%" my="2" justifyContent="space-between" alignItems="center">
        <Text fontSize="10" fontWeight="500" color="gray.400" >Copyright © 2022 James Chang. All rights reserved.</Text>
        <IconButton icon={<FaGithub size="1.5em"/>} size="md" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto/me", "_blank")} _focus={{ boxShadow: "none", }}/>
      </Flex>
    </Flex>
    );
  }
  return (
    <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" >
      <Text mr="4" fontSize="lg" fontWeight="600" color="gray.400">jchiroto.dev</Text>
      <HStack spacing={2}>
        <Text fontSize="sm" fontWeight="500" color="gray.400" >Copyright © 2022 James Chang. All rights reserved.</Text>
        <IconButton icon={<FaGithub size="1.5em"/>} size="sm" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto/me", "_blank")} _focus={{ boxShadow: "none", }}/>
      </HStack>
    </Flex>
  );
}

export default Footer;