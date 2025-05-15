import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-[#c96d6d] text-white p-5 underline flex gap-16 sticky top-0">
            <Link to={"/"}>List of Student</Link>
            <Link to={"/FavouriteStudents"}>Favourite Student</Link>
        </nav>
    )
}

export default Navbar