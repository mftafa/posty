import {NavLink} from "react-router-dom";

export default function Dashboard(){

    return(
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">Dashboard</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">manage your posts and view contact list</p>
            </div>

            <div className="flex gap-6 items-center justify-center w-1/2 mx-auto">
                <NavLink to={"/create-Post"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 bg-indigo-600 hover:bg-indigo-800 hover:text-white">Create a post</NavLink>
                <NavLink to={"/Contact-list"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 bg-indigo-600 hover:bg-indigo-800 hover:text-white">View contact list</NavLink>
            </div>
        </>
    )
}