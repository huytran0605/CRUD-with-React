/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import BookList from 'containers/BookList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') === '12345' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
export const App = () => (
  <AppWrapper>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <PrivateRoute path="/books" component={BookList} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </AppWrapper>
);
export default App;
