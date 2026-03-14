// src/components/ProjectCard.jsx
import { Box, Heading, Text, Tag, HStack, VStack, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";
const MotionCard = motion(VStack);

function ProjectCard({ title, description, imageUrl, tags, liveUrl, codeUrl }) {
  return (
    <MotionCard
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={4}
      spacing={4}
      align="start"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
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
    </MotionCard>
  );
}

export default ProjectCard;