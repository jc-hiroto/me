import {
  Text,
  Flex
} from "@chakra-ui/react";

function App() {
  return (
    <Flex w="100%" h="90vh" my="5vh" justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontSize="8xl" fontWeight="800" color="gray.600">Hi there, I am James. 👋</Text>
      <Text fontSize="2xl" fontWeight="500" color="gray.400" fontFamily="monospace">a student, dev and photographer.</Text>
      <Text fontSize="5xl" fontWeight="800" color="gray.500" my="4">🚧 In construction 🚧</Text>
    </Flex>
  );
}

export default App;
