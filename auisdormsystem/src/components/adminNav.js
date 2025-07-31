import './adminNav.css';
function AdminNav() {
    return (
        <nav>
            <h2>Admin Name</h2>
            <ul>
                <li>
                    Check in:
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </li>
                <li>
                    Check Out:
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </li>
                <li><a href="/settings">Key Requests</a></li>
                <li><a href="/settings">Contact IT</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}
export default AdminNav;