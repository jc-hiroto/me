import { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa"
import { animateScroll as scroll, scroller } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import WelcomeContainer from "./containers/WelcomeContainer";
import AboutContainer from './containers/AboutContainer';
import SectionTitle from './components/SectionTitle';
import jcMemojiCoding from "./img/jc_memoji_coding.png"
import ContactContainer from './containers/ContactContainer';
import DevContainer from './containers/DevContainer';


const scroll_config = {duration: 1000, delay: 0,smooth: "easeInOutQuad", offset: -60};
const sections = ["me", "dev", "contact"];

function App() {
  
  const [isAtPageTop, setIsAtPageTop] = useState(true);
  const [pagePosition, setPagePosition] = useState(0);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsAtPageTop(currPos.y === 0);
    setPagePosition(-(currPos.y/window.innerHeight)/0.95);
  })

  const handleScrollToSection = (section) => {
    scroller.scrollTo(section, scroll_config);
  };


  const smallBanner = (emoji, title, color) => {
    return(
      <HStack w={["80vw","80vw","80vw","30vw", ]} px="4" py="4" mt="8" justifyContent="center" spacing={4} flexDirection="row" bg={color} borderRadius="xl" boxShadow="xl">
        <Image src={emoji} alt='JC coding memoji' boxSize={['48px', '64px']}/>
        <Text fontSize={["md","xl"]} fontWeight="600" color="gray.700" my="4">{title}</Text>
      </HStack>
    );
  };
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start">
      <HeaderBar sections={sections} handleScrollToSection={handleScrollToSection} scroll={scroll} isAtPageTop={isAtPageTop} pagePosition={pagePosition}/>
      <WelcomeContainer />
      <IconButton mt="4" icon={<FaArrowDown size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => handleScrollToSection("me")} _focus={{ boxShadow: "none", }}/>
      <AboutContainer name="me" />
      <DevContainer name="dev" />
      <ContactContainer name="contact" />
      <Footer />
    </Flex>
  );
}

export default App;
