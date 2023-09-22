import React from 'react';

export type PostType = {
    index: number;
    slug: string;
    title: string;
    date: string;
    path: string;
    thumbnail: string;
    content: string;
};

export type Post = {
    postArray: PostType[];
    postsLength: number;
    children: React.ReactNode;
};
