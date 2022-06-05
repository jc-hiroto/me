import jcMemojiWink from "../img/jc_memoji_wink.png"
import {
  Text,
  Flex,
  Image,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Parallax } from "react-parallax";
import bg from "../img/bg.png";

const WelcomeContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const titleColor = useColorModeValue("gray.600", "gray.200");
  if(isMobile) {
    return(
      <Flex name={name} w="100%" h="92vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Flex spacing={4} flexDirection={["column", "row"]} justifyContent="center" alignItems="center">
          <Image mx="4" src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
          <Text fontSize={["4xl","8xl"]} fontWeight="800" color={titleColor}>It's me! James.</Text>
        </Flex>
        <Text fontSize={["md","2xl"]} fontWeight="500" color={titleColor} fontFamily="monospace">student, dev and photographer</Text>
      </Flex>
    );
  }
  return(
    <Parallax bgImage={bg} bgImageAlt="sea" strength={200} style={{width: "100%"}}>
      <Flex name={name} w="100%" h="92vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Flex spacing={4} flexDirection={["column", "row"]} justifyContent="center" alignItems="center">
          <Image mx="4" src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
          <Text fontSize={["4xl","8xl"]} fontWeight="800" color="gray.600">It's me! James.</Text>
        </Flex>
        <Text fontSize={["lg","2xl"]} fontWeight="500" color="gray.600" fontFamily="monospace">student, dev and photographer</Text>
      </Flex>
    </Parallax>
  );
};

export default WelcomeContainer;