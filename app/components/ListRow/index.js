import styled from 'styled-components';
const ListRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  &:last-child {
    border: none;
  }
`;
export default ListRow;
