type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    return (
        <div style={{ width: '75%', margin: '0 auto' }}>
            <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostBody;
