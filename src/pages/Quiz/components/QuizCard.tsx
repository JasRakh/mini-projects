import { FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import type { IQuestion } from '../types';

interface IQuizCardProps {
  question: IQuestion;
}

const QuizCard = ({ question }: IQuizCardProps) => {
  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        {question.id}. {question.question}
      </Typography>
      <Stack direction='column' spacing={2}>
        {question.options.map((answer, index) => (
          <FormControlLabel key={index} control={<Radio />} label={answer} />
        ))}
      </Stack>
    </Stack>
  );
};

export default QuizCard;
