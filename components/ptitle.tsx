type Props = {
    title: string;
    date: string;
};

const PostTitle = ({ title, date }: Props) => {
    return (
        <>
            <h1 className="ptitle">{title}</h1>
            <p className="pdate">{date}</p>
        </>
    );
};

export default PostTitle;
