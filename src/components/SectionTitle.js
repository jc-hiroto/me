import { Text, useColorModeValue } from "@chakra-ui/react";
const SectionTitle = ({base, sup}) => {
  const titleColor = useColorModeValue("gray.600", "gray.300");
  return(
    <Text fontSize={["4xl","5xl","5xl","6xl"]} fontWeight="800" color={titleColor}>{base}<Text as="sup" style={{fontStyle: "italic"}} fontSize={["2xl","3xl","3xl","4xl"]} fontWeight="600">{" "+sup}</Text></Text>
  );
};

export default SectionTitle;