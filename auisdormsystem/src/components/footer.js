import './footer.css';
import auisLogo from '../assets/auisLogo.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={auisLogo} alt="AUIS Logo" />
                    <p>AUIS DORM BOOKER</p>
                </div>
                <div className="footer-section-l2">
                    <div className="footer-section">
                        <h4>SOCIALS</h4>
                        <ul className="footer-socials">
                            <li>
                                <a href="#" aria-label="Facebook">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{ width: '1.5rem', height: '1.5rem', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="LinkedIn">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{ width: '1.5rem', height: '1.5rem', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{ width: '1.5rem', height: '1.5rem', verticalAlign: 'middle', marginRight: '0.5rem' }} />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#">Prices</a></li>
                            <li><a href="#">Book a Room</a></li>
                            <li><a href="#">My Information</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>CONTACTS</h4>
                        <ul>
                            <li><a href="#">Email FMD</a></li>
                            <li><a href="#">Email IT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="gradient-line"></div>
                <p>&copy; {new Date().getFullYear()} AUIS Dorm System. All rights reserved.</p>
            </div>
        </footer>


    );
}

export default Footer;
