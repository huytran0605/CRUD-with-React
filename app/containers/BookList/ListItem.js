import React from 'react';
import PropTypes from 'prop-types';
import ListRow from 'components/ListRow';
import ListColumn from 'components/ListColumn';
import { Button } from './styles';

const ListItem = props => {
  const { book, edit, deleteFnc } = props;

  return (
    <ListRow>
      <ListColumn>{book.id}</ListColumn>
      <ListColumn>{book.author}</ListColumn>
      <ListColumn>{book.cate}</ListColumn>
      <ListColumn>{book.year}</ListColumn>
      <ListColumn>
        <Button inTable type="button" onClick={() => edit(book)}>
          EDIT
        </Button>
        <Button inTable type="button" onClick={() => deleteFnc(book)}>
          DELETE
        </Button>
      </ListColumn>
    </ListRow>
  );
};

ListItem.propTypes = {
  book: PropTypes.object,
  edit: PropTypes.func,
  deleteFnc: PropTypes.func,
};
export default ListItem;
