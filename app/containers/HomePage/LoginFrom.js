import React from 'react';
import ProTypes from 'prop-types';
import ListRow from 'components/ListRow';
import ListColumn from 'components/ListColumn';
import { Button } from '../BookList/styles';
const LoginFrom = props => {
  const { onChangeUserName, onChangePassword, onLoginForm } = props;

  return (
    <form onSubmit={onLoginForm} style={{ maxWidth: 500, margin: '0 auto' }}>
      <ListRow>
        <ListColumn>UserName</ListColumn>
        <ListColumn>
          <input id="name" type="text" onChange={onChangeUserName} />
        </ListColumn>
      </ListRow>
      <ListRow>
        <ListColumn>Password</ListColumn>
        <ListColumn>
          <input id="password" type="password" onChange={onChangePassword} />
        </ListColumn>
      </ListRow>
      <ListRow>
        <Button type="submit">LOGIN</Button>
      </ListRow>
    </form>
  );
};
LoginFrom.propTypes = {
  onChangeUserName: ProTypes.func,
  onChangePassword: ProTypes.func,
  onLoginForm: ProTypes.func,
};
export default LoginFrom;
