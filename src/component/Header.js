import { NavLink } from "react-router-dom";

function Header() {
    return (

        <NavLink to="/watchlist">
            <div className="flex border space-x-8 justify-between items-center py-4 px-2">
                <div className="flex space-x-4">
                    <div>Movies</div>
                    <div>Watch Lists</div>
                </div>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
            </div >
        </NavLink>
    )
}

export default Header