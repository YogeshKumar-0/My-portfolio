import { Container, Heading, SimpleGrid, Link, Text, HStack, Tag, Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard';

const projects = [
  {
    title: 'Animal Detection App',
    description: 'A Python-based application using the YOLOv5 model to detect animals in images and videos, highlighting my skills in machine learning integration.',
    tags: ['Python', 'YOLOv5', 'OpenCV'],
    codeUrl: 'https://github.com/YogeshKumar-0/Animal-Detection',
  },
  {
    title: 'Original Portfolio',
    description: 'My first portfolio website built with vanilla HTML, CSS, and JavaScript. It showcases my foundational web development skills and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeUrl: 'https://github.com/YogeshKumar-0/First-Portfolio',
  },
];

function ProjectsPage() {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={8} textAlign="center" color="gray.100">
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {projects.map((project, index) => (
          <ThreeDCard key={index}>
            <Heading size="md" mb={4} color="brand.500">{project.title}</Heading>
            <Text mb={4}>{project.description}</Text>
            <HStack spacing={2} mb={4}>
              {project.tags.map((tag) => (
                <Tag key={tag} variant="solid" colorScheme="gray">{tag}</Tag>
              ))}
            </HStack>
            <Button as={Link} href={project.codeUrl} isExternal leftIcon={<FaGithub />}>
              View Code
            </Button>
          </ThreeDCard>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProjectsPage;