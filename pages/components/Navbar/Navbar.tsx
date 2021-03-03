import styles from "./navbar.module.scss"
import Link from "next/link"

function Navbar() {
    return (
        <>
           <nav id={styles.header} className="navbar navbar-light justify-content-center">
            
            <div className="container-fluid justify-content-center">
                <Link href="/">
                    <a className="navbar-brand">
                        <img className={styles.logo} src="/assets/Asset_1.png" alt=""/>
                    </a>
                </Link>
            </div>

            <ul id={styles.navList} className="nav justify-content-center">
                <li className={styles["nav-item"]}>
                    <Link href="/">
                        <a className="nav-link active px-5" aria-current="page">Home</a>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/books">
                        <a className="nav-link px-5">Books</a>
                    </Link>
                </li>
                <li className={styles["nav-item"]}>
                    <Link href="/blog/articles">
                        <a className="nav-link px-5">Blog</a>
                    </Link>
                </li>
            </ul>
            </nav>
        </>
    )
}

export default Navbar
