
import {
  Text,
  Flex,
  HStack,
  useColorModeValue,
  Avatar,
  Spacer,
  VStack,
  Tag,
  Icon,
  chakra,
  Link
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import NTULogo from "../img/ntu_logo.png"
import CMULogo from "../img/cmu_logo.png"
import TMLogo from "../img/tm_logo.png"
import MineNTULogo from "../img/minentu_logo.png"
import FTCLogo from "../img/ftc_logo.png"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaDownload, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


const AboutContainer = ({name}) => {
  const bg_color = useColorModeValue("gray.50", "gray.800");
  const ExpSection = (name, logo, position, time, desc) => {
    return(
      <HStack spacing={4}>
        <Avatar src={logo} alt={"logo of"+name} name={name} boxSize={['32px','48px','64px']}/>
        <Flex flexDirection="column" justifyContent="start" alignItems="start">
          <Text fontSize={["xl","xl", "2xl"]} fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>{name}</Text>
          <Flex w="100%" flexWrap="wrap" alignItems="center" css={{gap: "0.5em"}}>
            <Text mr="2" as="i" fontSize={["sm", "md"]} fontWeight="500" color={useColorModeValue("gray.800", "gray.400")}>{position}</Text>
            <Tag color={useColorModeValue("gray.800" ,"gray.300")} size="sm" variant="outline">{time}</Tag>
          </Flex>
          <Text mt="2" fontSize={["sm", "md"]} fontWeight="400" color={useColorModeValue("gray.800", "gray.200")}>
           {desc}
          </Text>
        </Flex>
      </HStack>
    );
  };
  return(
    <Flex id={name} w="100%" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <SectionTitle base="About" sup="🙌" animate/>
      <Flex w="100%" minH="85vh" justifyContent="start" alignItems="start" flexDirection="column" flexWrap="wrap">
        <Flex w="100%" py={["16", "32"]} px={["8","16"]}
          justifyContent="center" 
          alignItems="center" 
          flexDirection="column" 
        >
          <Flex w="100%" justifyContent="start" alignItems="start" flexDirection="column">
            <HStack spacing="2">
              <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="600" color={useColorModeValue("gray.600", "gray.400")}>Hi</Text>
              <motion.div
                initial={{ originY: 0.8, originX:0.7 }}
                animate={{rotateZ:[10, -10, 10]}} 
                transition={{repeat: Infinity, repeatType: "reverse", duration:2}}
              >
                <Text mr="2" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600">👋</Text>
              </motion.div>
              <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="600" color={useColorModeValue("gray.600", "gray.400")}>I'm</Text>
              <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight="700" color={useColorModeValue("gray.800", "gray.300")}>James.</Text>
            </HStack>
            <Text mt="6" mb="4" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600" color={useColorModeValue("gray.500", "gray.500")} lineHeight="shorter">
              A
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> Taiwanese🇹🇼 </chakra.span>
              developer based in
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> Mountain View⛰</chakra.span>.
            </Text>
            <Text mb="4" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600" color={useColorModeValue("gray.500", "gray.500")} lineHeight="shorter">
              I am experienced in
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> Cloud Computing</chakra.span>, 
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> Web Development</chakra.span>, and
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> DevOps</chakra.span>.
            </Text>
            <Text mb="4" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600" color={useColorModeValue("gray.500", "gray.500")} lineHeight="shorter">
              Recently, I've been working on
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> Python</chakra.span> and
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}> JavaScript</chakra.span>.
            </Text>
            <HStack mt="8" spacing={["8","16"]}>
              <Link href="https://github.com/jc-hiroto/me/raw/master/public/po_hao_chang_resume.pdf" isExternal>
                <HStack spacing="2">
                  <Icon as={FaDownload} boxSize={["4","6"]} color={useColorModeValue("gray.500", "gray.400")}/>
                  <Text fontSize={["md", "xl", "3xl"]} fontWeight="600" color={useColorModeValue("gray.500", "gray.400")}>
                    Save my resume
                  </Text>
                </HStack>
              </Link>
              <Link href="https://twitter.com/jc_hiroto_" isExternal>
                <HStack spacing="2">
                  <Icon as={FaTwitter} boxSize={["4","6"]} color={useColorModeValue("gray.500", "gray.400")}/>
                  <Text fontSize={["md", "xl", "3xl"]} fontWeight="600" color={useColorModeValue("gray.500", "gray.400")}>
                    @jc_hiroto_
                  </Text>
                </HStack>
              </Link>
              
            </HStack>

          </Flex>
        </Flex>
        <Flex id="experience" w="100%" pt="16" pb="32" flexDirection="row" bg={bg_color} px={["8","16"]} flexWrap="wrap" gap="8">
          <Flex 
            justifyContent="start" 
            alignItems="start" 
            flexDirection="column" 
          >
            <Text mb="4" fontSize="4xl" fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>Education</Text>
            {ExpSection("Carnegie Mellon University", CMULogo, "M.S. in Software Engineering", "2022 - 2024 (Expected)", "Mountain View, CA")}  
            <Icon w={['32px','48px','64px']} as={BsThreeDotsVertical} color={useColorModeValue("gray.600", "gray.600")} />
            {ExpSection("National Taiwan University", NTULogo, "B.S.E in Department of Engineering Science and Ocean Engineering", "2018 - 2022",   
              "Taipei, Taiwan")}  
          </Flex>
          <Spacer my="4" />
          <Flex
            justifyContent="start" 
            alignItems="start" 
            flexDirection="column" 
          >
            <Text mb="4" fontSize="4xl" fontWeight="700" color={useColorModeValue("gray.800", "gray.200")}>Experience</Text>

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