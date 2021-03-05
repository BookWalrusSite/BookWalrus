import {Navbar, Footer} from "../../components/index"
import Image from 'next/image'
import fetch from 'isomorphic-unfetch'
import novels from '../../components/BookData/data.json'


function BookPage({book}) {
    return (
        <>
          <Navbar />
          <div id='bookview' className="container col-8">
            <div className="row">
              <div className="col-8">
              <h2>{book.title}</h2>
              <h4>{book.author}</h4>
              <p className="writeup">{book.writeup}</p>
          </div>
          <div className="col-4">
            <Image
              src={book.coverImage}
              alt={book.genre}
              width={300}
              height={300}
              />
          </div>
          </div>
          </div>
          <Footer />
        </>
    )
}

export default BookPage

export async function getStaticProps(context) {
  const url = context.params.id
  // const res = await fetch('http://localhost:3000/api/feeds/' +url);
  // const book = await res.json();
  const book = novels.find(novel => novel.url === url)

  if (!book) {
    return {
      notFound: true,
    }
  }

  return {
    props: {book: book},
  }
}

export async function getStaticPaths() {
  // const res = await fetch(`http://localhost:3000/api/feeds/`);
  // const data = await res.json();
  const data = novels;
 
  const paths = data.map(book => {
    return {
      params: {id: book.url}
    }
  })
  return {
    paths,
    fallback: false
  };
}