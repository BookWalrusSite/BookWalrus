import {Navbar, Footer} from "../components/index"
import BookCards from '../components/BookCards/BookCards'
import styles from '../styles/books.module.scss'


function books({books}) {
    return (
        <>
            <Navbar/>
                <div className={styles.container}>
                    <BookCards 
                        books={books}
                    />
                </div>        
            <Footer />
        </>
    )
}

export default books

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/feeds/`);
    const data = await res.json()
    
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {books: data.books},
    }
  }