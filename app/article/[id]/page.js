import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../utility/posts";
import styles from "../../../public/css/post.css";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({ id: path.params.id }));
}

export default async function Post({ params, searchParams }) {
  const postData = await getPostData(params.id);
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 4); // Get the most recent 4 posts

  // Search functionality
  const searchQuery = searchParams.search || "";
  const filteredRecentPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TopBar />
      <div className="post_banner">
        <div className="container">
          <h2>Article Details</h2>
        </div>
      </div>
      <div className="container">
        <div className="post-container">
          <article className="single-post">
            <img src={postData.image} className="featured_img" alt="logo" />
            <div className="post_contents">
              <div className="post-meta">
                <span className="post-date">
                  <img src="/img/artical/calendar.png" />
                  {postData.date}
                </span>
                <span className="post-author">
                  <img src="/img/artical/user.png" /> {postData.author}
                </span>
              </div>
              <h1>{postData.title}</h1>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
              </div>
              <div className="post_comment">
              <h3>Comments</h3>
              <form action={`/api/comments/${params.id}`} method="POST">
                <textarea
                  name="comment"
                  placeholder="Leave a comment"
                  required
                ></textarea>
                <button type="submit">Submit</button>
              </form>
              </div>
          </article>

          <aside className="recent-posts">
          <div className="search">
          <h4>Search Recent Blogs</h4>
            <form action="/search" method="GET">
             
              <input
                type="text"
                name="q" 
                placeholder="Search recent blogs..."
                defaultValue={searchQuery}
              />
              <button type="submit">Search</button>
            </form>
          </div>
           
            <div className="recent">
            <h4>Recent Blogs</h4>
            <ul>
              {filteredRecentPosts.map(({ id, title,image }) => (
                <li key={id}>
                   <img src={image} />
                  <a href={`/article/${id}`}>{title}</a>
                </li>
              ))}
            </ul>
            </div>
          </aside>
        </div>
      </div>

        {/* CopyRightText and other sections */}
      <div
        className="iknow_tm_copyright"
        style={{ paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="container">
          <footer className="footer">
            <div className="footer-column">
              <a href="/">

                <img src="/img/logo/logo.png" alt="logo" />


              </a>
              <p>
              Our dedicated team ensures children receive personalized, compassionate care every step of the way.
              </p>
            </div>
            <div className="footer-column">
              <h3>Doctors</h3>
              <ul>
               
                        <Link href="/vimal" className="footer-item">Dr Vimal Kumar G</Link>
                        <Link href="/deena" className="footer-item">Dr. M. Deenadayalan </Link>
                        <Link href="/rishab" className="footer-item">Dr. Rishab Bharadwaj </Link>
                    
                  
              </ul>
            </div>
            <div className="footer-column">
              <h3>Usefull Links</h3>
              <ul>
              <Link href="/" className="footer-item">About Us</Link>
                        <Link href="/articles" className="footer-item">Articles</Link>
                        <Link href="/" className="footer-item">FAQ </Link>
                        <Link href="/" className="footer-item">Contact Us </Link>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:drgvimal@gmail.com">drgvimal@gmail.com</a></li>
                <li>MGM Cancer Institute : MGM Cancer Institute, Nelson Manickam Road, Rajeswari St, Rajaram Mehta Nagar, Aminjikarai, Chennai, Tamil Nadu 600029</li>
            
              </ul>
            </div>
          </footer>
          <div className="inner">
            <div className="left">
              <p>
                Copyright © Dr Vimal Kumar G. All Rights Reserved.
              </p>
            </div>
            <div className="right">
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/twitter.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/youtube.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img className="svg" src="/img/svg/social/instagram.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
