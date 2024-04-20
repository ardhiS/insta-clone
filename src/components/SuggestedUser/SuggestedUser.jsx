import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} ga={2}>
        <Avatar src={avatar} name={name} size={'md'}></Avatar>
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontsize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontsize={11} color={'gray.500'}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontsize={13}
        bg={'transparent'}
        p={'max-content'}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        _hover={{ color: 'white' }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
