import { useState } from 'react';
import { useAppDispatch } from '../../store/storeHook';
import { setSelectedFilter } from '../../slices/recordSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Filters = () => {
  const dispatch = useAppDispatch();
  const [contained, setContained] = useState<number>(0);

  const handleFilterBtnClick = (index: number) => {
    setContained(index);
    if (index === 0) {
      dispatch(setSelectedFilter('all'))
    } else if (index === 1) {
      dispatch(setSelectedFilter('completed'))
    } else {
      dispatch(setSelectedFilter('current'))
    }
  }
  return (
    <ButtonGroup>
      <Button onClick={() => handleFilterBtnClick(0)} variant={(contained === 0) ? 'contained': 'outlined'}>all</Button>
      <Button onClick={() => handleFilterBtnClick(1)} variant={(contained === 1) ? 'contained': 'outlined'}>completed</Button>
      <Button onClick={() => handleFilterBtnClick(2)} variant={(contained === 2) ? 'contained': 'outlined'}>current</Button>
    </ButtonGroup>
  );
};

export default Filters;
