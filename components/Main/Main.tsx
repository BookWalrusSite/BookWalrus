import styles from "./main.module.scss"
import BookCards from '../BookCards/BookCards'
import Article from "../Article/Article"

function Main() {
    return (
        <>
        <div className={styles.container}>
            <Article />
            <BookCards />
        </div>         
        </>
    )
}

export default Main

