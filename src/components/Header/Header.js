import React from 'react';
import { Circle, HStack, Square, Stack, Text, VStack } from '@chakra-ui/react';
import ChakraBox from '../ChakraBox/ChakraBox';
import Edit from '../Edit/Edit';
import { motion, useCycle } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { buttonVariants } from '../Edit/motion';
import { observer } from 'mobx-react-lite';
import listOfCompletedTasks from '../../store/listOfCompletedTasks';
import { toJS } from 'mobx';
import { useDate } from './hooks/useDate';

const Header = observer(() => {
  const [animation, changeAnimation] = useCycle(
    'disableButton',
    'activeButton'
  );

  const { day, month, number } = useDate();

  return (
    <Square pb={'10px'}>
      <VStack spacing={'-15px'} w={'100%'}>
        <Stack
          direction={'row'}
          w={'550px'}
          justifyContent={'space-between'}
          p={30}
          alignItems={'center'}
        >
          <VStack alignItems={'start'}>
            <Text fontSize={30} textStyle={'h1'}>
              {day}, {number} {month}
            </Text>
            <NavLink to={'/completed'}>
              <HStack as={'button'} pl={'0px'}>
                <Text color={'blue'} fontSize={17} textStyle={'h1'}>
                  Completed
                </Text>
                <ChakraBox
                  animate={{ y: [-4, -8] }}
                  textStyle={'h1'}
                  bgColor={'blue'}
                  w={'20px'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  h={'20px'}
                  transition={{ duration: 1.5, yoyo: Infinity }}
                  borderRadius={'50%'}
                  fontSize={10}
                  color={'white'}
                >
                  {toJS(listOfCompletedTasks.tasksList).length || 0}
                </ChakraBox>
              </HStack>
            </NavLink>
          </VStack>
          <Circle
            bgColor={'blue'}
            color={'white'}
            as={motion.button}
            variants={buttonVariants}
            justifyContent={'center'}
            animate={animation}
            onClick={changeAnimation}
            alignItems={'center'}
            size={'50px'}
          >
            <Text fontSize={35} mt={-1.5}>
              +
            </Text>
          </Circle>
        </Stack>
        <Edit buttonToggleStatus={animation} />
      </VStack>
    </Square>
  );
});

export default Header;
