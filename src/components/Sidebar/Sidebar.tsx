import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
            </label>

            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/colorTheDivs">Color the divs</Link>
                </li>
                <li>
                    <Link to="/toDo">TODO</Link>
                </li>
                </ul>
            </div>
        </div>

    );

}

export default Sidebar;