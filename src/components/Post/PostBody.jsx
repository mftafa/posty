export default function PostBody({post}) {
    return (
        <>
            <div className="text-xs">
                <time className="text-gray-500" dateTime="2020-03-16">{post?.time}</time>
            </div>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post?.description}</p>
        </>
    );
}
