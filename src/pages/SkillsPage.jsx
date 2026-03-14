import { Box, Heading, Tag, TagLabel, Wrap, WrapItem, VStack, Text, Divider } from '@chakra-ui/react';
import PageTransition from '../components/PageTransition';

function SkillsPage() {
  const skillGroups = [
    {
      title: 'Programming/Core',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Data/Backend',
      skills: ['DBMS', 'MySQL', 'Data Structure and Algorithms (DSA)']
    },
    {
      title: 'Frontend/UI',
      skills: ['HTML5', 'CSS3', 'Bootstrap 5', 'React']
    },
    {
      title: 'Tools/Other',
      skills: ['Node.js', 'Git & GitHub', 'Responsive Design']
    },
  ];

  const skillTagProps = {
    size: 'lg',
    borderRadius: 'full',
    variant: 'solid',
    colorScheme: 'teal',
    p: 4,
    fontSize: 'md',
    fontWeight: 'normal',
    justifyContent: 'center',
  };

  const groupTitleProps = {
    fontSize: 'xl',
    fontWeight: 'bold',
    color: 'teal.300',
    mb: 3,
    mt: 6,
    alignSelf: 'flex-start',
  };

  return (
    <PageTransition>
      <VStack spacing={10} p={5}>
        <Heading size="xl">Skills</Heading>

        <Box
          w="100%"
          maxW="700px"
          p={8}
          bg="gray.700"
          borderRadius="xl"
          boxShadow="2xl"
        >
          <VStack spacing={4} align="stretch">

            {skillGroups.map((group, index) => (
              <Box key={group.title}>

                <Text {...groupTitleProps}>
                  {group.title}
                </Text>

                <Wrap spacing={3} justify={{ base: 'flex-start', md: 'flex-start' }}>
                  {group.skills.map((skill) => (
                    <WrapItem
                      key={skill}
                      w={skill.includes('(DSA)') ? { base: '100%', sm: 'auto' } : 'auto'}
                    >
                      <Tag
                        {...skillTagProps}
                        w={skill.includes('(DSA)') ? '100%' : 'auto'}
                      >
                        <TagLabel>{skill}</TagLabel>
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                {index < skillGroups.length - 1 && <Divider my={4} borderColor="gray.600" />}

              </Box>
            ))}

          </VStack>
        </Box>
      </VStack>
    </PageTransition>
  );
}

export default SkillsPage;