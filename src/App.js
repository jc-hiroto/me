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
  const titleColor = useColorModeValue("gray.600", "gray.300");

  useScrollPosition(({ prevPos, currPos }) => {
    setIsAtPageTop(currPos.y === 0);
    setPagePosition(-(currPos.y/window.innerHeight)/0.95);
  })

  const handleScrollToSection = (section) => {
    scroller.scrollTo(section, scroll_config);
  };

  const sectionTitle = (base, sup) => {
    return(
      <Text fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="800" color={titleColor}>{base}<Text as="sup" style={{fontStyle: "italic"}} fontSize={["2xl","3xl","3xl","4xl"]} fontWeight="600">{" "+sup}</Text></Text>
    );
  };

  const smallBanner = (emoji, title, color) => {
    return(
      <HStack w={["80vw","80vw","80vw","30vw", ]} px="4" py="4" mt="8" justifyContent="center" spacing={4} flexDirection="row" bg={color} borderRadius="xl" boxShadow="xl">
        <Image src={emoji} alt='JC coding memoji' boxSize={['48px', '64px']}/>
        <Text fontSize={["md","xl"]} fontWeight="600" color="gray.700" my="4">{title}</Text>
      </HStack>
    );
  };

  const HomeWelcomeSection = (name) => {
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
  const AboutSection = (name) => {
    const ExpSection = (name, logo, position, time, desc) => {
      return(
        <HStack spacing={4}>
          <Avatar src={logo} alt={"logo of"+name} name={name} boxSize={['32px','48px','64px']}/>
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <Text fontSize={["md","lg", "xl"]} fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>{name}</Text>
            <Flex w="100%" flexWrap="wrap" alignItems="center" css={{gap: "0.5em"}}>
              <Text mr="2" as="i" fontSize={["sm", "md"]} fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>{position}</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">{time}</Tag>
            </Flex>
            <Text mt="2" fontSize={["xs", "sm"]} fontWeight="400" color={useColorModeValue("gray.800", "gray.800")}>
             {desc}
            </Text>
          </Flex>
        </HStack>
      );
    };
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        {sectionTitle("about", "me")}
        <Flex w="100%" minH="85vh" px={["4vw","4vw","10vw","10vw"]} justifyContent="center" alignItems="center" flexDirection="row" flexWrap="wrap">
          <Flex w={["100%","100%","100%","25%"]} py={["8","16"]} px="8" m="4"
                justifyContent="center" 
                alignItems="center" 
                flexDirection="column" 
                bg={useColorModeValue("gray.100", "gray.300")} 
                borderRadius="2xl"
                boxShadow="2xl">
            <Avatar mb="4" src={jcAvatar} alt='James avatar' name="James Chang" boxSize='128px'/>
            <Text fontSize="4xl" fontWeight="800" color={useColorModeValue("gray.800", "gray.800")}>James Chang</Text>
            <Text as="i" fontSize="xl" fontWeight="300" color={useColorModeValue("gray.800", "gray.800")}>Po-Hao Chang</Text>
            <Divider w="50%" my={["4","8"]} borderColor={useColorModeValue("gray.500", "gray.500")}/>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>👨‍🎓 Engineering Student</Text>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>👨‍💻 Developer</Text>
            <Text fontSize="xl" fontWeight="500" color={useColorModeValue("gray.800", "gray.800")}>📸 Photographer</Text>
            <Divider w="50%" my={["4","8"]} borderColor={useColorModeValue("gray.500", "gray.500")}/>
            <Text as="i" fontSize="lg" fontWeight="300" color={useColorModeValue("gray.600", "gray.600")}>"Dream it, then code it."</Text>
          </Flex>
          <Flex w={["100%","100%","100%","50%"]} h="80%" m="4" flexDirection="column">
            <Flex w="100%" pt="4" pb="8" px="8"
                  justifyContent="start" 
                  alignItems="start" 
                  flexDirection="column" 
                  bg={useColorModeValue("gray.100", "gray.300")} 
                  borderRadius="2xl"
                  boxShadow="2xl">
              <Text mb="2" fontSize="3xl" fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>Education</Text>
              {ExpSection("National Taiwan University", NTULogo, "B.S.E in Department of Engineering Science and Ocean Engineering", "2018 - 2022 (expected)",   
                "Area of concentration: EECS")}  
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
                {ExpSection("Trend Micro", TMLogo, "Cloud Development Engineer", "Sep. 2021 - Present",   
                "Developing and testing cloud-based device vulnerability scanning backend service.")}
                <Icon w={['32px','48px','64px']} as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
                {ExpSection("MineNTU Team", MineNTULogo, "Co-Founder, Software Engineer", "May 2021 - Present",   
                "Building a virtual campus in Minecraft to facilitate students’ social life despite distance learning.")}
                <Icon w={['32px','48px','64px']} as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
                {ExpSection("FIRST Tech Challenge (FTC)", FTCLogo, "Robot and Java Software Engineer", "Jan. 2016 - Oct. 2016",   
                "Participated as a member of the Taiwan national team to compete with 128 international groups.")}
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
        {sectionTitle("me", "as a developer")}
        {smallBanner(jcMemojiCoding, "Sorry! This area is still under construction.", useColorModeValue("yellow.300","yellow.500"))}
      </Flex>
    );
  };
  const PhotoSection = (name) => {
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        {sectionTitle("me", "as a photographer")}
        {smallBanner(jcMemojiCoding, "Sorry! This area is still under construction.", useColorModeValue("yellow.300","yellow.500"))}
      </Flex>
    );
  };
  const ContactSection = (name) => {
    return(
      <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
        {sectionTitle("contact", "me")}
        {smallBanner(jcMemojiCoding, "Sorry! This area is still under construction.", useColorModeValue("yellow.300","yellow.500"))}
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
