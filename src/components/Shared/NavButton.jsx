import {NavLink} from "react-router-dom";

export default function NavButton({name, destination}) {
    return (
        <>
            <NavLink to={destination}
                     className={({ isActive }) => (isActive ? 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-900'
                         : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}>
                {name}
            </NavLink>
        </>
    );
}
