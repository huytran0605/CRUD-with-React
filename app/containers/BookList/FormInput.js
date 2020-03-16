import React from 'react';
import ListRow from 'components/ListRow';
import ListColumn from 'components/ListColumn';
import { Button, FormStyled } from './styles';
const FormInput = props => {
  const {
    idOnChange,
    authorOnChange,
    titleOnChange,
    yearOnChange,
    onSaveBook,
    bookData,
  } = props;
  return (
    <FormStyled onSubmit={onSaveBook}>
      <ListRow>
        <ListColumn>ID</ListColumn>
        <ListColumn>
          <input
            id="id"
            required
            type="text"
            value={bookData.id}
            onChange={idOnChange}
          />
        </ListColumn>
      </ListRow>
      <ListRow>
        <ListColumn>Title</ListColumn>
        <ListColumn>
          <input
            id="title"
            type="text"
            required
            value={bookData.title}
            onChange={titleOnChange}
          />
        </ListColumn>
      </ListRow>
      <ListRow>
        <ListColumn>Author</ListColumn>
        <ListColumn>
          <input
            id="author"
            type="text"
            required
            value={bookData.author}
            onChange={authorOnChange}
          />
        </ListColumn>
      </ListRow>
      <ListRow>
        <ListColumn>Year</ListColumn>
        <ListColumn>
          <input
            id="year"
            type="text"
            value={bookData.year}
            onChange={yearOnChange}
          />
        </ListColumn>
      </ListRow>
      <ListRow>
        <Button type="submit">Submit</Button>
      </ListRow>
    </FormStyled>
  );
};
export default FormInput;
