import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Record from '../Record';
import Filters from '../Filters';
import Counter from '../Counter';
import { setSelectedItem } from '../../slices/recordSlice';
import { useAppDispatch, useAppSelector } from '../../store/storeHook';

const RecordsList: React.FC = () => {
  const [filteredList, setFilteredList] = useState<object>([]);
  const recordsList = useAppSelector(state => state.records.recordsList);
  const selectedItem = useAppSelector(state => state.records.selectedIndex);
  const currentFilter = useAppSelector(state => state.records.selectedFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedItem(null));
  }, []);

  useEffect(() => {
    let filteredRecords = [...recordsList];

    if (currentFilter === 'all') {
      filteredRecords = recordsList;
    }

    if (currentFilter === 'completed') {
      filteredRecords = filteredRecords.filter(record => record.active === true);
    }

    if (currentFilter === 'current') {
      filteredRecords = filteredRecords.filter((record, index) => index === selectedItem)
    }

    setFilteredList(filteredRecords);
  }, [currentFilter, recordsList, selectedItem]);

  return (
    <>
      <Typography textAlign="center" variant="h3">Records list</Typography>
      <Box paddingTop="10px" paddingBottom="10px" display="flex" justifyContent="space-between">
        <Filters/>
        <Counter/>
      </Box>
      <List disablePadding>
        {filteredList.map((record, index) => (
            <Record
              key={index}
              title={record.title}
              text={record.text}
              active={record.active}
              index={index}
            />
          )
        )}
      </List>
    </>
  );
};

export default RecordsList;
