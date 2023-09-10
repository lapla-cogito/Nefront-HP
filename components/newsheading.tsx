import React from 'react';

type Props = {
    title: string;
    date: string;
    link: string;
};

const NewsHeading = ({ title, date, link }: any) => (
    <li className="news_list_item">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="news_list_date">
                <p className="news_item">
                    <time>{date}</time>
                </p>
            </div>
            <p>{title}</p>
            <span className="arrow"></span>
        </a>
    </li>
);

export default NewsHeading;
