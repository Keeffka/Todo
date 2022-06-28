import React from 'react';
import TodoWrapper from './components/TodoWrapper/TodoWrapper';
import { Square } from '@chakra-ui/react';

const App = () => {
  return (
    <Square bgColor={'blue'} h={'100vh'}>
      <TodoWrapper />
    </Square>
  );
};

export default App;
