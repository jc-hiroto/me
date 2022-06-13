import React from "react";
import {
  Flex,
  Image,
  Text,
  Tag,
  useColorModeValue,
  useMediaQuery,
  Button,
  Badge,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "../App.css";
import { FaReply } from "react-icons/fa";

function ProjectCard({project, index}) {
  const [isSelected, setIsSelected] = React.useState(false);
  const [isMobile] = useMediaQuery("(max-width: 760px)");
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const btnColor = useColorModeValue("gray.500", "gray.700");
  const titleColor = useColorModeValue("gray.700", "gray.300")
  const {title, img, desc, period, info, profession, btns} = project;
  const frontContent = () => {
    const notify_text_variants = {
      initial: {
        opacity: 0,
        x: 5
      },
      hover: {
        opacity: 1,
        x: 0,
        transition: {
          ease: "easeOut",
          duration: 0.2,
          delay: isMobile ? 1.7:0.5
        },
      }
    }
    const notify_icon_variants = {
      initial: {
        opacity: 0.5,
        y: 1,
        rotateZ: -45,
      },
      hover: {
        opacity: 1,
        y: 1,
        rotateZ: -225,
        transition: {
          ease: "easeInOut",
          duration: 0.4,
          delay: isMobile? 1.5:0.3,
        },
      }
    }
    return(
      <>
        <Image w="100%" fit="cover" maxH="200px" src={img} alt={"Image of "+name} borderTopLeftRadius="xl" borderTopRightRadius="xl"/>
        <Flex mx="4" my="4" key={index} justifyContent="space-between" alignItems="start" flexDirection="column">
          <Flex w="100%" key={index} justifyContent="start" alignItems="start" flexDirection="column">
            <Text fontSize={["xl","xl", "2xl"]} fontWeight="800" color={{titleColor}}>{title}</Text>
            <Tag mt="3" mb="2" colorScheme={useColorModeValue("blackAlpha" ,"whiteAlpha")} size="sm" variant="outline">{period}</Tag>
            <HStack mb="4" spacing={2}>
              {profession.map((prof, index) => {
                return(
                  <Badge key={index} colorScheme="teal" variant="solid" fontSize="xs">{prof}</Badge>
                );
              })}
            </HStack>
            <Text mb="8" fontSize={["md", "md"]} fontWeight="500" color={{titleColor}}>{desc}</Text>
          </Flex>
          <Flex w="100%" justifyContent="end" alignItems="center" flexDirection="row">
            <motion.div variants={notify_text_variants}>
              <Text as="i" mr="2" fontSize={["sm", "sm"]} fontWeight="700" color="gray.500">Click to know more</Text>
            </motion.div>
            <motion.div variants={notify_icon_variants}>
              <Icon as={FaReply} boxSize="4" color="gray.500" />
            </motion.div>
          </Flex>
        </Flex>
      </>
    );
  }
  const backContent = () => {
    return(
      <>
        <Flex w="100%" h="100%" px="6" py="6" key={index} justifyContent="space-between" alignItems="start" flexDirection="column">
          <Flex flexDirection="column" justifyContent="center" alignItems="start">
            <Text fontWeight="500" color="gray.500">Know more about...</Text>
            <Text fontSize={["xl","xl", "2xl"]} fontWeight="800" color={{titleColor}}>{title}</Text>
            <Flex w="100%" h="300px" py="2" justifyContent="start" alignItems="start" flexDirection="column" overflow="auto">
              {
                info.map((info, index) => {
                  return(
                    <HStack my="2" spacing="3">
                      <Text key={index} fontSize="3xl" fontWeight="500" color={{titleColor}}>{info.emoji}</Text>
                      <Text key={index} fontSize="sm" fontWeight="500" color={{titleColor}}>{info.content}</Text>
                    </HStack>
                  );
                })
              }
            </Flex>
          </Flex>
          <Flex w="100%" flexWrap="wrap" alignItems="center" gap="2">
            {btns.map((btn, i) => {
              return(
                <Button key={i} size="sm" fontSize={["xs", "sm"]} leftIcon={btn.icon} color="white" bg={btnColor} _hover={{bg: "gray.600"}} onClick={() => window.open(btn.link, "_blank")}>{btn.title}</Button>
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  }
  const variants = {
    initial: { 
      y: 0,
      rotateZ: 0,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
    },
    hover: {
      y: -10,
      boxShadow: "0px 15px 20px rgba(0,0,0,0.2)",
    },
    hover_select: {
      y: -20,
      boxShadow: "18px 15px 20px rgba(0,0,0,0.15)",
    },
    select: {
      y: -15,
      rotateZ: -3,
      boxShadow: "5px 5px 10px rgba(0,0,0,0.1)",
    }
  };
  
  return(
    
      <Flex 
        as={motion.div}
        w={isMobile? "100%":"25vw"}
        minW={isMobile? "100%":"400px"}
        h={isMobile? "":"450px"}
        my="4" 
        mx={isMobile?"0":"4"}
        key={index}
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
        bg={bgColor}
        borderRadius="xl"
        boxShadow="lg"
        cursor="pointer"
        variants={variants}
        initial="initial"
        animate={isSelected ? "select" : "initial"}
        whileHover={isSelected ? "hover_select" : "hover"}
        whileInView={isMobile? "hover": isSelected? "select": "initial"}
        transition={{}}
        onMouseDown={() => setIsSelected(!isSelected)}
      >
        <motion.div class="w-100 h-100" initial={{opacity: 0}} animate={{opacity: 1.0}} key={isSelected} transition={{type: "tween"}}>
          {isSelected? backContent():frontContent()}
        </motion.div>
      </Flex>
  );
};
export default ProjectCard;