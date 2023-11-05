import { NavLink } from "react-router-dom";
function Header() {
    return (
        <header className="flex border space-x-8 justify-between items-center py-2 px-2 bg-gray-900 fixed w-full border-transparent z-[2]">
            <div className="flex space-x-4 text-white">
                <NavLink to="/">Movies</NavLink>
                <NavLink to="/watchlist">Watchlist</NavLink>
            </div>
            <input placeholder="Search" />
        </header>
    );

}

export default Header