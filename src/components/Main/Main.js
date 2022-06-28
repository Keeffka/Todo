import React from 'react';
import Header from '../Header/Header';
import Todos from '../Todos/Todos';
import ChakraBox from '../ChakraBox/ChakraBox';

const Main = () => {
  return (
    <ChakraBox>
      <Header />
      <Todos />
    </ChakraBox>
  );
};

export default Main;
