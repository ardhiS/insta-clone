import { Avatar, Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar name='as a programmer' size={'lg'} src='/profilepic.png' />
        <Text fontsize={12} fontweight={'bold'}>
          Ardh sasongko
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={'/auth'}
        fontsize={14}
        fontweight={'medium'}
        color={'blue.400'}
        cursor={'pointer'}
        style={{ textDecoration: 'none' }}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
