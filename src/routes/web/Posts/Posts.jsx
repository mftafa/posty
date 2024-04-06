import SinglePost from "../../../components/Post/SinglePost.jsx";
import useFetch from "../../../hooks/useFetchData.js";
import Loading from "../../../components/Shared/Loading.jsx";

export default function Posts(){

    const { data, loading, error } = useFetch('https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/posts');

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">All Posts</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">You can view all our post</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {data && data.map(item => (
                    <SinglePost key={item.id} post={item} />
                ))}
            </div>
        </>
    )
}