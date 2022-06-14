import {
  Text,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import RandomMemoji from "../components/RandomMemoji";

const WelcomeContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const titleColor = useColorModeValue("gray.600", "gray.200");
  return(
      <Flex name={name} w="100%" h={isMobile? "80vh":"92vh"} pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <RandomMemoji size={isMobile? '128px':'200px'} offsetY={isMobile? 30 : 60}/>
          <Text fontSize={["6xl","8xl"]} fontWeight="800" color={titleColor}>James</Text>
        </Flex>
        <Text fontSize={["md","2xl"]} fontWeight="500" color={titleColor} fontFamily="monospace">student, dev and photographer</Text>
      </Flex>
  );
};

export default WelcomeContainer;