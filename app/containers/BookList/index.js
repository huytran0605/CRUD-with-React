import React, { memo, useEffect } from 'react';
import map from 'lodash/map';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { compose } from 'redux';
import { clone } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from 'containers/Header';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import FormInput from './FormInput';
import reducer from './reducer';
import saga from './saga';
import { changeBookData, saveBook, deleteBook, loadBook } from './actions';
import { makeSelectBook, makeSelectBookList } from './selectors';
import { TableWrapper } from './styles';
const key = 'book';
export const BookList = props => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const {
    onChangeBookData,
    bookData,
    onSaveBook,
    bookList,
    onDeleteBook,
    onLoadBook,
  } = props;
  useEffect(() => {
    onLoadBook();
  }, []);
  const changeStageInput = (event, field) => {
    if (event) event.preventDefault();
    const bookNewData = clone(bookData);
    bookNewData[field] = event.target.value;
    onChangeBookData(bookNewData);
  };
  const deleteFnc = book => {
    onDeleteBook(book);
  };
  const idOnChange = event => {
    changeStageInput(event, 'id');
  };
  const authorOnChange = event => {
    changeStageInput(event, 'author');
  };
  const titleOnChange = event => {
    changeStageInput(event, 'title');
  };
  const yearOnChange = event => {
    changeStageInput(event, 'year');
  };

  return (
    <div>
      <Header />
      <FormInput
        authorOnChange={authorOnChange}
        idOnChange={idOnChange}
        titleOnChange={titleOnChange}
        yearOnChange={yearOnChange}
        onSaveBook={onSaveBook}
        bookData={bookData}
      />
      <ListItemTitle />
      <TableWrapper>
        {map(bookList, book => (
          <ListItem book={book} edit={onChangeBookData} deleteFnc={deleteFnc} />
        ))}
      </TableWrapper>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  bookData: makeSelectBook(),
  bookList: makeSelectBookList(),
});

export const mapDispatchToProps = dispatch => ({
  dispatch,
  onChangeBookData: payload => dispatch(changeBookData(payload)),
  onSaveBook: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(saveBook());
  },
  onLoadBook: () => dispatch(loadBook()),
  onDeleteBook: payload => dispatch(deleteBook(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(BookList);
