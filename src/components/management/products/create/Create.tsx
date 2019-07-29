import React, { useReducer } from 'react';
import { Paper, Grid, TextField, Box, Button } from '@material-ui/core';

import Tags from './tags/Tags';

type State = {
  name: string;
  description: string;
  isTagsMenuOpen: boolean;
};

type Action =
  | { type: 'CHANGE_TEXT'; value: string; name: string }
  | {
      type: 'TOGGLE_MENU';
      flag: boolean;
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        [action.name]: action.value
      };

    case 'TOGGLE_MENU':
      return {
        ...state,
        isTagsMenuOpen: action.flag
      };

    default:
      return state;
  }
};

const initialState: State = {
  name: '',
  description: '',
  isTagsMenuOpen: false
};

const Create = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_TEXT',
      name: e.target.name,
      value: e.target.value
    });
  };

  const toggleMenu = (flag: boolean) => () => {
    dispatch({
      type: 'TOGGLE_MENU',
      flag
    });
  };

  return (
    <Paper elevation={8}>
      <Box padding={8}>
        <Grid container direction="column" spacing={6}>
          <Grid item>
            <TextField
              label="Nome"
              fullWidth
              value={state.name}
              name="name"
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <TextField
              label="Descrição"
              fullWidth
              multiline
              value={state.description}
              name="description"
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <Tags
              isTagsMenuOpen={state.isTagsMenuOpen}
              openMenu={toggleMenu(true)}
              closeMenu={toggleMenu(false)}
            />
          </Grid>

          <Grid item container justify="flex-end">
            <Button variant="outlined">Criar</Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Create;
