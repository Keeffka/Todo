import React from 'react';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

const CompleteTab = ({ title, time, format }) => {
  return (
    <HStack w={'100%'}>
      <Image w={'20px'} src={'tick2.svg'} />
      <Flex flexDirection={'column'} w={'90%'}>
        <HStack justifyContent={'space-between'}>
          <Text opacity={0.3} textStyle={'p'}>
            {title}
          </Text>
          <Text opacity={0.3} textStyle={'p'}>
            {time}
            {format}
          </Text>
        </HStack>
        <Box
          w={'100%'}
          pos={'relative'}
          top={'-13px'}
          h={'1px'}
          bgColor={'rgba(96,96,101,0.3)'}
        />
      </Flex>
    </HStack>
  );
};

export default CompleteTab;
