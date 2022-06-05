import React from "react";
import {
  Flex,
  Image,
  Text,
  Tag,
  useColorModeValue,
  Button,
  Spacer,
  Badge,
  HStack,
  IconButton,
  useMediaQuery
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/devProjects";
import { FaReply } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const DevContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const btnColor = useColorModeValue("gray.500", "gray.700");
  const ProjectCard = ({title, img, desc, period, profession, btns}, index, setIsFlipped) => {
      return(
        <Flex w={isMobile? "100%":"350px"} my="4" mx={isMobile?"0":"4"}key={index} justifyContent="space-between" alignItems="start" flexDirection="column" bg={bgColor} borderRadius="xl" boxShadow="2xl">
          <Image w="100%" src={img} alt={"Image of "+name} borderTopLeftRadius="xl" borderTopRightRadius="xl"/>
          <Flex w="100%" px="8" py="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="column">
            <Text fontSize={["lg","xl", "2xl"]} fontWeight="800" color={useColorModeValue("gray.700", "gray.300")}>{title}</Text>
            <HStack my="2" spacing={2}>
              {profession.map((prof, index) => {
                return(
                  <Badge key={index} colorScheme="teal" variant="solid" fontSize="xs">{prof}</Badge>
                );
              })}
            </HStack>
            <Text mb="8" fontSize={["sm", "md"]} fontWeight="500" color={useColorModeValue("gray.700", "gray.300")}>{desc}</Text>
            <Flex w="100%" flexWrap="wrap" alignItems="center" gap="2">
              <IconButton size="sm" icon={<FiMoreVertical />} variant="outline" color="blue.600" borderColor="blue.600" aria-label="flip-button" onClick={() => setIsFlipped(true)} />
              {btns.map((btn, i) => {
                return(
                  <Button key={i} size="sm" fontSize={["xs", "sm"]} leftIcon={btn.icon} color="white" bg={btnColor} _hover={{bg: "gray.600"}} onClick={() => window.open(btn.link, "_blank")}>{btn.title}</Button>
                );
              })}
            </Flex>
          </Flex>
      </Flex>
      );
  };
  const ProjectCardBack = ({img, info, period}, index, setIsFlipped) => {
    if(isMobile){
      return(
        <Flex w="100%" h="50vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={bgColor} borderRadius="xl" boxShadow="2xl">
          <Flex h="100%" flexDirection="column" justifyContent="space-between" alignItems="start">
            <Text fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{info}</Text>
            <Image h="128px" src={img} alt={"Image of "+name} borderRadius="lg"/>
            <IconButton size="sm" mr="4" icon={<FaReply />} variant="ghost" color="gray.700" aria-label="flip-button" onClick={() => setIsFlipped(false)} />
          </Flex>
      </Flex>
      );
    }
    return(
      <Flex w="100%" h="25vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={bgColor} borderRadius="xl" boxShadow="2xl">
          <Flex h="100%" flexDirection="column" justifyContent="space-between" alignItems="start">
            <Text mb="2" fontSize={["lg", "xl"]} fontWeight="800" color="gray.800">Project Details</Text>
            <Tag colorScheme="blackAlpha" size="sm" variant="outline">{period}</Tag>
            <Text fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{info}</Text>
            <IconButton size="sm" mr="4" icon={<FaReply />} variant="ghost" color="gray.700" aria-label="flip-button" />
          </Flex>
      </Flex>
    );
  };
  return(
    <Flex name={name} w="100%" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <SectionTitle base="me" sup="as a developer" animate/>
      <Flex w="100%" h="80%" px="8vw" m="4" flexDirection={isMobile? "column":"row"} overflow="auto">
        {projects.map((project, index) => {
          return(
            <div key={index}>
              {ProjectCard(project, index)}
            </div>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DevContainer;