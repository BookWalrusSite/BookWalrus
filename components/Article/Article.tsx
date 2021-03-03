import styles from './article.module.scss'
import Link from 'next/link'
import blog from '../BlogData/blog.json'


function Article() {
                
    const headlinePost = blog.slice(-2)
    return (
        <>
         <div id={styles.article} className="container">
            <h3>Article Section</h3>
            <div className="row">
                <div id={styles.writeup} className="col">
                    <h4>{headlinePost[0].headline}</h4>
                    <p>{headlinePost[0].content}</p>
                </div>
                <div id={styles.writeup} className="col">
                    <h4>{headlinePost[1].headline}</h4>
                    <p>{headlinePost[1].content}</p>
                </div>
            </div>
            
            <div className="row justify-content-md-center">
            <Link href={`/blog/articles`}>
                <button id={styles["read-more"]} type="button" className="btn btn-outline-secondary">Read more</button>
            </Link>
            </div>
         </div>  
        </>
    )
}

export default Article
