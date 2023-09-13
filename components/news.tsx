import styled from '@emotion/styled';
import React from 'react';
import PostsList from 'components/plist';
import { Post } from 'types/posts';

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
