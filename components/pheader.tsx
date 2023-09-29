import { url } from 'lib/img';
import { useEffect, useState } from 'react';
import { LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import { PostType } from 'types/posts';
import PostTitle from '@/ptitle';

type Props = {
    post: PostType;
};

const PostHeader = ({ post }: Props) => {
    const [urlOrigin, setUrlOrigin] = useState('');
    useEffect(() => {
        const uri = new URL(window.location.href);
        setUrlOrigin(uri.origin);
    }, []);

    return (
        <section className="mt-14 mb-8">
            {post.thumbnail !== undefined && (
                <img
                    src={url(post.thumbnail)}
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                    }}
                />
            )}
            <PostTitle title={post.title} date={post.date}></PostTitle>
            <div className="shr">
                <TwitterShareButton
                    title={post.title}
                    url={urlOrigin + '/news/' + post.slug}
                    via="NefrontInc"
                    className="m2"
                >
                    <TwitterIcon size={40} round></TwitterIcon>
                </TwitterShareButton>
                <LineShareButton
                    title={post.title}
                    url={urlOrigin + '/news/' + post.slug}
                    className="m2"
                >
                    <LineIcon size={40} round></LineIcon>
                </LineShareButton>
            </div>
        </section>
    );
};

export default PostHeader;
