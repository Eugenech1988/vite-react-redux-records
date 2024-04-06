import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../store/storeHook';

const Counter = () => {
  const [completed, setCompleted] = useState<number | null>(null);
  const [pending, setPending] = useState<number | null>(null);
  const records = useAppSelector(state => state.records.recordsList);
  const countItemsByPropertyValue = (array: any[], key: any, value: boolean) => {
    let count = 0;
    array.forEach((item: boolean[]) => {
      if (item[key] === value) {
        count++;
      }
    });
    return count;
  };

  useEffect(() => {
    setCompleted(countItemsByPropertyValue(records, 'active', true));
    setPending(countItemsByPropertyValue(records, 'active', false));
  }, [records]);

  return (
    <Box>
      <Typography>{`Completed: ${completed}`}</Typography>
      <Typography>{`Pending: ${pending}`}</Typography>
    </Box>
  );
};

export default Counter;
