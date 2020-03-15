import React from 'react';

import ListRow from 'components/ListRow';
import ListColumn from 'components/ListColumn';
const ListItemTitle = () => (
  <ListRow>
    <ListColumn>ID</ListColumn>
    <ListColumn>Author</ListColumn>
    <ListColumn>Categories</ListColumn>
    <ListColumn>Year</ListColumn>
    <ListColumn />
  </ListRow>
);
export default ListItemTitle;
