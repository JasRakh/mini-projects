import { Button, Stack, Typography } from '@mui/material';
import QuizCard from './QuizCard';
import Timer from './Timer';
import questions from '../questions.json';
import { useState } from 'react';

const QuizWrapper = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const randomIndex = Math.floor(Math.random() * questions.length);

  const currentQuestion = questions[randomIndex];

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Stack direction='column' spacing={2} alignItems='center' sx={{ background: 'red' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography>КВИЗ</Typography>

        <Timer />
      </Stack>

      <QuizCard key={currentQuestionIndex} question={currentQuestion} />

      <Stack direction='row' spacing={2} alignItems='center'>
        <Button onClick={handlePreviousQuestion}>Назад</Button>
        <Button onClick={handleNextQuestion}>Вперед</Button>
      </Stack>
    </Stack>
  );
};

export default QuizWrapper;
