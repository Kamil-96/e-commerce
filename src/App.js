import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/views/Home/Home';
import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>  //eslint-disable-line
);

export default App;
