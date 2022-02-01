import jcMemojiWink from "../img/jc_memoji_wink.png"
import {
  Text,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const WelcomeContainer = ({name}) => {
  return(
    <Flex name={name} w="100%" h="95vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
      <Flex spacing={4} flexDirection={["column", "row"]} justifyContent="center" alignItems="center">
        <Image mx="4" src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
        <Text fontSize={["4xl","8xl"]} fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>It's me! James.</Text>
      </Flex>
      <Text fontSize={["lg","2xl"]} fontWeight="500" color={useColorModeValue("gray.500", "gray.300")} fontFamily="monospace">a student, dev and photographer.</Text>
    </Flex>
  );
};

export default WelcomeContainer;