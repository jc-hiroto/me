import {
  Text,
  Flex,
  IconButton,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBars, FaMoon } from "react-icons/fa"
import jcMemojiWink from "../img/jc_memoji_wink.png"

function HeaderBar({ sections, handleScrollToSection, scroll, isAtPageTop, pagePosition }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [ isMobile ] = useMediaQuery("(max-width: 768px)")
  const bg_color = useColorModeValue("white", "gray.800")
  const text_color = useColorModeValue("gray.500", "gray.300")
  if(isMobile) {
    return(
      <Flex w="100%" h="64px" px="2" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000" boxShadow={isAtPageTop ? "":"lg"} transition="box-shadow ease-in-out 500ms">
        <Menu>
          <MenuButton as={IconButton} size="sm" aria-label='Options' icon={<FaBars />} variant='ghost' _focus={{ boxShadow: "none", }} />
          <MenuList>
            {
              sections.map((section, index) => {
                return(
                  <MenuItem key={"but_sec_"+index} _focus={{ boxShadow: "none", }}>
                    <Text fontSize="md" fontWeight="600" key={"text_sec_"+index} onClick={() => handleScrollToSection(section)}>{section}</Text>
                  </MenuItem>
                );
              })
            }
          </MenuList>
        </Menu>
        <HStack spacing={2}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='24px'/>
          <Text fontSize="2xl" fontWeight="700" color={text_color} >James</Text>
        </HStack>
        <IconButton size="sm" onClick={toggleColorMode} icon={<FaMoon />} variant={colorMode === "dark" ? "solid":"ghost"} _focus={{ boxShadow: "none", }}/>
      </Flex>
    );
  }
  return (
    <Flex w="100%" h="64px" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000" boxShadow={isAtPageTop ? "":"lg"} transition="opacity ease-in-out 300ms" opacity={isAtPageTop?"0":"0.99"}>
      <HStack as="button" spacing={2} onClick={() => scroll.scrollTo(0)}>
        <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px'/>
        <Text fontSize="3xl" fontWeight="700" color={text_color} >James</Text>
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
        <IconButton onClick={toggleColorMode} icon={<FaMoon />} variant={colorMode === "dark" ? "solid":"ghost"} _focus={{ boxShadow: "none", }}/>
      </HStack>
    </Flex>
  );
}

export default HeaderBar;