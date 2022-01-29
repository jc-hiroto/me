import { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Button,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa"
import { animateScroll as scroll, scroller } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import jcMemojiWink from "./img/jc_memoji_wink.png"


const scroll_config = {duration: 1000, delay: 0,smooth: "easeInOutQuad", offset: 0};
const sections = ["me", "dev", "photographer"];

function App() {
  
  const [isAtPageTop, setIsAtPageTop] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsAtPageTop(currPos.y === 0);

  })

  const handleScrollToSection = (section) => {
    scroller.scrollTo(section, scroll_config);
  };

  const HomeWelcomeSection = (name) => {
    return(
      <Flex name={name} w="100%" h="95vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <HStack spacing={4}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
          <Text fontSize="8xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>Hi there, I am James.</Text>
        </HStack>
        <Text fontSize="2xl" fontWeight="500" color={useColorModeValue("gray.500", "gray.300")} fontFamily="monospace">a student, dev and photographer.</Text>
        <Text fontSize="5xl" fontWeight="800" color="gray.500" my="4">🚧 under construction 🚧</Text>
      </Flex>
    );
  };
  const AboutSection = (name) => {
    return(
      <Flex name={name} w="100%" h="90vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize="8xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>About</Text>
      </Flex>
    );
  };
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start">
      <HeaderBar sections={sections} handleScrollToSection={handleScrollToSection} scroll={scroll} isAtPageTop={isAtPageTop}/>
      {HomeWelcomeSection("Hi")}
      <IconButton icon={<FaArrowDown size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => handleScrollToSection("me")}/>
      {AboutSection("me")}
      {HomeWelcomeSection()}
      <Footer />
    </Flex>
  );
}

export default App;
