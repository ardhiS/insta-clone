import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignitems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontsize={12} fontweight={'bold'} color={'gray.500'}>
          Suggested For You
        </Text>
        <Text
          fontsize={12}
          fontweight={'bold'}
          color={'gray.500'}
          _hover={{ color: 'gray.400' }}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name='Ardhi Sasongko'
        followers={1234}
        avatar='https://bit.ly/dan-abramov'
      />
      <SuggestedUser
        name='Ole Sasongko'
        followers={3214}
        avatar='https://bit.ly/code-beast'
      />
      <SuggestedUser
        name='Sasongko'
        followers={4321}
        avatar='https://bit.ly/ryan-florence'
      />

      <Box fontsize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        @2024 Built By
        <Link
          href='https://instagram.com/ardhi_sasongko'
          target='_blank'
          color='blue.500'
          fontSize={14}
        >
          Ardhi Sasongko
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
