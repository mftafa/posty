export default function About(){

    return(
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">About Us</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">know who we are</p>
            </div>
            <div className="w-3/4 mx-auto">
                <div className="flex justify-between">
                    <div className="me-5 w-full">
                        <img src="https://loremflickr.com/860/640/human" alt="Post" className="rounded-xl" />
                    </div>
                    <p className="text-gray-500">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                </div>
            </div>
        </>
    )
}