import React, { useState } from 'react';
import './adminNav.css';
import LogoutIcon from '@mui/icons-material/Logout';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ManIcon from '@mui/icons-material/Man';
import Woman2Icon from '@mui/icons-material/Woman2';
import KeyIcon from '@mui/icons-material/Key';
import CallIcon from '@mui/icons-material/Call';

function AdminNav() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <nav className="vertical-navbar" aria-label="Main Navigation">
            <h2 id="admin-name">Rebaz Hassan</h2>
            <ul>
                <li className={`dropdown ${openDropdown === 1 ? 'active' : ''}`}>
                    <button className="dropdown-btn" onClick={() => toggleDropdown(1)} aria-expanded={openDropdown === 1}>
                        <ApartmentIcon />Check In
                    </button>
                    <ul className="dropdown-content" style={{ display: openDropdown === 1 ? 'block' : 'none' }}>
                        <li><a href="#"><ManIcon />Male</a></li>
                        <li><a href="#"><Woman2Icon />Female</a></li>
                    </ul>
                </li>

                <li className={`dropdown ${openDropdown === 2 ? 'active' : ''}`}>
                    <button className="dropdown-btn" onClick={() => toggleDropdown(2)} aria-expanded={openDropdown === 2}>
                        <ApartmentIcon />Check Out
                    </button>
                    <ul className="dropdown-content" style={{ display: openDropdown === 2 ? 'block' : 'none' }}>
                        <li><a href="#"><ManIcon />Male</a></li>
                        <li><a href="#"><Woman2Icon />Female</a></li>
                    </ul>
                </li>

                <li><a href="#"><KeyIcon />Keys</a></li>
                <li><a href="#"><CallIcon />Contact IT</a></li>
                <li><a href="#"><LogoutIcon />Logout</a></li>
            </ul>
        </nav>
    );
}

export default AdminNav;
