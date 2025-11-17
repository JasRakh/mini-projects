import { Button, Stack, Typography } from '@mui/material';
import QuizCard from './QuizCard';
import Timer from './Timer';

const QuizWrapper = () => {
  return (
    <Stack direction='column' spacing={2} alignItems='center' sx={{ background: 'red' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography>КВИЗ</Typography>

        <Timer />
      </Stack>

      <QuizCard />

      <Stack direction='row' spacing={2} alignItems='center'>
        <Button>Назад</Button>
        <Button>Вперед</Button>
      </Stack>
    </Stack>
  );
};

export default QuizWrapper;
