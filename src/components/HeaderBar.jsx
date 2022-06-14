import {
  Text,
  Flex,
  IconButton,
  Icon,
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
import { motion } from "framer-motion";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa"
import jcMemojiWink from "../img/jc_memoji_wink.png"

function HeaderBar({ sections, handleScrollToSection, scroll, isAtPageTop, pagePosition }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const [ isMobile ] = useMediaQuery("(max-width: 768px)")
  const bg_color = useColorModeValue("white", "gray.900")
  const spring = {
    type: "spring",
    stiffness: 100,
    mass: 0.5,
    damping: 5,
  }
  if(isMobile) {
    return(
      <Flex w="100%" h="64px" px="2" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000" boxShadow={isAtPageTop ? "":"lg"} transition="box-shadow ease-in-out 500ms">
        <Menu>
          <MenuButton as={IconButton} size="sm" aria-label='Options' icon={<FaBars />} variant='ghost' _focus={{ boxShadow: "none", }} />
          <MenuList>
            {
              sections.map((section, index) => {
                return(
                  <MenuItem key={"but_sec_"+index} _focus={{ boxShadow: "none" }} onClick={() => handleScrollToSection(section)}>
                    <Text fontSize="md" fontWeight="600" key={"text_sec_"+index}>{section}</Text>
                  </MenuItem>
                );
              })
            }
          </MenuList>
        </Menu>
        <HStack spacing={2}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px' onClick={() => scroll.scrollTo(0)} cursor="pointer" opacity={isAtPageTop? "0":"1"} transition="opacity ease-in-out 500ms"/>
        </HStack>
        <motion.div transition={spring} whileTap={{rotate: 180, opacity: 0}}>
          <Flex onClick={toggleColorMode} variant={colorMode === "ghost"} _focus={{ boxShadow: "none", }} p="3">
              {
                colorMode === "dark" ? <Icon as={BsMoonFill} color="purple.400" boxSize="4"/> : <Icon as={BsSunFill} color="orange.500" boxSize="5"/>
              }
          </Flex>
        </motion.div> 
      </Flex>
    );
  }
  return (
    <Flex w="100%" h="64px" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000" boxShadow={isAtPageTop ? "":"lg"} transition="box-shadow ease-in-out 500ms">
      <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px' onClick={() => scroll.scrollTo(0)} cursor="pointer"/>
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
        <motion.div transition={spring} whileTap={{rotate: 180, opacity:0}}>
          <IconButton onClick={toggleColorMode} variant={colorMode === "ghost"} _focus={{ boxShadow: "none", }}>
              {
                colorMode === "dark" ? <Icon as={BsMoonFill} color="purple.400" boxSize="5"/> : <Icon as={BsSunFill} color="orange.500" boxSize="6"/>
              }
          </IconButton>
        </motion.div>  
      </HStack>
    </Flex>
  );
}

export default HeaderBar;