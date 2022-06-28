import React, { useState } from 'react';
import {
  Box,
  Circle,
  HStack,
  Image,
  Square,
  Text,
  VStack,
} from '@chakra-ui/react';
import ChakraBox from '../ChakraBox/ChakraBox';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { wrapperVariant } from './motion';
import { useTodo } from './hooks/useTodo';
import { observer } from 'mobx-react-lite';
import listOfCompletedTasks from '../../store/listOfCompletedTasks';
import { useDrag } from './hooks/useDrag';

const Todo = observer(({ title, time, format }) => {
  const [isDone, setDone] = useState(false);

  const dividerController = useAnimation();
  const textController = useAnimation();

  const { onDragHandler } = useDrag(
    {
      titleValue: title,
      timeValue: time,
      selectValue: format,
      id: title + time + format,
    },
    setDone
  );
  const { setClicked, isClicked, removeTask } = useTodo(
    [dividerController, textController],
    setDone,
    listOfCompletedTasks
  );

  return (
    <AnimatePresence>
      {!isDone && (
        <ChakraBox
          layoutId={'box' + Math.random()}
          variants={wrapperVariant}
          initial={'initial'}
          animate={'start'}
          cursor={'pointer'}
          drag={'x'}
          onDrag={(event, info) => onDragHandler(event, info)}
          dragConstraints={{ left: 0, right: -0.1 }}
          exit={'end'}
        >
          <HStack spacing={3}>
            <Square mt={-2.5} alignItems={'start'}>
              {isClicked ? (
                <ChakraBox
                  initial={{
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
                  }}
                  animate={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image w={'20px'} src={'tick2.svg'} />
                </ChakraBox>
              ) : (
                <Circle
                  onClick={() => setClicked(true)}
                  as={'button'}
                  border={'solid 1px rgba(96,96,101, 0.5)'}
                  size={'20px'}
                />
              )}
            </Square>
            <VStack>
              <HStack
                as={motion.div}
                animate={textController}
                justifyContent={'space-between'}
                w={'30vw'}
              >
                <Text opacity={0.6} textStyle={'p'}>
                  {title}
                </Text>
                <Text opacity={0.6} textStyle={'p'}>
                  {time + format}
                </Text>
              </HStack>
              <Box
                as={motion.div}
                onAnimationComplete={() =>
                  removeTask({
                    titleValue: title,
                    timeValue: time,
                    selectValue: format,
                    id: title + time + format,
                  })
                }
                animate={dividerController}
                w={'100%'}
                h={'1px'}
                bgColor={'rgba(96,96,101,0.3)'}
              />
            </VStack>
          </HStack>
        </ChakraBox>
      )}
    </AnimatePresence>
  );
});

export default Todo;
