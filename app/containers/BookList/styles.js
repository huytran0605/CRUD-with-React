import styled from 'styled-components';
const TableWrapper = styled.div`
  overflow: auto;
  height: 500px;
`;
const Button = styled.button`
  margin: 10px auto;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #5e358c;
  color: #5e358c;
  &:active {
    background: #5e358c;
    color: #fff;
  }
`;
const FormStyled = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;
export { TableWrapper, Button, FormStyled };
