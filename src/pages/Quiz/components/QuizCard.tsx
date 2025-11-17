import { FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import questions from '../questions.json';

const QuizCard = () => {
  return (
    <Stack direction='column' spacing={2}>
      {questions.map((question, index) => (
        <>
          <Typography>
            {index + 1}. {question.question}
          </Typography>
          <Stack direction='column' spacing={2}>
            {question.options.map((answer, index) => (
              <FormControlLabel key={index} control={<Radio />} label={answer} />
            ))}
          </Stack>
        </>
      ))}
    </Stack>
  );
};

export default QuizCard;
