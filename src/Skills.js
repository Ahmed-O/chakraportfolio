import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaCheckCircle, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiCplusplus,
  SiRedux,
  SiChakraui,
  SiGit,
  SiMysql,
} from 'react-icons/si';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { CONFETTI_LIGHT, CONFETTI_DARK } from './confettiData';
import {
  SQLLogo,
  ChakraUILogo,
  GoogleCloudLogo,
  ReactLogo,
  JavasriptLogo,
  ChromeLogo,
} from './skillLogos';

// function PriceWrapper({ children }: { children: ReactNode }) {
function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', xl: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      w={{
        base: '350px',
        sm: '450px',
        md: '740px',
        xl: '380px',
        '2xl': '400px',
      }}
    >
      {children}
    </Box>
  );
}

function Skills() {
  return (
    <Box
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
      minH="100vh"
      py={12}
      id="Skills"
    >
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Skills
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          ...
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
        // w={{ sm: '100%', md: '100%' }}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Libraries/Frameworks
            </Text>
            {/* <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack> */}
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem display={'flex'} gap={'10px'}>
                {/* <ListIcon as={FaReact} color="blue.500" boxSize={10} /> */}
                <Image
                  src={useColorModeValue('./images/react.gif', ReactLogo)}
                  boxSize={10}
                />
                React
              </ListItem>
              <ListItem display={'flex'}>
                <ListIcon as={SiRedux} color="purple.500" boxSize={10} />
                Redux
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <Image src={ChakraUILogo} boxSize={10} />
                ChakraUI
              </ListItem>
            </List>
            {/* <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box> */}
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            {/* <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box> */}
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Languages
              </Text>
              {/* <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack> */}
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12} fontWeight="500">
                <ListItem display={'flex'}>
                  <ListIcon as={FaHtml5} color="orange.500" boxSize={10} />
                  HTML
                </ListItem>
                <ListItem display={'flex'}>
                  <ListIcon as={FaCss3Alt} color="blue.500" boxSize={10} />
                  CSS
                </ListItem>
                <ListItem display={'flex'} gap={'10px'}>
                  {/* <ListIcon as={SiJavascript} color="yellow.400" boxSize={10} /> */}
                  <Image
                    src={useColorModeValue(
                      './images/javascript.gif',
                      JavasriptLogo
                    )}
                    boxSize={10}
                  />
                  Javascript
                </ListItem>
                <ListItem display={'flex'}>
                  <ListIcon as={SiCplusplus} color="blue.500" boxSize={10} />
                  C++
                </ListItem>
                <ListItem display={'flex'} gap={'10px'}>
                  {/* <ListIcon as={SiMysql} color="brown.500" boxSize={12} /> */}
                  <Image src={SQLLogo} boxSize={10} />
                  SQL
                </ListItem>
              </List>
              {/* <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box> */}
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Developer Tools
            </Text>
            {/* <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack> */}
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem display={'flex'}>
                <ListIcon as={SiGit} color="orange.400" boxSize={10} />
                Git/Github
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <Image
                  src={useColorModeValue('/images/chrome.gif', ChromeLogo)}
                  boxSize={10}
                />
                Chrome Dev Tools
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <Image src={GoogleCloudLogo} boxSize={10} />
                Google Cloud Platform
              </ListItem>
            </List>
            {/* <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box> */}
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}

export default Skills;

