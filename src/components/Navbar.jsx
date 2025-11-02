import {Box, Flex, HStack, Heading, Link, IconButton, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  // Hook to manage the state of the mobile menu (isOpen, onOpen, onClose)
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Define the set of navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'About', path: '/about' },
  ];

  const linkStyles = {
    _hover: { color: 'brand.500', transform: 'scale(1.1)' },
    transition: 'all 0.2s ease-in-out',
  };

  return (
    <Box
      bg="rgba(10, 25, 47, 0.85)"
      backdropFilter="blur(8px)"
      px={8}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex="banner"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Site Title / Brand */}
        <Heading size="md" color="brand.500" minW="max-content">Yogesh Kumar Mallik</Heading>

        {/* 1. Desktop Navigation Links (Visible only on large screens) */}
        <Box 
          flexGrow={1} 
          textAlign="center" 
          display={{ base: 'none', md: 'block' }} // Hide on mobile
        >
        <HStack
          as={'nav'}
          spacing={6}
          justifyContent="center"
          // Hides the horizontal menu on small screens ('base')
          display="inline-flex"
        >
          {navLinks.map((link) => (
            <Link key={link.name} as={RouterLink} to={link.path} {...linkStyles}>
              {link.name}
            </Link>
          ))}
        </HStack>
        </Box>

        {/* 2. Mobile Menu Icon (Visible only on small screens) */}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          // Shows the icon on small screens ('base')
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen} // This will trigger the Drawer to open
        />
      </Flex>

      <Box 
        display={{ base: 'none', md: 'block' }} 
        minW="max-content"
      />

      {/* 3. Mobile Collapsible Menu (The Drawer) */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        {/* Set background to match your design */}
        <DrawerContent bg="rgba(10, 25, 47, 0.95)">
          <DrawerCloseButton />
          {/* Use VStack for the vertical list of links */}
          <VStack
            align="left"
            spacing={4}
            p={8}
            pt={12} // Give some extra top padding
            onClick={onClose} // Closes the drawer when a link is clicked
          >
            {navLinks.map((link) => (
              <Link key={link.name} as={RouterLink} to={link.path} fontSize="xl" {...linkStyles}>
                {link.name}
              </Link>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;