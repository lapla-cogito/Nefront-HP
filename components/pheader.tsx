import PostTitle from './ptitle';
import { TwitterShareButton, LineShareButton, TwitterIcon, LineIcon } from 'react-share';
import { useEffect, useState } from 'react';
import { PostType } from 'types/posts';

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
            <PostTitle title={post.title} date={post.date}></PostTitle>
            <div className="mt-4">
                <TwitterShareButton
                    title={post.title}
                    url={urlOrigin + '/posts/' + post.slug}
                    via="lapla_cogito"
                    className="mx-2"
                >
                    <TwitterIcon size={40} round></TwitterIcon>
                </TwitterShareButton>
                <LineShareButton
                    title={post.title}
                    url={urlOrigin + '/posts/' + post.slug}
                    className="mx-2"
                >
                    <LineIcon size={40} round></LineIcon>
                </LineShareButton>
            </div>
        </section>
    );
};

export default PostHeader;
