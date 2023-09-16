import Layout from '@/layouts/article';
import { getAllPosts, getPostBySlug } from 'lib/posts';
import { marked } from 'marked';
import { PostType } from 'types/posts';
import PostHeader from '@/pheader';
import PostBody from '@/pbody';
import Meta from '@/meta';

type Props = {
    post: PostType;
};

const Post = ({ post }: Props) => {
    return (
        <Layout>
            <Meta />
            <div className="h-16"></div>
            <PostHeader post={post}></PostHeader>
            <PostBody content={post.content}></PostBody>
        </Layout>
    );
};

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'topics']);
    const content = marked(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.postArray.map((post) => {
            return {
                params: {
                    slug: post.slug.replace(/\.md$/, '').split('/'),
                },
            };
        }),
        fallback: false,
    };
}
