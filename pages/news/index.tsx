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
                <NewsHeading
                    title="茨城県学生ビジネスプランコンテスト 2022 でサザコーヒー賞と常陽銀行賞を受賞しました"
                    date="2022/11/27"
                    link="https://www.scc.ibaraki.ac.jp/contest2022final/"
                />
                <NewsHeading
                    title="技育展 2022 に登壇しました"
                    date="2022/9/10"
                    link="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"
                />
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
