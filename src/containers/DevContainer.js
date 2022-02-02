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
} from "@chakra-ui/react";
import ReactCardFlip from 'react-card-flip';
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/devProjects";
import { FaReply } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const DevContainer = (name) => {
  const ProjectCardFront = ({title, img, desc, period, profession, btns}, index, setIsFlipped) => {
    return(
      <Flex w="100%" h="20vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={useColorModeValue("gray.100", "gray.300")} borderRadius="2xl" boxShadow="2xl">
          <Flex flexDirection="column" justifyContent="start" alignItems="start">
            <Flex w="100%" flexWrap="wrap" alignItems="center" css={{gap: "0.5em"}}>
              <Text fontSize={["md","lg", "xl"]} fontWeight="600" color={useColorModeValue("gray.800", "gray.800")}>{title}</Text>
              <Tag colorScheme="blackAlpha" size="sm" variant="outline">{period}</Tag>
            </Flex>
            <HStack my="2.5" spacing={2}>
              {profession.map((prof, index) => {
                return(
                  <Badge key={index} colorScheme="teal" variant="solid" fontSize="xs">{prof}</Badge>
                );
              })}
            </HStack>
            <Text mb="8" as="i" fontSize={["xs", "sm"]} fontWeight="300" color={useColorModeValue("gray.800", "gray.800")}>{desc}</Text>
            <Flex w="100%" flexWrap="wrap" alignItems="center" gap="2">
              <IconButton size="sm" mr="4" icon={<FiMoreVertical />} variant="ghost" color="gray.700" aria-label="flip-button" onClick={() => setIsFlipped(true)} />
              {btns.map((btn, i) => {
                return(
                  <Button key={i} size="sm" fontSize={["xs", "sm"]} leftIcon={btn.icon} color="white" bg="gray.500" _hover={{bg: "gray.600"}} onClick={() => window.open(btn.link, "_blank")}>{btn.title}</Button>
                );
              })}
            </Flex>
          </Flex>
          <Image w="20%" ml="8" src={img} alt={"Image of "+name} borderRadius="lg"/>
      </Flex>
    );
  };
  const ProjectCardBack = ({info}, index, setIsFlipped) => {
    return(
      <Flex w="100%" h="20vh" pt="8" pb="8" px="8" key={index} justifyContent="space-between" alignItems="start" flexDirection="row" bg={useColorModeValue("gray.100", "gray.300")} borderRadius="2xl" boxShadow="2xl">
          <Flex h="100%" flexDirection="column" justifyContent="space-between" alignItems="start">
            <Text mb="8" fontSize={["sm", "md"]} fontWeight="300" color={useColorModeValue("gray.800", "gray.800")}>{info}</Text>
            <IconButton size="sm" mr="4" icon={<FaReply />} variant="ghost" color="gray.700" aria-label="flip-button" onClick={() => setIsFlipped(false)} />
          </Flex>
      </Flex>
    );
  };
  const ProjectCard = (project, index) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    return(
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" key={index}>
        {ProjectCardFront(project, index, setIsFlipped)}
        {ProjectCardBack(project, index, setIsFlipped)}
      </ReactCardFlip>
    );
  };
  return(
    <Flex name={name} w="100%" minH="95vh" pt="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <SectionTitle base="me" sup="as a developer" animate/>
      <Flex w={["100%","100%","100%","60%"]} h="80%" m="4" flexDirection="column">
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