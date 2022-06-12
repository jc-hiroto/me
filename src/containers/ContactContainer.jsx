import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  useMediaQuery,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../components/SectionTitle";
import jcMemojiCallMe from "../img/jc_memoji_call_me.png"

const ContactContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="space-evenly" alignItems="center" flexDirection="column">
      <Flex w="100%" pl={["8vw"]} justifyContent="start" alignItems="center" flexDirection="row">
        <SectionTitle base="Contact" sup="💬" animate/>
      </Flex>
      <Flex justifyContent="center" alignItems="end" flexDirection="column">
        <Parallax translateY={[100,-40]}>
          <Image src={jcMemojiCallMe} alt='JC call me memoji' boxSize={['128px','128px','200px']}/>
        </Parallax>
        <Flex p="8" mb="40" w={["80vw","80vw","40vw"]} justifyContent="center" alignItems="start" flexDirection="column" bg={useColorModeValue("gray.50", "gray.800")}  borderRadius="lg" boxShadow="2xl" zIndex="100"> 
        <Flex w="100%" my="2" justifyContent="space-between" flexWrap="wrap" gap="2">
            <Text fontSize={["lg","3xl"]} fontWeight="600" color={useColorModeValue("gray.700", "gray.300")}>💻  For my coding works... </Text>
            <Button mt={isMobile? "2":"0"} size={isMobile? "md":"lg"} leftIcon={<FaGithub/>} color="white" bg="gray.700" _hover={{bg: "gray.200", color:"gray.600"}} onClick={() => window.open("https://github.com/jc-hiroto", "_blank")}>GitHub</Button>
          </Flex>
          <Divider my="8" borderColor={useColorModeValue("gray.300", "gray.700")} />
          <Flex w="100%" my="2" justifyContent="space-between" flexWrap="wrap" gap="2">
            <Text fontSize={["lg","3xl"]} fontWeight="600" color={useColorModeValue("gray.700", "gray.300")} >💼  For career opportunities... </Text>
            <Button mt={isMobile? "2":"0"} size={isMobile? "md":"lg"} leftIcon={<FaLinkedin/>} color="white" bg="blue.600" _hover={{bg: "gray.200", color:"gray.600"}} onClick={() => window.open("https://www.linkedin.com/in/jc-hiroto/", "_blank")}>LinkedIn</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;