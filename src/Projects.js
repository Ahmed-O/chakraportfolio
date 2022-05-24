import Project from './Project'
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
} from '@chakra-ui/react';
import { projectData } from './projectData'

function Projects() {
  
    return (
      <Box>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl" pt="25px">
            Projects
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            ...
          </Text>
        </VStack>
        {projectData.map(proj => {
          return <Project key={proj.id} {...proj}></Project>;
        })}
      </Box>
    );
}

export default Projects
