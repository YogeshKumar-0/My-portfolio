// src/pages/CertificatesPage.jsx
import { Container, Heading, VStack, Link, Icon, Text } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ThreeDCard from '../components/ThreeDCard'; // Import the component

const certificateData = [
  {
    name: 'Blockchain Specialization Certificate - Coursera',
    url: 'https://coursera.org/verify/specialization/41LNBIK6BJ3G',
  },
  {
    name: 'Software Engineering Specialization Certificate - Coursera',
    url: 'https://coursera.org/verify/specialization/SL67DW63RDI8',
  },
  {
    name: 'RedHat Application Development Certificate',
    url: '/RedHat_Application_Development.pdf',
  },
  {
    name: 'Animal Detection Project using Python & yolov5',
    url: 'https://github.com/YogeshKumar-0/Animal-Detection',
  },
];

function CertificatesPage() {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" color="gray.100">Certificates & Projects</Heading>
        {certificateData.map((cert, index) => (
          <Link
            key={index}
            href={cert.url}
            isExternal
            w="100%"
            _hover={{ textDecoration: 'none' }}
          >
            {/* Replace the inner <Box> with <ThreeDCard> */}
            <ThreeDCard
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontWeight="medium" color="gray.200">{cert.name}</Text>
              <Icon as={FaExternalLinkAlt} color="gray.400" />
            </ThreeDCard>
          </Link>
        ))}
      </VStack>
    </Container>
  );
}

export default CertificatesPage;