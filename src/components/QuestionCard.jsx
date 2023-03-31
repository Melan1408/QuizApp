import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  RadioGroup,
  Button,
  Typography,
  Box,
  Radio,
  FormControlLabel,
  FormControl,
  styled,
} from '@mui/material';

const Text = styled(Typography)(() => ({
  fontFamily: 'Poppins',
  fontWeight: '400',
  color: '#696F79',
}));

const QuestionCard = ({
  question,
  questionNumber,
  submitAnswer,
}) => {
  const [value, setValue] = useState(null);

  const handleChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    submitAnswer(value);
    setValue(null);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
                <Text variant="h5" component="div" marginTop='10px'>
            Question {questionNumber}
          </Text>
          <Text sx={{ mb: 1.5, fontWeight: '600' }} variant="h5">
            {question.title}
          </Text>
          <FormControl>
            <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio}>
              {question.options.map((option, index) => <FormControlLabel sx={{
                fontFamily: 'Poppins',
                fontWeight: '400',
                color: '#696F79',
              }}
              key={index + 1} value={index + 1} control={<Radio />} label={option.description} />)}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button disabled={!value} onClick={handleSubmit} fullWidth sx={{
            p: '7px 22px',
            color: '#696F79',
            background: 'white',
            borderRadius: '12px',
            fontFamily: 'Poppins',
            fontWeight: '600',
            border: '2px solid #696F79',
            ':hover': { color: 'white', background: '#696F79' },
          }}>Submit</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default QuestionCard;
