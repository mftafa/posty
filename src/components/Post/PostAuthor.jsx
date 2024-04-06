export default function PostAuthor({post}) {
    return (
        <>
            <div className="flex gap-3 w-full items-end justify-between">
                <div className="relative mt-8 flex items-center gap-x-4 w-full">
                    <img alt="" className="h-10 w-10 rounded-full bg-gray-50" src="/src/assets/images/avatar.png"/>
                    <div className="text-sm leading-6">
                        <p className="font-bold text-gray-900">
                            <a href="#">{post?.author}</a>
                        </p>
                        <p className="text-gray-600">{post?.authorDescription}</p>
                    </div>
                </div>
                <div className="w-full text-xs">
                    <div className="flex gap-1 justify-end">
                        <a href="#"
                           className="rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300">{post?.category}</a>
                    </div>
                </div>
            </div>
        </>
    );
}
