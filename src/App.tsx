import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddRecord from './components/AddRecord';
import RecordsList from './components/RecordsList';

function App() {
  return (
    <Container maxWidth='lg'>
      <Typography textAlign='center' variant='h1'>
        Records
      </Typography>
      <AddRecord/>
      <RecordsList/>
    </Container>
  );
}

export default App;
