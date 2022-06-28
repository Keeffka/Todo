import React from 'react';
import ChakraBox from '../ChakraBox/ChakraBox';
import { Button, Circle, Image, Square, VStack } from '@chakra-ui/react';
import CompleteTab from './CompleteTab';
import { observer } from 'mobx-react-lite';
import listOfCompletedTasks from '../../store/listOfCompletedTasks';
import { useCompleted } from './hooks/useCompleted';
import { NavLink } from 'react-router-dom';

const Completed = observer(() => {
  const { tasksData } = useCompleted(listOfCompletedTasks);
  return (
    <ChakraBox
      w={'400px'}
      height={'400px'}
      initial={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <Square
        flexDirection={'column'}
        justifyContent={'space-around'}
        display={'flex'}
        w={'100%'}
        h={'100%'}
        flexDirection={'column'}
      >
        <VStack pt={'30px'} spacing={'10px'} w={'100%'}>
          {tasksData?.map(task => {
            const { titleValue, selectValue, timeValue } = task;
            return (
              <CompleteTab
                key={Math.random()}
                time={timeValue}
                title={titleValue}
                format={selectValue}
              />
            );
          })}
        </VStack>
        <Square>
          <NavLink to={'/'}>
            <Circle
              pos={'relative'}
              transform={'rotate(180deg)'}
              bgColor={'blue'}
              color={'white'}
              size={'40px'}
              as={'button'}
            >
              <Image w={'15px'} src={'arrow.svg'} />
            </Circle>
          </NavLink>
        </Square>
      </Square>
    </ChakraBox>
  );
});

export default Completed;
