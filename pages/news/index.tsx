import { getAllPosts } from 'lib/posts';
import { Post } from 'types/posts';
import styled from '@emotion/styled';
import Layout from '@/layouts/article';
import NewsHeading from '@/newsheading';
import PostsList from '@/plist';

type Props = {
    allPosts: Post;
};

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const Blog = ({ allPosts }: Props) => {
    return (
        <Layout>
            <div className="np">All news</div>
            <NewsDiv>
                <PostsList isHome={false} post={allPosts}></PostsList>
            </NewsDiv>
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
