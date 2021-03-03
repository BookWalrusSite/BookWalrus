import {Navbar, Footer} from "../../components/index"
import blog from '../../components/BlogData/blog.json'



function BlogPage() {
  return (
        <>
        <Navbar />
             <div id='bookview' className="container">
              <div className="row justify-content-md-center">
                {blog.map((b) => (
                    <div className="col-6" key={b.id}>
                        <h2 className="headline">{b.headline}</h2>
                        <p className="writeup">{b.content}</p>
                    </div>
                ))}
             </div>
             </div>
        <Footer />
        </>
    )
}

export default BlogPage
