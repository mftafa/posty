import SinglePost from "../../../components/Post/SinglePost.jsx";
import useFetch from "../../../hooks/useFetchData.js";
import Loading from "../../../components/Shared/Loading.jsx";

export default function LatestPosts(){

    const { data, loading, error } = useFetch('https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/posts');

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {data && data.slice(0,3).map(item => (
                    <SinglePost key={item.id} post={item} />
                ))}
            </div>
        </>
    )
}