import styles from "./footer.module.scss"
import Link from "next/link"

function Footer() {
    return (
        <>
            <div className={styles.copyright}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2021, All Right Reserved Book Walrus</span>
                    </div>

                    <div className="col-md-6">
                        <div className={styles["copyright-menu"]}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a >Home</a>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/books">
                                        <a >Books</a>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link href="/blog/articles">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
