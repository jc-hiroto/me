import {
  Text,
  Flex,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import jcMindBlown from "../img/jc_memojis/jc_15.png";


function NotFoundContainer() {
  const navigate = useNavigate();
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start" bg={useColorModeValue("white", "gray.900")}>
      <Flex w="100%" h="95vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Image src={jcMindBlown} mb={["-6","-10"]} alt="JC mind blown memoji" boxSize={["128px", "200px"]} />
        <Text fontSize={["6xl","9xl"]} fontWeight="700" color={useColorModeValue("gray.600", "gray.300")}>
          Aww, 404.
        </Text>
        <Button mt="8" size="lg" colorScheme="blue" leftIcon={<FaArrowLeft />} onClick={() => {navigate(-2)}}>
          Go Back
        </Button>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default NotFoundContainer;
