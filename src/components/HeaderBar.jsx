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
import { FaBars, FaDownload } from "react-icons/fa"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import jcMemojiWink from "../img/jc_memoji_wink.png"

function HeaderBar({ sections, isAtPageTop, pagePosition }) {
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
      <Flex w="100%" h="64px" px="2" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000">
        <Menu>
          <MenuButton as={IconButton} size="sm" aria-label='Options' icon={<FaBars />} variant='ghost' _focus={{ boxShadow: "none", }} />
          <MenuList>
            {
              sections.map((section, index) => {
                return(
                  <HashLink key={index} to={`#${section}`} smooth>
                    <MenuItem key={"but_sec_"+index} _focus={{ boxShadow: "none" }}>
                      <Text fontSize="md" fontWeight="600" key={"text_sec_"+index}>{section}</Text>
                    </MenuItem>
                  </HashLink>
                );
              })
            }
            <Link to="resume">
              <MenuItem _focus={{ boxShadow: "none" }}>
                <HStack>
                  <Text fontSize="md" fontWeight="600">resume</Text>
                  <FaDownload />
                </HStack>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <HashLink to="/#top" smooth>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px' cursor="pointer" opacity={isAtPageTop? "0":"1"} transition="opacity ease-in-out 500ms"/>
        </HashLink>
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
    <Flex w="100%" h="64px" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="fixed" bg={bg_color} zIndex="1000">
      <HashLink to="/#top" smooth>
        <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='32px' cursor="pointer"/>
      </HashLink>
      <HStack spacing={8}>
        {
          sections.map((section, index) => {
            return(
              <HashLink key={"but_sec_"+index} to={"#"+section} smooth>
                <Text fontSize="md" fontWeight="700" key={"text_sec_"+index} _hover={{textDecoration: "underline"}}>{section}</Text>
              </HashLink>
            );
          })
        }
        <Link to="resume">
          <HStack>
            <Text fontSize="md" fontWeight="700" _hover={{textDecoration: "underline"}}>resume</Text>
            <FaDownload />
          </HStack>
        </Link>
      </HStack>
      <HStack spacing={2}>
        <motion.div transition={spring} whileTap={{rotate: 180, opacity:0}} whileHover={{scale: 1.1}}>
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