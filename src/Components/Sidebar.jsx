import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Sidebar.css"

function Left_Nav() {
    return (

        <aside className="w-64 bg-gray-900 flex flex-col shrink-0 h-full border-r border-gray-800 h-screen">
            <div className="px-4 py-5 border-b border-gray-800">
                <div className="flex items-center space-x-2">
                    <span className="text-indigo-400 text-2xl"><FontAwesomeIcon icon={["fas", "house"]} /></span>
                    <span className="text-white font-semibold text-lg tracking-tight"><Link to="/">D365 Learnings</Link></span>
                </div>
            </div>


            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                <Link to="/Events_D365" className="nav-item flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition">
                    <span className="nav-icon"><FontAwesomeIcon icon="fa-brands fa-js" /></span>
                    <span>Events - JS </span>
                </Link>

                {/* PCF */}
                <Link to="/PCF" className="nav-item flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition">
                    <span className="nav-icon"><FontAwesomeIcon icon="fa-solid fa-code" /></span>
                    <span>PCF</span>
                </Link>

                 {/* SSIS */}
                <Link to="/PCF" className="nav-item flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition">
                    <span className="nav-icon"><FontAwesomeIcon icon="fa-solid fa-code" /></span>
                    <span>PCF</span>
                </Link>
            </nav>

        </aside>

    )
}

export default Left_Nav;