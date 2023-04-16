import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  styled,
  Stack,
  Container,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import BasicText from '../components/styled/BasicText';
import BasicButton from '../components/styled/BasicButton';
import { quizRules } from '../components/constants/rules';
import { quizesThunks } from '../store/modules/quizes';
import { InputText } from '../components/Form/InputText';

const FormStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const FormStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {},
  '& > *:last-of-type': {
    marginBottom: theme.spacing(4),
  },
}));

const Create = () => {
  const { control, handleSubmit, getValues } = useForm();
  const dispatch = useDispatch();
  const onSubmit = () => {
    (async () => {
      await dispatch(quizesThunks.postQuiz(getValues()));
    })();
  };

  return (
  <Container maxWidth="lg" sx={{ p: '30px 24px' }}>
    <FormStyled>
      <FormStack>
        <BasicText variant='h3' textAlign='center'>
          Make Your Own Quiz
        </BasicText>
        <InputText
          fullWidth
          required
          control={control}
          rules={quizRules.quizName}
          name='name'
          label='Quiz Name'
          variant='outlined'
          />
         <InputText
          fullWidth
          required
          control={control}
          rules={quizRules.description}
          name='description'
          label='Quiz Description'
          variant='outlined'
          />
          <InputText
          fullWidth
          required
          control={control}
          rules={quizRules.image}
          name='image'
          label='Quiz image'
          variant='outlined'
          />
        <BasicButton fullWidth onClick={handleSubmit(onSubmit)}>
          Add New
        </BasicButton>
      </FormStack>
    </FormStyled>
    </Container>
  );
};

export default Create;
