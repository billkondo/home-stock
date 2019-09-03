import React from 'react';
import { TextField, Typography, colors, Grow } from '@material-ui/core';

type Props = {
  label: string;
  value: string;
  name: string;
  error: boolean;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

const CustomTextfield: React.FC<Props> = ({
  label,
  value,
  name,
  error,
  changeText,
  errorMessage
}) => {
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        fullWidth
        label={label}
        value={value}
        onChange={changeText}
        name={name}
        error={error}
      />
      <Grow in={error}>
        <Typography
          align="right"
          style={{ color: colors.red[500] }}
          variant="body2"
        >
          {errorMessage}
        </Typography>
      </Grow>
    </React.Fragment>
  );
};

export default CustomTextfield;
