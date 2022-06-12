import {
  Text,
  Flex,
  IconButton,
  Icon,
  HStack,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCodeBranch, FaGithub } from "react-icons/fa"

function Footer() {
  const version = "v1.0 (20220613)"
  const text_color = useColorModeValue("gray.500", "gray.500");
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  if(isMobile) {
    return(
      <Flex w="100%" py="1" px="4" justifyContent="end" alignItems="center" flexDirection="column" >
      <Flex w="100%" my="2" justifyContent="space-between" alignItems="center">
        <Flex spacing={4} flexDirection="column" justifyContent="center" alignItems="start">
          <Text fontSize="10" fontWeight="500" color={text_color} >Copyright © 2022 James Chang. All rights reserved.</Text>
          <HStack mt="1">
            <Icon as={FaCodeBranch} boxSize="2" color={text_color} />
            <Text fontSize="8" fontWeight="500" color={text_color} >{version}</Text>
          </HStack>
        </Flex>
        <IconButton icon={<FaGithub size="1.5em"/>} size="md" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto/me", "_blank")} _focus={{ boxShadow: "none", }}/>
      </Flex>
    </Flex>
    );
  }
  return (
    <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" >
      <HStack>
        <Text mr="4" fontSize="lg" fontWeight="600" color={text_color}>jchiroto.dev</Text>
        <HStack>
          <Icon as={FaCodeBranch} boxSize="3" color={text_color} />
          <Text fontSize="12" fontWeight="500" color={text_color} >{version}</Text>
        </HStack>
      </HStack>
      <HStack spacing={2}>
        <Text fontSize="sm" fontWeight="500" color={text_color} >Copyright © 2022 James Chang. All rights reserved.</Text>
        <IconButton icon={<FaGithub size="1.5em"/>} size="sm" aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto/me", "_blank")} _focus={{ boxShadow: "none", }}/>
      </HStack>
    </Flex>
  );
}

export default Footer;