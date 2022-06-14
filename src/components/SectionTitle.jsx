import { HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SectionTitle = ({base, sup, animate}) => {
  const titleColor = useColorModeValue("gray.600", "gray.300");
  const emoji_variants = {
    initial: {
      opacity: 0,
      scale: 0.2,
    },
    inview: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        mass: 1,
        damping: 10,
        delay: 0.2,
      }
    }
  }
  const title_variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    inview: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        mass: 1,
        damping: 10,
        delay: 0.2,
      }
    }
  }
  return(
    <HStack>
        <Text as={animate? motion.div:""} fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="600" color={titleColor} variants={emoji_variants} initial="initial" whileInView="inview" viewport={{ once: true }}>
          {sup}
        </Text>
        <Text as={animate? motion.div:""} fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="800" color={titleColor} variants={title_variants} initial="initial" whileInView="inview" viewport={{ once: true }}>{base}</Text>
    </HStack>
  );
};

export default SectionTitle;