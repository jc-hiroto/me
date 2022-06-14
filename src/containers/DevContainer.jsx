import React from "react";
import {
  Flex,
  useMediaQuery
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/devProjects";
import ProjectCard from "../components/ProjectCard";

const DevContainer = ({name}) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)");  
  return(
    <Flex id={name} w="100%" py="5vh" justifyContent="start" alignItems="center" flexDirection="column">
      <Flex w="100%" pl={["8vw"]} justifyContent="start" alignItems="center" flexDirection="row">
        <SectionTitle base="Projects" sup="👨‍💻"/>
      </Flex>
      <Flex w="100%" h="80%" px="8vw" m="4" flexDirection={isMobile? "column":"row"} flexWrap="wrap">
        {projects.map((project, index) => {
          return(
            <div key={index}>
              <ProjectCard project={project} index={index}/>
            </div>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default DevContainer;