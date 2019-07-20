import React from 'react';
import { CssBaseline, Grid, Box } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/navbar/Navbar';
import Index from './pages/index';
import AddProduct from './pages/add_product';
import Management from './pages/management';
import AddTag from './pages/add_tag';

import { routes } from './config/routes';
import { store } from './state/store';

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <CssBaseline />

        <BrowserRouter>
          <Grid container direction="column">
            <Grid item>
              <Navbar />
            </Grid>

            <Box marginTop={5}>
              <Grid item>
                <Route path={routes.index} exact component={Index} />
                <Route path={routes.add_product} exact component={AddProduct} />
                <Route
                  path={routes.management()}
                  exact
                  component={Management}
                />
                <Route path={routes.add_tag} exact component={AddTag} />
              </Grid>
            </Box>
          </Grid>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
