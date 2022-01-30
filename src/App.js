import { useState } from 'react';
import {
  Text,
  Flex,
  IconButton,
  Image,
  HStack,
  useColorModeValue,
  Avatar,
  Divider,
  Spacer,
  VStack,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
import { animateScroll as scroll, scroller } from 'react-scroll'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Footer from "./components/Footer";
import HeaderBar from "./components/HeaderBar";
import jcMemojiWink from "./img/jc_memoji_wink.png"
import jcMemojiCoding from "./img/jc_memoji_coding.png"
import jcAvatar from "./img/jc_avatar.png"
import NTULogo from "./img/ntu_logo.png"
import TMLogo from "./img/tm_logo.png"
import MineNTULogo from "./img/minentu_logo.png"
import FTCLogo from "./img/ftc_logo.png"


const scroll_config = {duration: 1000, delay: 0,smooth: "easeInOutQuad", offset: 0};
const sections = ["me", "dev", "photo", "contact"];

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

  const HomeWelcomeSection = (name) => {
    return(
      <Flex name={name} w="100%" h="95vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <HStack spacing={4}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
          <Text fontSize="8xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>It's me! James.</Text>
        </HStack>
        <Text fontSize="2xl" fontWeight="500" color={useColorModeValue("gray.500", "gray.300")} fontFamily="monospace">a student, dev and photographer.</Text>
        <HStack w="100" px="4" py="4" mt="8" justifyContent="center" spacing={4} flexDirection="row" bg={useColorModeValue("yellow.300","yellow.500")} borderRadius="xl" boxShadow="xl">
          <Image src={jcMemojiCoding} alt='JC coding memoji' boxSize='64px'/>
          <Text fontSize="xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.100")} my="4">Sorry! This website is still under construction.</Text>
        </HStack>
      </Flex>
    );
  };
  const AboutSection = (name) => {
    const NTUSection = () => {
      return(
        <HStack spacing={4}>
          <Avatar src={NTULogo} alt='emblem of NTU' name="NTU" boxSize='64px'/>
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <HStack spacing={4}>
              <Text fontSize="xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>National Taiwan University</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">2018 - 2022 (expected)</Tag>
            </HStack>
            <Text as="i" fontSize="md" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>B.S.E in Department of Engineering Science and Ocean Engineering</Text>
            <Text as="i" fontSize="md" fontWeight="400" color={useColorModeValue("gray.800", "gray.800")}>Area of concentration: EECS</Text>
          </Flex>
        </HStack>
      );
    };
    const TMSection = () => {
      return(
        <HStack spacing={4}>
          <Avatar src={TMLogo} alt='logo of Trend Micro' name="Trend Micro" boxSize='64px'/>
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <Text fontSize="xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>Trend Micro Inc.</Text>
            <HStack w="100%" spacing={4}>
              <Text as="i" fontSize="md" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Cloud Development Engineer</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">Sep. 2021 - Present</Tag>
            </HStack>
            <Text fontSize="sm" fontWeight="400" color={useColorModeValue("gray.800", "gray.800")}>
              Developing and testing cloud-based device vulnerability scanning backend service.
            </Text>
          </Flex>
        </HStack>
      );
    };
    const MineNTUSection = () => {
      return(
        <HStack spacing={4}>
          <Avatar src={MineNTULogo} alt='logo of MineNTU' name="MineNTU" boxSize='64px'/>
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <Text fontSize="xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>MineNTU Team</Text>
            <HStack w="100%" spacing={4}>
              <Text as="i" fontSize="md" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Co-Founder, Software Engineer</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">May 2021 - Present</Tag>
            </HStack>
            <Text fontSize="sm" fontWeight="400" color={useColorModeValue("gray.800", "gray.800")}>
              Building a virtual campus in Minecraft to facilitate students’ social life despite distance learning.
            </Text>
          </Flex>
        </HStack>
      );
    };
    const FTCSection = () => {
      return(
        <HStack spacing={4}>
          <Avatar src={FTCLogo} alt='logo of FTC Res-Q' name="FTC" boxSize='64px'/>
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <Text fontSize="xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>FIRST Tech Challenge (FTC) Championship</Text>
            <HStack w="100%" spacing={4}>
              <Text as="i" fontSize="md" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Robot and Java Software Engineer</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">Jan. 2016 - Oct. 2016</Tag>
            </HStack>
            <Text fontSize="sm" fontWeight="400" color={useColorModeValue("gray.800", "gray.800")}>
              Participated as a member of the Taiwan national team to compete with 128 international groups.
            </Text>
          </Flex>
        </HStack>
      );
    };
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize="6xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>about<Text as="sup" style={{fontStyle: "italic"}} fontSize="4xl" fontWeight="600"> me</Text></Text>
        <Flex w="100%" minH="85vh" px="10vw" justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
          <Flex w="100" py="16" px="8" m="4"
                justifyContent="center" 
                alignItems="center" 
                flexDirection="column" 
                bg={useColorModeValue("gray.100", "gray.300")} 
                borderRadius="2xl"
                boxShadow="2xl">
            <Avatar mb="4" src={jcAvatar} alt='James avatar' name="James Chang" boxSize='128px'/>
            <Text fontSize="4xl" fontWeight="800" color={useColorModeValue("gray.800", "gray.800")}>James Chang</Text>
            <Text as="i" fontSize="xl" fontWeight="300" color={useColorModeValue("gray.800", "gray.800")}>Po-Hao Chang</Text>
            <Divider w="50%" my="8" borderColor={useColorModeValue("gray.500", "gray.500")}/>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Engineering Student</Text>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Developer</Text>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>Photographer</Text>
            <Divider w="50%" my="8" borderColor={useColorModeValue("gray.500", "gray.500")}/>
            <Text as="i" fontSize="lg" fontWeight="300" color={useColorModeValue("gray.600", "gray.600")}>"Dream it, then code it."</Text>
          </Flex>
          <Flex w="50vw" h="80%" m="4" flexDirection="column">
            <Flex w="100%" pt="4" pb="8" px="8"
                  justifyContent="start" 
                  alignItems="start" 
                  flexDirection="column" 
                  bg={useColorModeValue("gray.100", "gray.300")} 
                  borderRadius="2xl"
                  boxShadow="2xl">
              <Text mb="2" fontSize="3xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>Education</Text>
              {NTUSection()}
            </Flex>
            <Spacer my="4" />
            <Flex w="100%" pt="4" pb="8" px="8"
                  justifyContent="start" 
                  alignItems="start" 
                  flexDirection="column" 
                  bg={useColorModeValue("gray.100", "gray.300")} 
                  borderRadius="2xl"
                  boxShadow="2xl">
              <Text mb="2" fontSize="3xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>Experience</Text>

              <VStack justifyContent="start" alignItems="start">
                {TMSection()}
                <Icon w="64px" as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
                {MineNTUSection()}
                <Icon w="64px" as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
                {FTCSection()}
              </VStack>
            </Flex>
            
          </Flex>
        </Flex>
      </Flex>
    );
  };
  const DevSection = (name) => {
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize="6xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>me<Text as="sup" style={{fontStyle: "italic"}} fontSize="4xl" fontWeight="600"> as a dev</Text></Text>
      </Flex>
    );
  };
  const PhotoSection = (name) => {
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize="6xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>me<Text as="sup" style={{fontStyle: "italic"}} fontSize="4xl" fontWeight="600"> as a photographer</Text></Text>
      </Flex>
    );
  };
  const ContactSection = (name) => {
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        <Text fontSize="6xl" fontWeight="800" color={useColorModeValue("gray.600", "gray.300")}>contact<Text as="sup" style={{fontStyle: "italic"}} fontSize="4xl" fontWeight="600"> me</Text></Text>
      </Flex>
    );
  };
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start">
      <HeaderBar sections={sections} handleScrollToSection={handleScrollToSection} scroll={scroll} isAtPageTop={isAtPageTop} pagePosition={pagePosition}/>
      {HomeWelcomeSection("Hi")}
      <IconButton icon={<FaArrowDown size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => handleScrollToSection("me")} _focus={{ boxShadow: "none", }}/>
      {AboutSection("me")}
      {DevSection("dev")}
      {PhotoSection("photo")}
      {ContactSection("contact")}
      <Footer />
    </Flex>
  );
}

export default App;
