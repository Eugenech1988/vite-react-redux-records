import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Divider from '@mui/material/Divider';
import React from 'react';
import { setSelectedItem, toggleItemActive } from '../../slices/recordSlice';
import { useAppDispatch, useAppSelector } from '../../store/storeHook';

interface IRecordProps {
  index: number,
  title: string,
  text: string,
  active: boolean
}

const Record: React.FC<IRecordProps> = ({index, title, text, active}) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.records.selectedIndex);

  const handleTitleClick = (index: number) => {
    dispatch(toggleItemActive(index));
  };

  //@ts-ignore
  const handleItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> ,index: number) => {
    dispatch(setSelectedItem(index));
    console.log('clicked');
  };
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          selected={selected === index}
          onClick={(event) => handleItemClick(event, index)}
          sx={{padding: '16px', display: 'block', cursor: 'pointer'}}
        >
          <Typography
            onClick={() => handleTitleClick(index)}
            textAlign="center"
            variant="h5"
          >
            {title}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography
              sx={{
                width: '75%',
                display: 'inline-block',
                fontSize: '1.3rem',
                lineHeight: '1.3rem'
              }}>
              {text}
            </Typography>
            <ListItemIcon sx={{marginTop: '-16px'}}>
              {active ?
                <TaskAltIcon/> :
                <HourglassEmptyIcon/>
              }
            </ListItemIcon>
          </Box>
        </ListItemButton>
      </ListItem>
      <Divider/>
    </>
  );
};

export default Record;
