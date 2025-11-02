// src/pages/HomePage.jsx
import { Button, Container, HStack, Heading, Text, VStack, Image, SimpleGrid, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function HomePage() {
  return (
    <Container maxW="container.xl" minH="80vh" display="flex" alignItems="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <VStack 
          spacing={6} 
          textAlign={{ base: 'center', md: 'left' }}
          align={{ base: 'center', md: 'start' }}
        >
          <Text color="brand.500" fontSize="lg">
            Hi, my name is
          </Text>
          <Heading as="h1" size={{ base: '2xl', md: '4xl' }} color="gray.100">
            Yogesh Kumar Mallik.
          </Heading>
          <Heading as="h2" size={{ base: 'xl', md: '3xl' }} color="gray.400">
            I build things for the web.
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="xl">
            I'm a passionate frontend developer dedicated to building intuitive and beautiful user experiences.
          </Text>
          <HStack spacing={4} pt={4} justifyContent={{ base: 'center', md: 'flex-start' }}>
            <RouterLink to="/projects">
              <Button 
                colorScheme="brand" 
                variant="outline"
                color="brand.500"
                borderColor="brand.500"
                size="lg"
                _hover={{ bg: 'rgba(100, 255, 218, 0.1)' }}
              >
                Check out my projects!
              </Button>
            </RouterLink>
          </HStack>
        </VStack>
        <Box>
          <Image
            src="/Profile-pic.jpg"
            alt="Yogesh Kumar Mallik"
            borderRadius="full"
            boxSize={{ base: '250px', md: '350px' }}
            mx="auto"
            objectFit="cover"
            border="4px"
            borderColor="brand.500"
            boxShadow="0 0 30px rgba(100, 255, 218, 0.3)"
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}

export default HomePage;