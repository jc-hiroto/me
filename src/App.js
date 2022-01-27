import {
  Text,
  Flex,
  IconButton,
  Button,
  Image,
  HStack
} from "@chakra-ui/react";
import { FaArrowDown, FaFacebook, FaGithub } from "react-icons/fa"
import jcMemojiWink from "./img/jc_memoji_wink.png"

function App() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="start">
      <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row" position="absolute">
        <Text fontSize="3xl" fontWeight="700" color="gray.500">James</Text>
        <Flex justifyContent="space-around" alignItems="center">
          <Button variant="ghost"><Text fontSize="md" fontWeight="600" color="gray.500">About</Text></Button>
          <Button variant="ghost"><Text fontSize="md" fontWeight="600" color="gray.500">Experience</Text></Button>
          <Button variant="ghost"><Text fontSize="md" fontWeight="600" color="gray.500">Education</Text></Button>
          <Button variant="ghost"><Text fontSize="md" fontWeight="600" color="gray.500">Projects</Text></Button>
        </Flex>
        <HStack spacing={2}>
          <IconButton icon={<FaFacebook size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://www.facebook.com/james.chang.com.tw/", "_blank")}/>
          <IconButton icon={<FaGithub size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500" onClick={() => window.open("https://github.com/jc-hiroto", "_blank")}/>
        </HStack>
      </Flex>

      <Flex w="100%" h="90vh" pt="5vh" justifyContent="center" alignItems="center" flexDirection="column">
        <HStack spacing={4}>
          <Image src={jcMemojiWink} alt='JC wink memoji' boxSize='128px'/>
          <Text fontSize="8xl" fontWeight="800" color="gray.600">Hi there, I am James. 👋</Text>
        </HStack>
        <Text fontSize="2xl" fontWeight="500" color="gray.400" fontFamily="monospace">a student, dev and photographer.</Text>
        <Text fontSize="5xl" fontWeight="800" color="gray.500" my="4">🚧 under construction 🚧</Text>
      </Flex>
      <IconButton icon={<FaArrowDown size="1.5em"/>} aria-label="GitHub" variant="ghost" color="gray.500"/>
      <Flex w="100%" h="5vh" px="8" justifyContent="space-between" alignItems="center" flexDirection="row">
        <Text fontSize="3xl" fontWeight="700" color="gray.500">me<Text as="sup" style={{fontStyle: "italic"}} fontSize="md" fontWeight="600"> by James</Text></Text>
        <Text fontSize="md" fontWeight="500" color="gray.400" >Copyright © 2022 James Chang. All rights reserved.</Text>
      </Flex>
    </Flex>
  );
}

export default App;
