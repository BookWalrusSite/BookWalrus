import styles from './bc.module.scss'
import novels from '../../components/BookData/data.json'
import Link from 'next/link'

function BookCards({books}) {
    
    return (
        <>
         
        <div id={styles.list}className="container-md">
            <div className="row g-2">
            {books.map((d) => (
            <Link href={`/books/${d.url}`} key={d.id}>
                <div id={styles.card} className='col-4 p-4'>
                    <a>
                        <img src={d.coverImage} className="card-img-top" alt={d.genre}/>
                    </a>
                    <div className={styles["img-title"]} >{d.title} by {d.author}</div>
                </div>
            </Link>
            ))}
            </div>
        </div>
             
        </>
    )
}

export default BookCards

export async function getStaticProps() {
    // const res = await fetch(`http://localhost:3000/api/feeds/`);
    // const data = await res.json()
    const data = novels;
    
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {books: data},
    }
  }