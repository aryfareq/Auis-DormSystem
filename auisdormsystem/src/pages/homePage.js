import "./homePage.css"
import backgroundImg from '../assets/auisBackground.png';
// this is an import for the student img
import profileDummy from "../assets/profileDummy.png";
import RoomTypesList from "../components/RoomTypeCard";
import roomType from "../assets/roomTypes.js";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";


function homePage() {
    return (
        <div className="home-page">
            <Navbar/>
            <section
                className="landing-section"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '32rem', // approx 512px if root font-size is 16px
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundAttachment: 'fixed',
                }}>
                <span className="home-span">
                    <h1 className="landing-txt-h1">Welcome to the <span className="bold">AUIS Dorm Booker</span></h1>
                    <h2 className="landing-txt-h2">We wish you a comfortable stay!</h2>
                    <button className="home-button">Get Help</button>
                </span>
            </section>
            <section className="room-section">
                <h1>Your Current Information</h1>
                <div className="container-flex">
                    <div className="info-container">
                        {/* this is an import for the student img */}
                        <img src={profileDummy} alt="Profile" className="profile-image" />
                        <p>Placeholder name</p>
                        <p>Placeholder ID</p>
                        <p>Placeholder Stage</p>
                        <h2>Eligable to Placeholder Dorm</h2>
                    </div>
                    <div className="info-container">
                        <h2>Current Room Information</h2>
                        <h1>Placeholder Room</h1>
                        <span>
                            <button>Unbook</button>
                            <button>Check in</button>
                        </span>
                    </div>
                </div>
            </section>
            <section className="card-section">
                <h1>Available room's are</h1>
                <div id="room-card">{roomType.map(RoomTypesList)}</div>
                <p><span className="bold">What to bring?</span><br />
                    Here are some suggestions for items you might want to bring to your dorm:<br />
                    <ol>
                        <li>Bedding for a single mattress "Mattress cover, sheets, blanket or duvet"</li>
                        <li>Pillow</li>
                        <li>Towels</li>
                        <li>Rug or carpet</li>
                        <li>Laundery detergent</li>
                        <li>Toiletries</li>
                    </ol>
                </p>
            </section>
            <Footer/>
        </div>
    );
}

export default homePage;
