import {Navbar, Footer} from "./components/index"
import BookCards from './components/BookCards/BookCards'
import styles from '../styles/books.module.scss'


function books() {
    return (
        <>
            <Navbar/>
                <div className={styles.container}>
                    <BookCards />
                </div>        
            <Footer />
        </>
    )
}

export default books
