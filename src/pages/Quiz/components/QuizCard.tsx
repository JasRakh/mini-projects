import { FormControlLabel, Radio, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import questions from '../questions.json';

const QuizCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Stack direction='column' spacing={2}>
      <Typography>
        {currentQuestionIndex + 1}. {currentQuestion.question}
      </Typography>
      <Stack direction='column' spacing={2}>
        {currentQuestion.options.map((answer, index) => (
          <FormControlLabel key={index} control={<Radio />} label={answer} />
        ))}
      </Stack>
    </Stack>
  );
};

export default QuizCard;
