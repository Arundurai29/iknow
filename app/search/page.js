import { getSortedPostsData } from '../../utility/posts';
import Link from 'next/link';
import styles from "../../public/css/post.css";
import TopBar from "@/components/TopBar";
import CopyRightText from "@/components/CopyRightText";
import { Color } from 'three';

export default function SearchResults({ searchParams }) {
    const searchQuery = searchParams.q || ""; // Access the search query from the URL
    const allPostsData = getSortedPostsData();
    
    // Filter posts based on the search query
    const filteredPosts = allPostsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <TopBar />
        <div className="post_banner">
            <div className="container">
                <h1 style={{color:"#fff",}}>Search Results</h1>
            </div>
        </div>
        <section className="posts">
        <div className="container">
        <div className="search-results">
            <h3 style={{paddingBottom:30,}}>Search Results for: "{searchQuery}"</h3>
            {filteredPosts.length > 0 ? (
                <div className="post_cards">
                    {filteredPosts.map(({ id, title,image,author,date }) => (
                        <a href={`/article/${id}`}>
                            <div className="post_card" key={id}>
                                <img src={image} />
                                <div className="post-meta">
                                    <span className="post-date">
                                        <img src="/img/artical/calendar.png" />
                                        {date}
                                    </span>
                                    <span className="post-author">
                                        <img src="/img/article/user.png" /> {author}
                                    </span>
                                </div>
                                <h3>{title}</h3>
                                <a className="readmore" href={`/artical/${id}`}>
                                    Read More
                                </a>
                            </div>
                        </a>
                    ))}
                </div>
            ) : (
                <p>No results found.</p>
            )}
        </div>
        </div>
</section>
        {/* CopyRightText and other sections */}
        <div
                className="iknow_tm_copyright"
                style={{ paddingTop: 40, paddingBottom: 40 }}
            >
                <div className="container">
                    <div className="inner">
                        <div className="left">
                            <p>Copyright © Dr Vimal Kumar G. All Rights Reserved.</p>
                        </div>
                        <div className="right">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="svg"
                                                src="/img/svg/social/facebook.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="svg"
                                                src="/img/svg/social/twitter.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="svg"
                                                src="/img/svg/social/youtube.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="svg"
                                                src="/img/svg/social/instagram.svg"
                                                alt=""
                                            />
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
