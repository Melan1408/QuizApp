import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  RadioGroup,
  Box,
  Radio,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import BasicText from './styled/BasicText';
import BasicButton from './styled/BasicButton';

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
          <BasicText variant="h5" component="div" marginTop='10px'>
            Question {questionNumber}
          </BasicText>
          <BasicText sx={{ mb: 1.5, fontWeight: '600' }} variant="h5">
            {question.title}
          </BasicText>
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
          <BasicButton disabled={!value} onClick={handleSubmit} fullWidth >
            Submit
          </BasicButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default QuestionCard;
