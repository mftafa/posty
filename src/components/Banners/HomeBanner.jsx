export default function HomeBanner(){
    return(
        <>
            <div className="mx-auto max-w-2xl py-8">
                <div className="text-center">
                    <div className="relative mb-2">
                        <h1 className="text-gray-800 font-bold text-5xl z-0 uppercase">Here you are looking at Posty App</h1>
                        <i className="absolute w-96 h-10 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Laudantium totam, ut soluta eligendi recusandae, quisquam error unde nobis
                        cumque quas a! Eos delectus tempora perspiciatis sint voluptas, aliquid tenetur ut!</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6"><a
                            className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-indigo-600"
                            href="/create-post">Get
                        started</a><a className="text-sm font-semibold leading-6 text-gray-900 " href="/about">Learn
                        More <span aria-hidden="true">→</span></a></div>
                </div>
            </div>
        </>
    )
}