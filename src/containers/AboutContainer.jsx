
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
import CMULogo from "../img/cmu_logo.png"
import TMLogo from "../img/tm_logo.png"
import MineNTULogo from "../img/minentu_logo.png"
import FTCLogo from "../img/ftc_logo.png"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaDownload } from "react-icons/fa";


const AboutContainer = ({name}) => {
  const bg_color = useColorModeValue("gray.50", "gray.800");
  const ExpSection = (name, logo, position, time, desc) => {
    return(
      <HStack spacing={4}>
        <Avatar src={logo} alt={"logo of"+name} name={name} boxSize={['32px','48px','64px']}/>
        <Flex flexDirection="column" justifyContent="start" alignItems="start">
          <Text fontSize={["md","lg", "xl"]} fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>{name}</Text>
          <Flex w="100%" flexWrap="wrap" alignItems="center" css={{gap: "0.5em"}}>
            <Text mr="2" as="i" fontSize={["sm", "md"]} fontWeight="500" color={useColorModeValue("gray.800", "gray.400")}>{position}</Text>
            <Tag color={useColorModeValue("gray.800" ,"gray.300")} size="sm" variant="outline">{time}</Tag>
          </Flex>
          <Text mt="2" fontSize={["xs", "sm"]} fontWeight="400" color={useColorModeValue("gray.800", "gray.200")}>
           {desc}
          </Text>
        </Flex>
      </HStack>
    );
  };
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <SectionTitle base="About" sup="👋" animate/>
      <Flex w="100%" minH="85vh" px="4vw" justifyContent="center" alignItems="start" flexDirection="row" flexWrap="wrap">
        <Flex w={["100%","100%","100%","20%"]} py={["8","16"]} px={["2","8"]} m="4"
              justifyContent="center" 
              alignItems="center" 
              flexDirection="column" 
              bg={bg_color} 
              borderRadius="xl"
              boxShadow="xl">
          <Avatar mb="4" src={jcAvatar} alt='James avatar' name="James Chang" boxSize='128px'/>
          <Text fontSize="3xl" fontWeight="800" color={useColorModeValue("gray.800", "gray.200")}>James Chang</Text>
          <Text as="i" fontSize="lg" fontWeight="300" color={useColorModeValue("gray.800", "gray.200")}>Po-Hao Chang</Text>
          <Divider w="50%" my={["4","8"]} borderColor={useColorModeValue("gray.500", "gray.500")}/>
          <Text fontSize="lg" fontWeight="500" color={useColorModeValue("gray.800", "gray.200")}>👨‍🎓 Engineering Student</Text>
          <Text fontSize="lg" fontWeight="500" color={useColorModeValue("gray.800", "gray.200")}>👨‍💻 Developer</Text>
          <Text fontSize="lg" fontWeight="500" color={useColorModeValue("gray.800", "gray.200")}>📸 Photographer</Text>
          <Divider w="50%" my={["4","8"]} borderColor={useColorModeValue("gray.500", "gray.500")}/>
          <Button size="md" leftIcon={<FaDownload/>} variant="ghost" color="blue.500" onClick={() => window.open("https://github.com/jc-hiroto/me/blob/master/public/po_hao_chang_resume.pdf", "_blank")}>Save my résumé</Button>
        </Flex>
        <Flex h="80%" m="4" flexDirection="column">
          <Flex w="100%" py="8" px={["8","16"]}
                justifyContent="start" 
                alignItems="start" 
                flexDirection="column" 
                bg={useColorModeValue("gray.50", "gray.800")} 
                borderRadius="xl"
                boxShadow="xl">
            <Text mb="4" fontSize="3xl" fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>Education</Text>
            {ExpSection("Carnegie Mellon University", CMULogo, "M.S. in Software Engineering", "2022 - 2024 (Expected)", "Mountain View, CA")}  
            <Icon w={['32px','48px','64px']} as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
            {ExpSection("National Taiwan University", NTULogo, "B.S.E in Department of Engineering Science and Ocean Engineering", "2018 - 2022",   
              "Taipei, Taiwan")}  
          </Flex>
          <Spacer my="4" />
          <Flex w="100%" py="8" px={["8","16"]}
                justifyContent="start" 
                alignItems="start" 
                flexDirection="column" 
                bg={bg_color} 
                borderRadius="xl"
                boxShadow="xl">
            <Text mb="4" fontSize="3xl" fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>Experience</Text>

            <VStack justifyContent="start" alignItems="start">
              {ExpSection("Trend Micro", TMLogo, "Cloud Development Engineer", "Sep. 2021 - Mar. 2022",   
              "Developing and testing cloud-based device vulnerability scanning backend service.")}
              <Icon w={['32px','48px','64px']} as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
              {ExpSection("MineNTU Team", MineNTULogo, "Co-Founder, Software Engineer", "May 2021 - Dec. 2021",   
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