import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import GoogleAuth from './GoogleAuth';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={'1px solid grey'} borderRadius={4} padding={5}>
        <VStack spacing={4} align={'stretch'}>
          <Image
            src={'/logo.png'}
            h={24}
            alt='Instagram Image'
            cursor={'pointer'}
          />

          {isLogin ? <Login /> : <SignUp />}

          {/* --------------- OR  ----------------- */}
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            my={4}
            gap={1}
            w={'full'}
          >
            <Box flex={2} h={'1px'} bg={'gray.400'} />
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'} />
          </Flex>

          <GoogleAuth />
        </VStack>
      </Box>

      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={'blu.500'}
            cursor='pointer'
          >
            {isLogin ? 'Sign Up' : 'Log in'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
