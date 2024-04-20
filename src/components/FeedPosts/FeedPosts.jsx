import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { useEffect, useState } from 'react';

const FeedPosts = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, i) => (
          <VStack key={i} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size='10' />
              <VStack alignItems={'flex-start'} gap={2}>
                <Skeleton height='10px' w={'200px'} />
                <Skeleton height='10px' w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>Content Wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            username='Ardhisasongko'
            img='/img1.png'
            avatar='/img1.png'
          />
          <FeedPost username='ole' img='/img2.png' avatar='/img2.png' />
          <FeedPost username='Ardhi' img='/img3.png' avatar='/img3.png' />
          <FeedPost username='Sasongko' img='/img4.png' avatar='/img4.png' />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
