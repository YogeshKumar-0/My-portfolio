// src/components/ProjectCard.jsx
import { Box, Heading, Text, Tag, HStack, VStack, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ title, description, imageUrl, tags, liveUrl, codeUrl }) {
  return (
    <VStack
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={4}
      spacing={4}
      align="start"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)', transition: '0.2s' }}
    >
      <Image src={imageUrl} alt={title} borderRadius="md" objectFit="cover" h="200px" w="100%" />
      <Heading size="md">{title}</Heading>
      <Text fontSize="sm">{description}</Text>
      <HStack spacing={2}>
        {tags.map((tag) => (
          <Tag key={tag} colorScheme="teal" size="sm">{tag}</Tag>
        ))}
      </HStack>
      <HStack>
        <Button as={Link} href={liveUrl} isExternal colorScheme="teal" variant="outline" size="sm">
          Live Demo
        </Button>
        <Button as={Link} href={codeUrl} isExternal leftIcon={<FaGithub />} size="sm">
          View Code
        </Button>
      </HStack>
    </VStack>
  );
}

export default ProjectCard;