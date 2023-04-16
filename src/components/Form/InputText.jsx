import React from 'react';
import { Controller } from 'react-hook-form';
import { styled, TextField } from '@mui/material';

const FormTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#696F79',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#696F79',
  },
  '& .MuiInputLabel-root': {
    color: '#696F79',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#696F79',
    },
    '&:hover fieldset': {
      borderColor: '#696F79',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#696F79',
    },
  },
});

export function InputText({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <FormTextField
          type='text'
          label={label}
          value={value}
          inputRef={ref}
          onChange={onChange}
          margin='normal'
          error={!!error}
          helperText={error ? error.message : ''}
          {...props}
        />
      ))}
    />
  );
}
