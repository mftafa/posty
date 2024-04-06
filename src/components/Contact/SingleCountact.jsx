export default function SingleContact({contact}) {
    return (
        <>
            <article
                className="flex max-w-xl flex-col p-5 items-start justify-between rounded-xl bg-gray-50 hover:bg-gray-100">
                <div className="group relative">
                    <h3 className="my-3 text-xl font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                        {contact?.name}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{contact?.email}</p>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{contact?.message}</p>
                </div>
            </article>
        </>
    )
}