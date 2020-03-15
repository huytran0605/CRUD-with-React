/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import LoginFrom from './LoginFrom';
import { changeUserName, changePassword, loginAction } from './actions';
import { selectUserName, selectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'login';

export function HomePage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const {
    userName,
    password,
    onChangeUserName,
    onChangePassword,
    onLoginAction,
  } = props;
  const onLoginForm = event => {
    event.preventDefault();
    onLoginAction({ userName, password });
  };
  return (
    <div>
      <LoginFrom
        onLoginForm={onLoginForm}
        onChangeUserName={onChangeUserName}
        onChangePassword={onChangePassword}
      />
    </div>
  );
}

HomePage.propTypes = {
  password: PropTypes.string,
  userName: PropTypes.string,
  onChangeUserName: PropTypes.func,
  onChangePassword: PropTypes.func,
  onLoginAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userName: selectUserName(),
  password: selectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUserName: evt => dispatch(changeUserName(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onLoginAction: payload => {
      dispatch(loginAction(payload));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
