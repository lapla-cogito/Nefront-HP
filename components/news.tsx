// @ts-nocheck
import styled from '@emotion/styled';
import React from 'react';

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const News = (children: any) => <NewsDiv>{children}</NewsDiv>;

export default News;
