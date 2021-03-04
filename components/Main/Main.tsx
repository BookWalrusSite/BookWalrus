import styles from "./main.module.scss"
import BookCards from '../BookCards/BookCards'
import Article from "../Article/Article"
import books from "../BookData/data.json"

function Main() {
    return (
        <>
        <div className={styles.container}>
            <Article />
            <BookCards books={books}/>
        </div>         
        </>
    )
}

export default Main

