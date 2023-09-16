import React from 'react';
import { Post } from 'types/posts';
import styled from '@emotion/styled';
import PostsList from '@/plist';

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const News = (newPosts: Post) => (
    <NewsDiv>
        <PostsList isHome post={newPosts}></PostsList>
    </NewsDiv>
);

export default News;
