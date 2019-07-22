import React, { useReducer } from 'react';
import { Grid, Paper, TextField, Box, Button, colors } from '@material-ui/core';
import { isEmpty } from 'lodash';

import { Tag } from '../../../../state/tags/types';
import { Props } from './Create';
import { validateTag } from './state_validator';

export const maxLength = {
  name: 30,
  description: 70
};

export type ErrorsType = {
  name?: string;
  description?: string;
};

type State = {
  tag: Tag;
  errors?: ErrorsType;
};

type Action =
  | { type: 'CHANGE_TEXT'; name: string; value: string; errors: ErrorsType }
  | { type: 'SET_ERRORS'; errors: ErrorsType };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        tag: {
          ...state.tag,
          [action.name]: action.value
        },
        errors: action.errors
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
};

const initialState: State = {
  tag: {
    name: '',
    description: ''
  },
  errors: {}
};

const Create: React.FC<Props> = ({ tagsCreateRequest }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errors = validateTag(
      {
        ...state.tag,
        [e.target.name]: e.target.value
      },
      'EDITING'
    );

    dispatch({
      type: 'CHANGE_TEXT',
      name: e.target.name,
      value: e.target.value,
      errors
    });
  };

  const handleSubmit = () => {
    const errors = validateTag(state.tag, 'SUBMITTING');

    if (isEmpty(errors)) {
      tagsCreateRequest(state.tag);
    } else {
      dispatch({
        type: 'SET_ERRORS',
        errors
      });
    }
  };

  const isNameInvalid = !!state.errors && !!state.errors.name;

  const isDescriptionInvalid = !!state.errors && !!state.errors.description;

  return (
    <Paper elevation={8}>
      <Box padding={8}>
        <Grid container direction="column" spacing={5}>
          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <TextField
                label="Nome da Categoria"
                fullWidth
                required
                value={state.tag.name}
                name="name"
                onChange={handleChange}
                error={isNameInvalid}
                helperText={!!state.errors ? state.errors.name : ''}
                color="red"
                InputProps={{
                  style: {
                    color: isNameInvalid ? colors.red[800] : colors.grey[800]
                  }
                }}
              />
            </Grid>

            <Grid
              item
              container
              justify="flex-end"
              spacing={1}
              style={{
                color: isNameInvalid ? colors.red[800] : colors.grey[800]
              }}
            >
              <Grid item>{state.tag.name.length}</Grid>

              <Grid item>/</Grid>

              <Grid item>{maxLength.name}</Grid>
            </Grid>
          </Grid>

          <Grid item container direction="column" spacing={1}>
            <Grid item>
              <TextField
                label="Breve descrição"
                fullWidth
                multiline
                value={state.tag.description}
                name="description"
                onChange={handleChange}
                error={isDescriptionInvalid}
                helperText={!!state.errors ? state.errors.description : ''}
                rowsMax={4}
                InputProps={{
                  style: {
                    color: isDescriptionInvalid
                      ? colors.red[800]
                      : colors.grey[800]
                  }
                }}
              />
            </Grid>

            <Grid
              item
              container
              spacing={1}
              justify="flex-end"
              style={{
                color: isDescriptionInvalid ? colors.red[800] : colors.grey[800]
              }}
            >
              <Grid item>
                {!!state.tag.description ? state.tag.description.length : 0}
              </Grid>

              <Grid item>/</Grid>

              <Grid item>{maxLength.description}</Grid>
            </Grid>
          </Grid>

          <Grid item container justify="flex-end">
            <Button variant="contained" onClick={handleSubmit}>
              Criar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Create;
