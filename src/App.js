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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import { useInViewport } from 'react-in-viewport';

function App() {

  const ref = useRef(null)
  const {inViewport} = useInViewport(ref, {rootMargin:"-200px"}, {disconnectOnLeave: false},{})


console.log(inViewport)
  return (
    //<ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        {/* <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack> */}
        <Box>
          <Hero></Hero>
        </Box>
      </Grid>
      <Box ref={ref}>
        <SlideFade in={inViewport} offsetY="20px">
          <Skills></Skills>
        </SlideFade>
      </Box>

      <Projects></Projects>
    </Box>
    //</ChakraProvider>
  );
}

export default App;
