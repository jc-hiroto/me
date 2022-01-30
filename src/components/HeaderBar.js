import {
  Text,
  Flex,
  IconButton,
  Button,
  HStack,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa"
import jcMemojiWink from "../img/jc_memoji_wink.png"

function HeaderBar({ sections, handleScrollToSection, scroll, isAtPageTop, pagePosition }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={useColorModeValue("white", "gray.800")} zIndex="1000" boxShadow={isAtPageTop ? "":"lg"} transition="box-shadow ease-in-out 500ms">
        <HStack as="button" spacing={2} onClick={() => scroll.scrollTo(0)}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px'/>
          <Text fontSize="3xl" fontWeight="700" color={useColorModeValue("gray.500", "gray.300")} >James</Text>
        </HStack>
        <HStack spacing={4}>
          {
            sections.map((section, index) => {
              const sec = Math.round(pagePosition)
              return(
                <Button variant={sec === (index+1) ? "solid":"ghost"} key={"but_sec_"+index} _focus={{ boxShadow: "none", }}><Text fontSize="md" fontWeight="600" key={"text_sec_"+index} onClick={() => handleScrollToSection(section)}>{section}</Text></Button>
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