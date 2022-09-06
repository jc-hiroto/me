
import {
  Text,
  Flex,
  useColorModeValue,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import jcHooray from "../img/jc_memojis/jc_9.png";
import { FaArrowLeft } from "react-icons/fa";

function ResumeDownloadContainer({url}) {
  const navigate = useNavigate();
  window.location.replace(url);
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start" bg={useColorModeValue("white", "gray.900")}>
      <Flex w="100%" h="95vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Image src={jcHooray} alt="JC hooray memoji" boxSize="150px" />
        <Text fontSize={["2xl","6xl"]} fontWeight="500" color={useColorModeValue("gray.600", "gray.300")}>
          Yay! Resume downloading...
        </Text>
        <Text fontSize={["sm","lg"]} fontWeight="500" color={useColorModeValue("gray.500", "gray.500")}>
          If the download doesn't start, 
          <Link href={url} color={useColorModeValue("blue.500", "blue.300")} fontWeight="500" ml="1">click here.</Link>
        </Text>
        <Button mt="8" size="lg" colorScheme="blue" leftIcon={<FaArrowLeft />} onClick={() => {navigate(-1)}}>
          Go Back
        </Button>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default ResumeDownloadContainer;