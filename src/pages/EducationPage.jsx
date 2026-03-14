// src/pages/EducationPage.jsx
import { Container, Heading, VStack, Text } from '@chakra-ui/react';
import ThreeDCard from '../components/ThreeDCard'; // Import the component
import PageTransition from '../components/PageTransition';

const educationData = [
  {
    degree: 'B.Tech (Computer Science and Engineering)',
    institution: 'Pimpri Chinchwad University',
    years: '2023 - 2027',
    score: '7.5 CGPA',
  },
  {
    degree: 'Higher Secondary Schooling',
    institution: 'D.A.V. Public School, Bariatu, Ranchi',
    years: '2021 - 2023',
    score: '77%',
  },
  {
    degree: 'Secondary Schooling',
    institution: 'D.A.V. Public School, Bariatu, Ranchi',
    years: '2011 - 2021',
    score: 'N/A',
  },
];

function EducationPage() {
  return (
    <PageTransition>
      <Container maxW="container.md" py={10}>
        <VStack spacing={8}>
          <Heading as="h1" color="gray.100">Education</Heading>
          {educationData.map((edu, index) => (
            // Replace <Box> with <ThreeDCard>
            <ThreeDCard key={index}>
              <Heading fontSize="xl" color="brand.500">{edu.degree}</Heading>
              <Text mt={2} fontWeight="bold" color="gray.200">{edu.institution}</Text>
              <Text mt={2} color="gray.400">{edu.years}</Text>
              <Text mt={2}>Grade/Score: {edu.score}</Text>
            </ThreeDCard>
          ))}
        </VStack>
      </Container>
    </PageTransition>
  );
}

export default EducationPage;