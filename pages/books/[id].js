import {Navbar, Footer} from "../../components/index"
import books from '../../components/BookData/data.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'


function BookPage() {
  const router = useRouter()
  const {id} = router.query

  const bookPreview = books.filter(book => book.url === id)
  console.log(bookPreview[0].title)
    return (
        <>
        <Navbar />
         <div id='bookview' className="container col-8">
          <div className="row">
            <div className="col-8">
            <h2>{bookPreview[0].title}</h2>
            <h4>{bookPreview[0].author}</h4>
            <p className="writeup">{bookPreview[0].writeup}</p>
         </div>
         <div className="col-4">
           <Image
            src={bookPreview[0].coverImage}
            alt={bookPreview[0].genre}
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
