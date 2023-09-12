type Props = {
    title: string;
    date: string;
};

const PostTitle = ({ title, date }: Props) => {
    return (
        <>
            {/* <p className="text-6xl select-none">{icon}</p> */}
            <h1 className="my-4 mx-2 text-2xl font-bold">{title}</h1>
            <p className="text-xl font-semibold text-gray-400">{date}</p>
        </>
    );
};

export default PostTitle;
