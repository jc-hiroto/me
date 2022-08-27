
import {
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion";

function SeekingBanner(){
  const bannerBg = useColorModeValue("blue.400", "blue.400");
  const variants = {
    initial: { 
      y: 0,
      rotateZ: 0,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
    },
    hover: {
      y: -10,
      rotateZ: 1,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
    }
  };
  return(
    <HashLink to="/#contact" smooth>
      <Flex
        as={motion.div}
        variants={variants}
        whileHover="hover"
        initial="initial"
        mx="8"
        mb="16"
        px={["4", "8"]}
        py="2"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bg={bannerBg}
        borderRadius="lg"
        style={{rotate: "-5deg"}}
        boxShadow="lg"
      >
        <Text mr="4" fontSize={["2xl", "4xl"]} fontWeight="500">
          👀
        </Text>
        <Text fontSize={["md","2xl"]} fontWeight="700" color="gray.100">
          Seeking 2023 SWE Intern @ Bay Area
        </Text>
      </Flex>
    </HashLink>
  );
}

export default SeekingBanner;