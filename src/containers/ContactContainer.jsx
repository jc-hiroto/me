import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaBook } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import SectionTitle from "../components/SectionTitle";
import jcMemojiCallMe from "../img/jc_memoji_call_me.png"

const ContactContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  return(
    <Flex id={name} w="100%" pt="5vh" justifyContent="space-evenly" alignItems="center" flexDirection="column">
      <Flex w="100%" pl={["8vw"]} justifyContent="start" alignItems="center" flexDirection="row">
        <SectionTitle base="Contact" sup="💬"/>
      </Flex>
      <Flex justifyContent="center" alignItems="end" flexDirection="column">
        <Parallax translateY={isMobile ? [100,-30]:[100,-80]}>
          <Image src={jcMemojiCallMe} alt='JC call me memoji' boxSize={['128px','128px','200px']}/>
        </Parallax>
        <Flex p="8" mb="40" w={["85vw","85vw","60vw"]} justifyContent="center" alignItems="start" flexDirection="column" bg={useColorModeValue("gray.50", "#111111")}  borderRadius="xl" boxShadow="xl" zIndex="100"> 
          <Flex w="100%" my="1" justifyContent="space-between" flexWrap="wrap" gap="1">
            <Text fontSize={["lg","3xl"]} fontWeight="600" color={useColorModeValue("gray.700", "gray.300")}>✏️  For posts and photography... </Text>
            <Button mt={isMobile? "2":"0"} size={isMobile? "md":"lg"} leftIcon={<FaBook/>} color="gray.700" bg="gray.300" _hover={{bg: "gray.700", color:"gray.200"}} onClick={() => window.open("https://blog.jchiroto.dev/", "_blank")}>Blog</Button>
          </Flex>
          <Divider my="8" borderColor={useColorModeValue("gray.300", "gray.700")} />
          <Flex w="100%" my="1" justifyContent="space-between" flexWrap="wrap" gap="1">
            <Text fontSize={["lg","3xl"]} fontWeight="600" color={useColorModeValue("gray.700", "gray.300")}>💻  For coding works... </Text>
            <Button mt={isMobile? "2":"0"} size={isMobile? "md":"lg"} leftIcon={<FaGithub/>} color="white" bg="gray.700" _hover={{bg: "gray.200", color:"gray.600"}} onClick={() => window.open("github", "_blank")}>GitHub</Button>
          </Flex>
          <Divider my="8" borderColor={useColorModeValue("gray.300", "gray.700")} />
          <Flex w="100%" my="1" justifyContent="space-between" flexWrap="wrap" gap="1">
            <Text fontSize={["lg","3xl"]} fontWeight="600" color={useColorModeValue("gray.700", "gray.300")} >💼  For career opportunities... </Text>
            <Button mt={isMobile? "2":"0"} size={isMobile? "md":"lg"} leftIcon={<FaLinkedin/>} color="white" bg="blue.600" _hover={{bg: "gray.200", color:"blue.600"}} onClick={() => window.open("linkedin", "_blank")}>LinkedIn</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;