type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    return (
        <div className="znc my-8 px-6 text-left">
            <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostBody;
