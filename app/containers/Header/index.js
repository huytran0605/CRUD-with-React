import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button } from '../BookList/styles';

export const Header = props => {
  const { dispatch } = props;
  const userName = localStorage.getItem('username');
  const logoutAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    dispatch(push('/'));
  };
  return (
    <div>
      <span> Hello {userName} </span>
      <Button onClick={() => logoutAction()}>Logout</Button>
    </div>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapDispatchToProps)(Header);
