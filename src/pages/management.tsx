import React, { useReducer } from 'react';
import { Grid, Tabs, Tab } from '@material-ui/core';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import Products from '../components/management/products/Products';
import Tags from '../components/management/tags/Tags';
import { ManagementTabType, routes } from '../config/routes';

type State = {
  tab: number;
};

type MatchParamsType = {
  tab: ManagementTabType;
};

type Props = RouteComponentProps<MatchParamsType>;

type Action = { type: 'CHANGE_TAB'; tab: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        tab: action.tab
      };
  }
};

const init = (state: State): State => {
  console.log('INIT');
  return state;
};

const Management: React.FC<Props> = ({ match, history }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      tab: match.params.tab === 'products' ? 0 : 1
    },
    init
  );

  const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
    history.push(routes.management(newValue === 0 ? 'products' : 'tags'));

    dispatch({
      type: 'CHANGE_TAB',
      tab: newValue
    });
  };

  return (
    <Grid container justify="center">
      <Grid item md={8} xs={10}>
        <Grid container direction="column">
          <Grid item>
            <Tabs value={state.tab} onChange={handleChange}>
              <Tab label="Produtos" />

              <Tab label="Categorias" />
            </Tabs>
          </Grid>

          <Grid item style={{ marginTop: 32 }}>
            {state.tab === 0 && <Products />}
            {state.tab === 1 && <Tags />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(Management);
