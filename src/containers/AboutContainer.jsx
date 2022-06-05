
import {
  Text,
  Flex,
  HStack,
  useColorModeValue,
  Avatar,
  Divider,
  Spacer,
  VStack,
  Tag,
  Icon,
  Button,
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import jcAvatar from "../img/jc_avatar.png"
import NTULogo from "../img/ntu_logo.png"
import TMLogo from "../img/tm_logo.png"
import MineNTULogo from "../img/minentu_logo.png"
import FTCLogo from "../img/ftc_logo.png"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaDownload } from "react-icons/fa";

const AboutContainer = ({name}) => {
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
      <SectionTitle base="about" sup="me" animate/>
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
          <Button size="sm" leftIcon={<FaDownload/>} variant="ghost" color="blue.500" onClick={() => window.open("https://github.com/jc-hiroto/me/blob/master/public/po_hao_chang_resume.pdf", "_blank")}>Save my résumé</Button>
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

export default AboutContainer;