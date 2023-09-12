import Layout from '../../components/layouts/article';
import { getAllPosts } from 'lib/posts';
import { Post } from 'types/posts';
import PostsList from 'components/plist';
// import Meta from 'components/meta';

type Props = {
    allPosts: Post;
};

const Blog = ({ allPosts }: Props) => {
    return (
        <Layout>
            {/* <Meta title="starrysky" type="posts" root="blog"></Meta> */}
            <div className="h-16"></div>
            <PostsList isHome={false} post={allPosts}></PostsList>
        </Layout>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['title', 'date', 'topics', 'icon', 'content', 'slug']);
    return {
        props: { allPosts },
    };
};
