import AppLogo from "../components/Shared/AppLogo.jsx";
import NavButton from "../components/Shared/NavButton.jsx";

export default function Navigation(){
    return(
        <>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <AppLogo />
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavButton destination={"/"} name={"Home"} />
                            <NavButton destination={"/posts"} name={"Posts"} />
                            <NavButton destination={"/about"} name={"About Us"} />
                            <NavButton destination={"/Contact"} name={"Contacts"} />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <NavButton destination={"/dashboard"} name={"Dashboard"} />
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}