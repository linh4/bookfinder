import React from 'react';
import { css } from '@emotion/core';
import { GridLoader} from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
`;

const imgLink = "https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"

const renderBooks = (books) => {
  console.log(books)
  return books.map(book => {
    const info = book.volumeInfo
    return (<div key={book.id} className="each-book">

      {info.imageLinks ? <img src={info.imageLinks["thumbnail"]} alt={info.title}/> : <img src={imgLink} alt="no cover book" className="dif-img"/>}

      <div className="info-box">
        <h2>{info.title}</h2>
        {info.authors ? info.authors.map(author => <p key={author}>By: {author}</p>) : <p>By: No authors</p>}

        <p>Published By: {info.publisher}</p>

        <a className="link-btn" href={info.infoLink} target="_blank" rel="noopener noreferrer">See this Book</a>
      </div>

    </div>)
  })
}

const ShowPage = ({books, loading}) => {
  if (!books) {
    return <>
      <p className="empty-term">Error: Please provide a search query first!</p>
      <div className="no-show">Nothing here yet. Try searching for a book</div>
    </>
  }
  else if (loading) {
    return (<div className='sweet-loading'>
       <GridLoader
         css={override}
         sizeUnit={"px"}
         size={15}
         color={'#CD637E'}
         loading={loading}
       />
     </div>)
  }
  else if (books && !loading && books.length > 0) {
     return <div className="book-container">{renderBooks(books)}</div>
  } else {
    return <div className="no-show">Nothing here yet - Try searching for a book!</div>
  }
}

export default ShowPage;
