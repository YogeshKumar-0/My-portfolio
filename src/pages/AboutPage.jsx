// src/pages/AboutPage.jsx
import { Container, Heading, Text, VStack, SimpleGrid, Box } from '@chakra-ui/react';
import { FaCamera, FaPlane, FaBook, FaGamepad, FaUtensils } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard'; // Import the component

function AboutPage() {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={12}>
        <Heading as="h1" color="gray.100">About Me</Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
          {/* Replace <Box> with <ThreeDCard> for the text cards */}
          <ThreeDCard>
            <Heading size="md" mb={4} color="brand.500">My Story</Heading>
            <Text fontSize="lg">
              Hello! I'm Yogesh, a passionate web developer...
            </Text>
          </ThreeDCard>
          
          <ThreeDCard>
            <Heading size="md" mb={4} color="brand.500">Hobbies & Interests</Heading>
            <Text fontSize="lg">
              When I'm not coding, I enjoy doing several things.
            </Text>
          </ThreeDCard>
        </SimpleGrid>

        <Box w="100%">
          <Heading size="lg" mb={8} textAlign="center" color="gray.100">My Hobbies</Heading>
          
          <SimpleGrid columns={{ base: 2, md: 5 }} spacing={{ base: 6, md: 8 }}>
            {/* This section with icons remains the same */}
            <Box as="a" textAlign="center" transition="all 0.2s" _hover={{ transform: 'scale(1.1)', color: 'brand.500' }}>
              <VStack>
                <FaCamera size="40px" />
                <Text>Photography</Text>
              </VStack>
            </Box>
            <Box as="a" textAlign="center" transition="all 0.2s" _hover={{ transform: 'scale(1.1)', color: 'brand.500' }}>
              <VStack>
                <FaPlane size="40px" />
                <Text>Traveling</Text>
              </VStack>
            </Box>
            <Box as="a" textAlign="center" transition="all 0.2s" _hover={{ transform: 'scale(1.1)', color: 'brand.500' }}>
              <VStack>
                <FaBook size="40px" />
                <Text>Reading</Text>
              </VStack>
            </Box>
            <Box as="a" textAlign="center" transition="all 0.2s" _hover={{ transform: 'scale(1.1)', color: 'brand.500' }}>
              <VStack>
                <FaGamepad size="40px" />
                <Text>Gaming</Text>
              </VStack>
            </Box>
            <Box as="a" textAlign="center" transition="all 0.2s" _hover={{ transform: 'scale(1.1)', color: 'brand.500' }}>
              <VStack>
                <FaUtensils size="40px" />
                <Text>Cooking</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}

export default AboutPage;