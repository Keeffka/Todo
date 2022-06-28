import React from 'react';
import { VStack } from '@chakra-ui/react';
import todoToggle from '../../store/todoToggle';
import { AnimateSharedLayout } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import Todo from './Todo';
import { useStorage } from './hooks/useStorage';
import listOfCompletedTasks from '../../store/listOfCompletedTasks';
const Todos = observer(() => {
  const { data } = useStorage(todoToggle, listOfCompletedTasks);
  return (
    <VStack spacing={5} pb={10} overflow={'hidden'} w={'100%'}>
      <AnimateSharedLayout>
        {data?.map((el, index) => {
          return (
            <Todo
              id={index + 1}
              key={el.titleValue + el.selectValue}
              title={el.titleValue}
              time={el.timeValue}
              format={el.selectValue}
            />
          );
        })}
      </AnimateSharedLayout>
    </VStack>
  );
});

export default Todos;
