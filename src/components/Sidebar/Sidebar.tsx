import { faCheckSquare, faHome, faPaintRoller, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </li>
                <li>
                    <Link to="/colorTheDivs"><FontAwesomeIcon icon={faPaintRoller} /> Color divs</Link>
                </li>
                <li>
                    <Link to="/colorInfo"><FontAwesomeIcon icon={faQuestion} /> Color info</Link>
                </li>
                <li>
                    <Link to="/toDo"><FontAwesomeIcon icon={faCheckSquare} /> TODO</Link>
                </li>
                </ul>
            </div>
        </div>

    );

}

export default Sidebar;