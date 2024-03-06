import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useAppDispatch } from '../../store/storeHook';
import { addRecord, clearRecordsList } from '../../slices/recordSlice';
import { MAX_RECORD_SIZE } from '../../constants';


const AddRecord: React.FC = () => {
  const [titleError, setTitleError] = useState<string | null>(null);
  const [textError, setTextError] = useState<string | null>(null);
  const [title, setTitle] = useState<String>('');
  const [text, setText] = useState<String>('');
  const [success, setSuccess] = useState(false);

  const dispatch = useAppDispatch();

  const handleTitleChange = (e) => {
    const {value} = e.target;
    setTitleError(null);
    setTitle(value);
  };

  const handleTextChange = (e) => {
    const {value} = e.target;
    setTextError(null);
    setText(value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
    }
  };

  const handleAddClick = (e) => {
    e.preventDefault();

    setTitleError(null);
    setTextError(null);

    if ((text.length <= MAX_RECORD_SIZE) && (text.length > 0) && (title.length > 0)) {
      dispatch(addRecord({title, text}));
      setText('');
      setTitle('');
      setSuccess(true);
    }

    if (text.length > MAX_RECORD_SIZE) {
      setTextError(`Record can not be more ${MAX_RECORD_SIZE}`);
    }

    if (text.length === 0) {
      setTextError('Text can not be empty');
      setSuccess(false);
    }

    if (title.length === 0) {
      setTitleError('Title can not be empty');
      setSuccess(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography
        textAlign="center"
        variant="h3"
        sx={{
          marginBottom: '15px'
        }}
      >
        Create record
      </Typography>
      <form>
        <TextField
          sx={{marginBottom: '15px'}}
          error={titleError !== null}
          fullWidth
          value={title}
          onChange={handleTitleChange}
          onKeyPress={handleEnterPress}
          label="Record title"
          helperText={titleError}
        />
        <TextField
          sx={{marginBottom: '15px'}}
          error={textError !== null}
          fullWidth
          value={text}
          onChange={handleTextChange}
          onKeyPress={handleEnterPress}
          label="Record text"
          helperText={textError}
        />
        <Button
          sx={{height: '56px', fontSize: '1rem', marginBottom: '15px'}}
          fullWidth
          onClick={handleAddClick}
          variant="contained"
          type="submit"
        >
          add record
        </Button>
        {success &&
          <Alert sx={{marginBottom: '15px'}} icon={<CheckIcon fontSize="inherit"/>}>Record has been created successful</Alert>
        }
      </form>
    </Container>
  );
};

export default AddRecord;
