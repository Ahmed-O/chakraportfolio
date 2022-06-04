// import Head from 'next/head';


import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  Link,
  createIcon,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';
import { CONFETTI_LIGHT, CONFETTI_DARK } from './confettiData';
import { SHAPES_LIGHT } from './shapeData';

function Hero() {
  const ref = useRef(null);
  const { scrollTo } = useSmoothScroll({
    ref,
  });

  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <Container
        css={{
          backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
          backgroundAttachment: 'fixed',
        }}
        maxW={'3xl'}
      >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            I'm Ahmed Osman <br />
            <Text as={'span'} color={'blue.400'}>
              This is my portfolio
            </Text>
          </Heading>
          <Text
            color={useColorModeValue('gray.800', 'gray.500')}
            fontWeight={500}
          >
            I'm an aspiring software developer currently looking for work as an
            entry level developer. Please feel free to check out my portfolio
            and let me know if I would be a good fit.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'blue'}
              bg={'blue.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => {
                window.open('Resumev1.pdf');
              }}
              ref={ref}
            >
              <Link> View Resume</Link>
            </Button>
            {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


export default Hero;