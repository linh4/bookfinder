import React from 'react';
import { css } from '@emotion/core';
import { GridLoader} from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
`;

const ShowPage = ({books, loading}) => {
  if (!books) {
    return <>
      <div>Not found</div>
      <div>Nothing here yet. Try searching for a book</div>
    </>
  }
  else if (loading) {
    return (<div className='sweet-loading'>
       <GridLoader
         css={override}
         sizeUnit={"px"}
         size={15}
         color={'pink'}
         loading={loading}
       />
     </div>)
  }
  else if (books && !loading && books.length > 0) {
     return books.map(book => {
      const info = book.volumeInfo
      return (<div key={book.id}>

        {info.imageLinks ? <img src={info.imageLinks["thumbnail"]} alt={info.title}/> : <img src="https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="no cover book"/>}

        <h2>{info.title}</h2>
        {info.authors ? info.authors.map(author => <p key={author}>By: {author}</p>) : <div>By: No authors</div>}

        <p>Published By: {info.publisher}</p>

        <a href={info.infoLink}>See this Book</a>

      </div>)
    })
  } else {
    return <div>Nothing here yet. Try searching for a book</div>
  }
}

export default ShowPage;