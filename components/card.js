import Link from 'next/link'

const Card = () =>{
    return (
        <div className="blog-item">
        <div className="img">
          <img src="/images/cover.png" />
        </div>
        <h4>FIRST BLOG TITL…</h4>
        <small>By FikraSpace</small>
        <div className="card-footer">
         <Link href="article"><a>Reade article</a></Link>
          <span>June 19, 2020</span>
        </div>
      </div>
    )
}

export default Card;