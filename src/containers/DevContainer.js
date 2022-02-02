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
import ReactCardFlip from 'react-card-flip';
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/devProjects";
import { FaReply } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const DevContainer = (name) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  const bgColor = useColorModeValue("gray.100", "gray.300");
  const ProjectCardFront = ({title, img, desc, period, profession, btns}, index, setIsFlipped) => {
    if(isMobile){
      return(
        <Flex w="100%" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="column" bg={bgColor} borderRadius="2xl" boxShadow="2xl">
            <Text fontSize={["lg","xl", "2xl"]} fontWeight="800" color="gray.800">{title}</Text>
            <HStack my="2" spacing={2}>
              {profession.map((prof, index) => {
                return(
                  <Badge key={index} colorScheme="teal" variant="solid" fontSize="xs">{prof}</Badge>
                );
              })}
            </HStack>
            <Text mb="8" fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{desc}</Text>
            <Flex w="100%" flexWrap="wrap" alignItems="center" gap="2">
              <IconButton size="sm" icon={<FiMoreVertical />} variant="outline" color="blue.600" borderColor="blue.600" aria-label="flip-button" onClick={() => setIsFlipped(true)} />
              {btns.map((btn, i) => {
                return(
                  <Button key={i} size="sm" fontSize={["xs", "sm"]} leftIcon={btn.icon} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open(btn.link, "_blank")}>{btn.title}</Button>
                );
              })}
            </Flex>
      </Flex>
      );
    }
    return(
      <Flex w="100%" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="stretch" flexDirection="row" bg={bgColor} borderRadius="2xl" boxShadow="2xl">
          <Flex flexDirection="column" justifyContent="space-between" alignItems="start">
            <Flex flexDirection="column" justifyContent="start" alignItems="start">
              <Text fontSize={["md","xl", "2xl"]} fontWeight="800" color="gray.800">{title}</Text>
              <HStack my="2.5" spacing={2}>
                {profession.map((prof, index) => {
                  return(
                    <Badge key={index} colorScheme="teal" variant="solid" fontSize="xs">{prof}</Badge>
                  );
                })}
              </HStack>
              <Text fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{desc}</Text>
            </Flex>
            <Flex w="100%" flexWrap="wrap" alignItems="center" gap="2">
              <Button size="sm" leftIcon={<FiMoreVertical />} variant="outline" color="blue.600" borderColor="blue.600" aria-label="flip-button" onClick={() => setIsFlipped(true)}>Detail</Button>
              {btns.map((btn, i) => {
                return(
                  <Button key={i} size="sm" fontSize={["xs", "sm"]} leftIcon={btn.icon} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open(btn.link, "_blank")}>{btn.title}</Button>
                  );
                })}
            </Flex>
          </Flex>
          <Image w="25%" ml="8" src={img} alt={"Image of "+name} borderRadius="lg"/>
      </Flex>
    );
  };
  const ProjectCardBack = ({img, info, period}, index, setIsFlipped) => {
    if(isMobile){
      return(
        <Flex w="100%" h="50vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={bgColor} borderRadius="2xl" boxShadow="2xl">
          <Flex h="100%" flexDirection="column" justifyContent="space-between" alignItems="start">
            <Text fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{info}</Text>
            <Image h="128px" src={img} alt={"Image of "+name} borderRadius="lg"/>
            <IconButton size="sm" mr="4" icon={<FaReply />} variant="ghost" color="gray.700" aria-label="flip-button" onClick={() => setIsFlipped(false)} />
          </Flex>
      </Flex>
      );
    }
    return(
      <Flex w="100%" h="25vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={bgColor} borderRadius="2xl" boxShadow="2xl">
          <Flex h="100%" flexDirection="column" justifyContent="space-between" alignItems="start">
            <Text mb="2" fontSize={["lg", "xl"]} fontWeight="800" color="gray.800">Project Details</Text>
            <Tag colorScheme="blackAlpha" size="sm" variant="outline">{period}</Tag>
            <Text fontSize={["sm", "md"]} fontWeight="500" color="gray.800">{info}</Text>
            <IconButton size="sm" mr="4" icon={<FaReply />} variant="ghost" color="gray.700" aria-label="flip-button" onClick={() => setIsFlipped(false)} />
          </Flex>
      </Flex>
    );
  };
  const ProjectCard = (project, index) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return ProjectCardFront(project, index, setIsFlipped);
  };
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <SectionTitle base="me" sup="as a developer" animate/>
      <Flex w="100%" h="80%" px={["4vw","4vw","10vw","15vw"]} m="4" flexDirection="column">
        {projects.map((project, index) => {
          return(
            <>
              {ProjectCard(project, index)}
              <Spacer my="4" />
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DevContainer;