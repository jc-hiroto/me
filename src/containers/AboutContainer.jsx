import {
  Text,
  Flex,
  HStack,
  useColorModeValue,
  Avatar,
  Spacer,
  VStack,
  Tag,
  Icon,
  chakra,
  Link,
} from "@chakra-ui/react";
import SectionTitle from "../components/SectionTitle";
import NTULogo from "../img/ntu_logo.png";
import CMULogo from "../img/cmu_logo.png";
import TMLogo from "../img/tm_logo.png";
import NCNLogo from "../img/ncn_logo.png";
import AWSLogo from "../img/aws_logo.png";
import TeslaLogo from "../img/tesla_logo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaDownload, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutContainer = ({ name }) => {
  const bg_color = useColorModeValue("gray.50", "#111111");
  const ExpSection = (name, logo, position, time, desc) => {
    return (
      <Flex flexDir={"row"} alignItems={"center"} gap={6} my={3}>
        <Avatar
          src={logo}
          alt={"logo of" + name}
          name={name}
          boxSize={["32px", "48px", "64px"]}
        />
        <Flex flexDirection="column" justifyContent="start" alignItems="start">
          <Text
            fontSize={["xl", "xl", "2xl"]}
            fontWeight="500"
            color={useColorModeValue("gray.800", "gray.200")}
          >
            {name}
          </Text>
          <Text
            fontSize={["sm", "md"]}
            fontWeight="500"
            fontFamily={"mono"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {position}
          </Text>
          <Text
            fontSize={["sm", "md"]}
            fontWeight="400"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {desc}
          </Text>
          <Tag
            color={useColorModeValue("gray.700", "gray.300")}
            size="sm"
            fontFamily={"mono"}
            variant="outline"
            mt={2}
            ml={0.5}
            rounded={"2"}
          >
            {time}
          </Tag>
        </Flex>
      </Flex>
    );
  };
  return (
    <Flex
      id={name}
      w="100%"
      justifyContent="start"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        w="100%"
        minH="85vh"
        justifyContent="start"
        alignItems="start"
        flexDirection="column"
        flexWrap="wrap"
      >
        <Flex
          w="100%"
          py={["16", "32"]}
          px={["8", "24", "28"]}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex
            w="100%"
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
          >
            <HStack spacing="2">
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="600"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Hi
              </Text>
              <motion.div
                initial={{ originY: 0.8, originX: 0.7 }}
                animate={{ rotateZ: [10, -10, 10] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <Text mr="2" fontSize={["3xl", "4xl", "5xl"]} fontWeight="600">
                  👋
                </Text>
              </motion.div>
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="600"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                I'm
              </Text>
              <Text
                fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="700"
                color={useColorModeValue("gray.800", "gray.300")}
              >
                James.
              </Text>
            </HStack>
            <Text
              mt="6"
              mb="4"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="600"
              color={useColorModeValue("gray.500", "gray.500")}
              lineHeight="shorter"
            >
              A
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                Taiwanese 🇹🇼{" "}
              </chakra.span>
              developer based in the
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                Bay Area 🇺🇸
              </chakra.span>
              .
            </Text>
            <Text
              mb="4"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="600"
              color={useColorModeValue("gray.500", "gray.500")}
              lineHeight="shorter"
            >
              I am experienced in
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                Cloud Computing
              </chakra.span>
              ,
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                Full Stack Development
              </chakra.span>
              , and
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                DevOps
              </chakra.span>
              .
            </Text>
            <Text
              mb="4"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="600"
              color={useColorModeValue("gray.500", "gray.500")}
              lineHeight="shorter"
            >
              Recently, I've been working on
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                Python
              </chakra.span>{" "}
              and
              <chakra.span color={useColorModeValue("gray.700", "gray.300")}>
                {" "}
                TypeScript
              </chakra.span>
              .
            </Text>
            <HStack mt="8" spacing={["8", "16"]}>
              <Link href="resume">
                <HStack spacing="2">
                  <Icon
                    as={FaDownload}
                    boxSize={["4", "6"]}
                    color={useColorModeValue("gray.500", "gray.400")}
                  />
                  <Text
                    fontSize={["md", "xl", "3xl"]}
                    fontWeight="600"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    Save my resume
                  </Text>
                </HStack>
              </Link>
              <Link href="linkedin" isExternal>
                <HStack spacing="2">
                  <Icon
                    as={FaLinkedin}
                    boxSize={["4", "6"]}
                    color={useColorModeValue("gray.500", "gray.400")}
                  />
                  <Text
                    fontSize={["md", "xl", "3xl"]}
                    fontWeight="600"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    @jc-hiroto
                  </Text>
                </HStack>
              </Link>
            </HStack>
          </Flex>
        </Flex>
        <Flex
          id="edu/exp"
          w="100%"
          pt="16"
          pb="32"
          px={{ base: "8", md: "16", xl: "36" }}
          flexDirection="row"
          justifyContent={{ base: "space-between" }}
          bg={bg_color}
          flexWrap="wrap"
          gap="8"
        >
          <Flex
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
          >
            <Text
              mb="2"
              fontSize="4xl"
              fontWeight="700"
              fontFamily={"mono"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              Education
            </Text>
            <Flex
              w="100%"
              justifyContent="start"
              alignItems="start"
              flexDirection="column"
            >
              {ExpSection(
                "Carnegie Mellon University",
                CMULogo,
                "M.S. in Software Engineering",
                "Aug. 2022 - Dec. 2023",
                "GPA: 3.95 / 4.0 ・ Mountain View, CA"
              )}
              {ExpSection(
                "National Taiwan University",
                NTULogo,
                "B.S.E in Department of Engineering Science & Ocean Engineering",
                "Sep. 2018 - Jan. 2022",
                "GPA: 4.07 / 4.3 ・ 5 Presidential Awards ・ Taipei, Taiwan"
              )}
            </Flex>
          </Flex>
          <Flex
            justifyContent="start"
            alignItems="start"
            flexDirection="column"
            mr={{ base: "0", md: "16" }}
          >
            <Text
              mb="2"
              fontSize="4xl"
              fontWeight="700"
              fontFamily={"mono"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              Experience
            </Text>
            <Flex
              flexDir={"column"}
              w="100%"
              justifyContent="start"
              alignItems="start"
            >
              {ExpSection(
                "Tesla, Inc.",
                TeslaLogo,
                "Autopilot Software Engineer",
                "Feb. 2024 - Present",
                "ML Infra and full-stack development for Autopilot and Tesla Bot."
              )}
              {ExpSection(
                "Amazon Web Services",
                AWSLogo,
                "Software Engineer Intern",
                "May 2023 - Aug. 2023",
                "Worked on query monitoring at Redshift Distributed System and Cluster Availability team."
              )}
              {ExpSection(
                "Carnegie Mellon University",
                CMULogo,
                "Graduate Research Assistant",
                "Jan. 2023 - Dec. 2023",
                "Distributed System: Maintaining Microservice Systems. Advisor: Leonardo da Silva Sousa."
              )}
              {ExpSection(
                "National Taiwan University - NTUCourse Neo Team",
                NTULogo,
                "Full Stack Developer",
                "Nov. 2021 - Aug. 2022",
                "Worked on next-gen course planning service which assisted 10000+ students."
              )}
              {ExpSection(
                "Trend Micro Inc.",
                TMLogo,
                "SDE Intern → Cloud Development Engineer",
                "Jun. 2021 - Mar. 2022",
                "Worked on backend services in Vision One™ Device Vulnerability Scanning Service team."
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutContainer;
