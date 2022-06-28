import React, { useEffect } from 'react';
import { Button, Grid, GridItem, Input, Select } from '@chakra-ui/react';
import ChakraBox from '../ChakraBox/ChakraBox';
import { useCycle } from 'framer-motion';
import { panelVariants } from './motion';
import { useInput } from './hooks/useInput';
import { getId, updateDataInStorage } from '../../utils';
import todoToggle from '../../store/todoToggle';
import { observer } from 'mobx-react-lite';

const Edit = observer(({ buttonToggleStatus }) => {
  const [animation, changeAnimation] = useCycle('enable', 'disable');
  const { formHandler: titleValueHandler, value: titleValue } = useInput();
  const { formHandler: timeValueHandler, value: timeValue } = useInput();
  const { formHandler: selectValueHandler, value: selectValue } = useInput();

  const submitToStorage = (name, obj) => {
    obj.id = getId(obj);
    updateDataInStorage(name, obj);
    todoToggle.doToggle();
  };

  useEffect(() => {
    changeAnimation();
  }, [buttonToggleStatus]);

  return (
    <ChakraBox
      initial={{ height: '0px' }}
      transition={{ duration: 0.5 }}
      w={'100%'}
      display={'flex'}
      variants={panelVariants}
      animate={animation}
      justifyContent={'start'}
      pl={'30px'}
    >
      <Grid
        overflow={'hidden'}
        templateColumns="repeat(2, 1fr)"
        templateRows={'repeat(3, 1fr)'}
        gap={'10px'}
      >
        <GridItem colSpan={2}>
          <Input
            onChange={event => titleValueHandler(event)}
            placeholder={'Title'}
          />
        </GridItem>
        <GridItem>
          <Input
            onChange={event => timeValueHandler(event)}
            maxLength="5"
            w={'120px'}
            placeholder={'Time'}
          />
        </GridItem>
        <GridItem>
          <Select
            placeholder={'Format'}
            value={selectValue}
            onChange={event => selectValueHandler(event)}
            w={'150px'}
          >
            <option value="pm">pm</option>
            <option value="am">am</option>
          </Select>
        </GridItem>
        <GridItem>
          <Button
            onClick={() =>
              submitToStorage('todoData', {
                titleValue,
                timeValue,
                selectValue,
              })
            }
            color={'blue'}
            variant="outline"
          >
            Add
          </Button>
        </GridItem>
      </Grid>
    </ChakraBox>
  );
});

export default Edit;
