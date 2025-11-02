// src/components/Footer.jsx
import { Box, Text, Link, HStack, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box as="footer" py={6} px={8} mt={10}>
      <VStack spacing={4}>
        <HStack spacing={6}>
          <Link href="https://github.com/YogeshKumar-0" isExternal _hover={{ color: 'brand.500', transform: 'scale(1.2)' }} transition="all 0.2s">
            <FaGithub size="24px" />
          </Link>
          <Link href="https://www.linkedin.com/in/yogesh-kumar-mallik-1254281b2/" isExternal _hover={{ color: 'brand.500', transform: 'scale(1.2)' }} transition="all 0.2s">
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://instagram.com/yogesh_kumar.05" isExternal _hover={{ color: 'brand.500', transform: 'scale(1.2)' }} transition="all 0.2s">
            <FaInstagram size="24px" />
          </Link>
        </HStack>
        <Text fontSize="sm" color="gray.500">&copy; 2025 Yogesh Kumar Mallik. All rights reserved.</Text>
      </VStack>
    </Box>
  );
}

export default Footer;