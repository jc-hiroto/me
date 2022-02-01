import { HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
const SectionTitle = ({base, sup, animate}) => {
  const titleColor = useColorModeValue("gray.600", "gray.300");
  if(animate){
    return(
      <HStack>
        <Parallax translateX={['30', '0']} scale={[0.9, 1]} easing="easeInQuad">
          <Text fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="800" color={titleColor}>{base}</Text>
        </Parallax>
        <Parallax opacity={[0,2]} easing="easeInQuad">
          <Text as="sup" style={{fontStyle: "italic"}} fontSize={["2xl","3xl","3xl","4xl"]} fontWeight="600" color={titleColor}>
            {" "+sup}
          </Text>
        </Parallax>
      </HStack>
    );
  }
  return(
    <HStack>
      <Text fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="800" color={titleColor}>{base}</Text>
      <Text as="sup" style={{fontStyle: "italic"}} fontSize={["2xl","3xl","3xl","4xl"]} fontWeight="600" color={titleColor}>
        {" "+sup}
      </Text>
    </HStack>
  );
};

export default SectionTitle;