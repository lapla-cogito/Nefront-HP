import { firstShowPostsNums, loadNum } from 'lib/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Post } from 'types/posts';

type Props = {
    isHome: boolean;
    post: Post;
};

const PostsList = ({ isHome, post }: Props) => {
    const [loadLength, setLoadLength] = useState(firstShowPostsNums);
    const [isEnd, setIsEnd] = useState(false);
    const [showPosts, setShowPosts] = useState(post.postArray);

    const displayMore = () => {
        if (loadLength + loadNum >= post.postArray.length) {
            setIsEnd(true);
            setShowPosts(post.postArray);
        } else {
            setLoadLength(loadLength + loadNum);
            setShowPosts(post.postArray.slice(0, loadLength - 1));
        }
    };

    useEffect(() => {
        if (!isHome && post.postArray.length <= firstShowPostsNums) {
            setIsEnd(true);
        } else if (!isHome && post.postArray.length > firstShowPostsNums) {
            setShowPosts(post.postArray.slice(0, loadLength - 1));
        }
    }, []);

    return (
        <section>
            <div>
                {showPosts.map(({ date, title, slug, path }) => (
                    <div key={slug}>
                        <li className="news_list_item">
                            <Link as={`/news/${path}`} href="/news/[...slug]" scroll={false}>
                                <div className="news_list_date">
                                    <p className="news_item">
                                        <time>{date}</time>
                                    </p>
                                </div>
                                <p>{title}</p>
                                <span className="arrow"></span>
                            </Link>
                        </li>
                    </div>
                ))}
                {isHome ? (
                    <>
                        {post.postsLength > 5 && (
                            <div className="mt-10">
                                <Link href="/news" className="curp" scroll={false}>
                                    More
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {!isEnd && (
                            <button onClick={displayMore} className="curp">
                                もっとみる
                            </button>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default PostsList;
