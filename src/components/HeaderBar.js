import {
  Text,
  Flex,
  IconButton,
  Button,
  HStack,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa"

function HeaderBar({ sections, handleScrollToSection, scroll }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={useColorModeValue("white", "gray.800")} zIndex="1000">
        <Text as="button" fontSize="3xl" fontWeight="700" color="gray.500" onClick={() => scroll.scrollTo(0)}>James</Text>
        <HStack spacing={4}>
          {
            sections.map((section, index) => {
              return(
                <Button variant="ghost" key={"but_sec_"+index}><Text fontSize="md" fontWeight="600" color="gray.500" key={"text_sec_"+index} onClick={() => handleScrollToSection(section)}>{section}</Text></Button>
              );
            })
          }
        </HStack>
        <HStack spacing={2}>
          <IconButton onClick={toggleColorMode} icon={<FaMoon />} variant={colorMode === "dark" ? "solid":"ghost"} />
        </HStack>
      </Flex>
  );
}

export default HeaderBar;