import {
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaDownload, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import jcMemojiCallMe from "../img/jc_memoji_call_me.png"

const ContactContainer = ({name}) => {
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="space-evenly" alignItems="center" flexDirection="row" flexWrap="wrap" gap="2">
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <SectionTitle base="contact" sup="me" />
      </Flex>
      <Flex justifyContent="center" alignItems="end" flexDirection="column">
        <Image src={jcMemojiCallMe} alt='JC call me memoji' boxSize={['128px','128px','200px']}/>
        <Flex p="8" w={["80vw","80vw","40vw"]} justifyContent="center" alignItems="start" flexDirection="column" bg="gray.200" borderRadius="lg">
          <HStack w="100%" my="2" spacing={4} justify="space-between" wrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">💻 For my coding works... </Text>
            <Button leftIcon={<FaGithub/>} colorScheme="blackAlpha" variant="solid" onClick={() => window.open("https://github.com/jc-hiroto", "_blank")}>GitHub</Button>
          </HStack>
          <Divider my="8" borderColor="gray.400"/>
          <HStack w="100%" my="2" spacing={4} justify="space-between" wrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">📸 For my photo creations... </Text>
            <HStack>
              <Button leftIcon={<FaFacebook/>} colorScheme="blackAlpha" variant="solid" onClick={() => window.open("https://www.facebook.com/james.chang.com.tw/", "_blank")}>Facebook</Button>
              <Button leftIcon={<FaInstagram/>} colorScheme="blackAlpha" variant="solid" onClick={() => window.open("https://www.instagram.com/jc_hiroto/", "_blank")}>Instagram</Button>
            </HStack>
          </HStack>
          <Divider my="8" borderColor="gray.400"/>
          <HStack w="100%" my="2" spacing={4} justify="space-between" wrap="wrap" gap="2">
            <Text fontSize={["lg","2xl"]} fontWeight="600" color="gray.700">💼 For career opportunities... </Text>
            <HStack>
              <Button leftIcon={<FaLinkedin/>} colorScheme="blackAlpha" variant="solid" onClick={() => window.open("https://www.linkedin.com/in/jc-hiroto/", "_blank")}>LinkedIn</Button>
              <Button leftIcon={<FaDownload/>} colorScheme="blackAlpha" variant="solid" onClick={() => window.open("https://www.instagram.com/jc_hiroto/", "_blank")}>Save my résumé</Button>
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactContainer;