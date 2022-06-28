import React from 'react';
import { Square, VStack } from '@chakra-ui/react';
import Header from '../Header/Header';
import Todos from '../Todos/Todos';
import { Route, Routes, useLocation } from 'react-router-dom';
import Completed from '../Completed/Completed';
import { AnimatePresence } from 'framer-motion';
import ChakraBox from '../ChakraBox/ChakraBox';

const TodoWrapper = () => {
  const location = useLocation();
  return (
    <Square
      bgColor={'white'}
      minH={'400px'}
      minW={'550px'}
      alignItems={'start'}
      borderRadius={'14px'}
    >
      <VStack overflow={'hidden'}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route
              path={'/'}
              element={
                <>
                  <ChakraBox
                    transition={{ duration: 0.3 }}
                    exit={{ x: '50px', opacity: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <Header />
                    <Todos />
                  </ChakraBox>
                </>
              }
            />

            <Route path={'/completed'} element={<Completed />} />
          </Routes>
        </AnimatePresence>
      </VStack>
    </Square>
  );
};

export default TodoWrapper;
