import { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Image,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import WelcomeContainer from "../containers/WelcomeContainer";
import AboutContainer from '../containers/AboutContainer';
import ContactContainer from '../containers/ContactContainer';
import DevContainer from '../containers/DevContainer';
import { HashLink } from 'react-router-hash-link';


const sections = ["about", "experience", "projects", "contact"];

function HomeContainer() {
  
  const [isAtPageTop, setIsAtPageTop] = useState(true);
  const [pagePosition, setPagePosition] = useState(0);

  useScrollPosition(({ prevPos, currPos }) => {
    setIsAtPageTop(currPos.y === 0);
    setPagePosition(-(currPos.y/window.innerHeight)/0.95);
  });

  const smallBanner = (emoji, title, color) => {
    return(
      <HStack w={["80vw","80vw","80vw","30vw", ]} px="4" py="4" mt="8" justifyContent="center" spacing={4} flexDirection="row" bg={color} borderRadius="xl" boxShadow="xl">
        <Image src={emoji} alt='JC coding memoji' boxSize={['48px', '64px']}/>
        <Text fontSize={["md","xl"]} fontWeight="600" color="gray.700" my="4">{title}</Text>
      </HStack>
    );
  };
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start" bg={useColorModeValue("white", "gray.900")}>
      <HeaderBar sections={sections} isAtPageTop={isAtPageTop} pagePosition={pagePosition}/>
      <WelcomeContainer />
      <motion.div animate={{y: [-20, 0, -20], scale:[1.1, 1, 1.1]}} transition={{delay: 2,repeat: Infinity, repeatType: "reverse", duration:2, repeatDelay: 1}}>
        <HashLink to="/#about" smooth>
          <IconButton mt="4" mb="10vh" icon={<FaArrowDown size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" _focus={{ boxShadow: "none", }}/>
        </HashLink>
      </motion.div>
      <AboutContainer name="about" />
      <DevContainer name="projects" />
      <ContactContainer name="contact" />
      <Footer />
    </Flex>
  );
}

export default HomeContainer;
