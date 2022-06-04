import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  SlideFade,
  theme,
  useColorModeValue,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { CONFETTI_LIGHT, CONFETTI_DARK } from './confettiData';
import { ANIMATED_SHAPES_LIGHT, ANIMATED_SHAPES_DARK } from './shapeData';
import { useInViewport } from 'react-in-viewport';

function App() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: '-200px' },
    { disconnectOnLeave: false },
    {}
  );

  const spin = keyframes`
  from {  background: linear-gradient(to left,  #ffffff, #2980b9); }
  to { background: linear-gradient(to middle,  #ffffff, #2980b9); }
`;
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 5s ease-in`;

  return (
    //<ChakraProvider theme={theme}>
    <Box
      css={{
        backgroundImage: useColorModeValue(
          ANIMATED_SHAPES_LIGHT,
          ANIMATED_SHAPES_DARK
        ),
      }}
      textAlign="center"
      fontSize="xl"
    >
      <Box
        bgColor="#1976d2"
        bg={useColorModeValue(
          'linear-gradient(to top,  #ffffff, #2980b9)',
          'linear-gradient(to top,  #1A202C, #2980b9)'
        )}
        transform="skewY(8deg)"
        transformOrigin="100%"
        minH="100vh"
        minW="100vw"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      ></Box>
      <Box
        bgColor="#1976d2"
        bg={useColorModeValue(
          'linear-gradient(to bottom,  #ffffff, #2980b9)',
          'linear-gradient(to bottom,  #1A202C, #2980b9)'
        )}
        transform="skewY(0deg)"
        transformOrigin="100%"
        minH="100vh"
        minW="100vw"
        position="absolute"
        bottom="0"
        left="0"
        zIndex="-1"
      ></Box>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Box>
          <Hero></Hero>
        </Box>
      </Grid>
      <Box>
        <Skills></Skills>
      </Box>

      <Projects />
      <Contact />
      <Footer />
    </Box>
    //</ChakraProvider>
  );
}

export default App;
