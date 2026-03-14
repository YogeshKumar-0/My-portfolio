// src/pages/HomePage.jsx
import { Button, Container, HStack, Heading, Text, VStack, Image, SimpleGrid, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from "framer-motion";
import PageTransition from '../components/PageTransition';

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

function HomePage() {
  return (
    <PageTransition>
      <Container maxW="container.xl" minH="80vh" display="flex" alignItems="center">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <MotionVStack
            spacing={6}
            textAlign={{ base: 'center', md: 'left' }}
            align={{ base: 'center', md: 'start' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                <MotionButton
                  colorScheme="brand"
                  variant="outline"
                  color="brand.500"
                  borderColor="brand.500"
                  size={{ base: "md", md: "lg" }}
                  px={8}
                  py={6}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  _hover={{
                    bg: "rgba(100,255,218,0.1)",
                    boxShadow: "0 0 15px rgba(100,255,218,0.6)"
                  }}
                >
                  Check out my projects!
                </MotionButton>
              </RouterLink>
            </HStack>
          </MotionVStack>
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
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
          </MotionBox>
        </SimpleGrid>
      </Container>
    </PageTransition>
  );
}

export default HomePage;