import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import jcMemojiCallMe from "../img/jc_memoji_call_me.png"

const ContactContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="space-evenly" alignItems="center" flexDirection="row" flexWrap="wrap" gap="2">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <SectionTitle base="contact" sup="me" />
      </Flex>
      <Flex justifyContent="center" alignItems="end" flexDirection="column">
        <Image src={jcMemojiCallMe} alt='JC call me memoji' boxSize={['128px','128px','200px']}/>
        <Flex p="8" w={["80vw","80vw","40vw"]} justifyContent="center" alignItems="start" flexDirection="column" bg="gray.200" borderRadius="lg" boxShadow="xl">
        <Flex w="100%" my="2" justifyContent="space-between" flexWrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">💻 For my coding works... </Text>
            <Button size={isMobile? "sm":"md"} leftIcon={<FaGithub/>} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open("https://github.com/jc-hiroto", "_blank")}>GitHub</Button>
          </Flex>
          <Divider my="8" borderColor="gray.400"/>
          <Flex w="100%" my="2" justifyContent="space-between" flexWrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">📸 For my photo creations... </Text>
            <HStack>
              <Button size={isMobile? "sm":"md"} leftIcon={<FaInstagram/>} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open("https://www.instagram.com/jc_hiroto/", "_blank")}>Instagram</Button>
            </HStack>
          </Flex>
          <Divider my="8" borderColor="gray.400"/>
          <Flex w="100%" my="2" justifyContent="space-between" flexWrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">💼 For career opportunities... </Text>
              <Button size={isMobile? "sm":"md"} leftIcon={<FaLinkedin/>} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open("https://www.linkedin.com/in/jc-hiroto/", "_blank")}>LinkedIn</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;