export default function PostTitle({post}) {
    return (
        <>
            <h3 className="my-3 text-xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">{post?.title}</a>
            </h3>
        </>
    );
}
