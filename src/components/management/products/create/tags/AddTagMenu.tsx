import React, { useReducer } from 'react';
import {
  Dialog,
  Grid,
  Typography,
  Divider,
  Button,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import TagsList from './TagsList';

import { Tag } from '../../../../../models/tag';

type Props = {
  isOpen: boolean;
  close: () => void;
};

type State = {
  tags: Array<Tag>;
};

type Action =
  | {
      type: 'ADD_TAG';
      tag: Tag;
    }
  | {
      type: 'REMOVE_TAG';
      tag: Tag;
    }
  | {
      type: 'CLEAR_TAGS';
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TAG':
      return {
        tags: state.tags.concat(action.tag)
      };

    case 'REMOVE_TAG':
      return {
        tags: state.tags.filter(tag => action.tag.name !== tag.name)
      };

    case 'CLEAR_TAGS':
      return {
        tags: []
      };

    default:
      return state;
  }
};

const initialState: State = {
  tags: []
};

const AddTagMenu: React.FC<Props> = ({ isOpen, close }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTag = (tag: Tag) => {
    dispatch({
      type: 'ADD_TAG',
      tag
    });
  };

  const removeTag = (tag: Tag) => {
    dispatch({
      type: 'REMOVE_TAG',
      tag
    });
  };

  const clearTags = () => {
    dispatch({
      type: 'CLEAR_TAGS'
    });
  };

  const submit = () => {
    console.log('ADD');
  };

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      maxWidth={'md'}
      fullWidth
      scroll="body"
    >
      <Grid
        container
        direction="column"
        style={{ padding: 16, paddingLeft: 32, paddingRight: 32 }}
      >
        <Grid item container alignItems="center">
          <Grid item>
            <Typography variant="h6" style={{ fontFamily: 'Fredoka One' }}>
              Selecione uma ou mais categorias
            </Typography>
          </Grid>

          <Grid item style={{ flex: 1 }} container justify="flex-end">
            <IconButton onClick={close}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: 8, marginBottom: 32 }}>
          <Divider />
        </Grid>

        <Grid item container justify="center">
          <TagsList tags={state.tags} addTag={addTag} removeTag={removeTag} />
        </Grid>

        <Grid item style={{ marginTop: 32, marginBottom: 8 }}>
          <Divider />
        </Grid>

        <Grid item>
          <Grid container justify="flex-end">
            <Grid item style={{ marginRight: 32 }}>
              <Button onClick={clearTags}>Limpar</Button>
            </Grid>

            <Grid item>
              <Button onClick={submit}>Adicionar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default AddTagMenu;
