import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Button,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { CONFETTI_LIGHT, CONFETTI_DARK } from './confettiData';
import { IconsLogo } from './skillLogos';

export const Footer = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: 'fixed',
      }}
    >
      <Container
        as={Stack}
        minW={'100%'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box></Box>
        <Text
          color={useColorModeValue('gray.700', 'gray.200')}
          fontWeight="700"
        >
          Ahmed Osman ©2022 Made With ChakraUI
        </Text>
        <Stack direction={'row'} alignItems="center">
          <Text
            color={useColorModeValue('gray.700', 'gray.200')}
            fontWeight="500"
            fontSize="lg"
          >
            Icons from Icon8
          </Text>
          <Button
            label={'Icons8'}
            href={'https://icons8.com/'}
            onClick={() => window.open('https://icons8.com/')}
          >
            <Image src={IconsLogo} />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
