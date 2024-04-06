import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="text-sm leading-6 mt-16">
                <div className="container mx-auto">
                    <div
                        className="pt-6 pb-6 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
                        <div className="mb-6 sm:mb-0 sm:flex"><p>Copyright © 2024 Posty.</p>
                            <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5"><a
                                className="hover:text-slate-900 dark:hover:text-slate-400" href="about.html">A React app
                                with
                                Redux.</a></p></div>
                        <div className="flex space-x-10 text-slate-400 dark:text-slate-500">
                            <NavLink to={"/posts"} className="hover:text-slate-500 dark:hover:text-slate-400">
                                <span
                                    className="sr-only">All Posts</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}