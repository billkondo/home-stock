import React, { useReducer } from 'react';
import { Grid, Paper, TextField, Box, Button } from '@material-ui/core';

import { Tag } from '../../../../state/tags/types';
import { Props } from './Create';

type State = {
  tag: Tag;
};

type Action = { type: 'CHANGE_TEXT'; name: string; value: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        tag: {
          ...state.tag,
          [action.name]: action.value
        }
      };

    default:
      return state;
  }
};

const initialState: State = {
  tag: {
    name: '',
    description: ''
  }
};

const Create: React.FC<Props> = ({ tagsCreateRequest }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_TEXT',
      name: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = () => {
    tagsCreateRequest(state.tag);
  };

  return (
    <Paper elevation={8}>
      <Box padding={8}>
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <TextField
              label="Nome da Categoria"
              fullWidth
              required
              value={state.tag.name}
              name="name"
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Breve descrição"
              fullWidth
              multiline
              value={state.tag.description}
              name="description"
              onChange={handleChange}
            />
          </Grid>

          <Grid item container justify="flex-end">
            <Button variant="outlined" onClick={handleSubmit}>
              Criar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Create;
