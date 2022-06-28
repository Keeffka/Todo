import React from 'react';
import { chakra } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBoxLayout = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const ChakraBox = ({ children, ...rest }) => {
  return <ChakraBoxLayout {...rest}>{children}</ChakraBoxLayout>;
};

export default ChakraBox;
