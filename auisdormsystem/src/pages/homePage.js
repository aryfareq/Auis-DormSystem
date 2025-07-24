import "./homePage.css"


function homePage() {
    return (
        <div className="home-page">
            <span className="home-span">
                <h1>Welcome to the <span className="bold">AUIS Dorm Booker</span></h1>
                <h2>We wish you a comfortable stay!</h2>
                <button className="home-button">Get Help</button>
            </span>
            <section className="room-section">
                <h2>Your Current Information</h2>
                <div className="info-container">
                    <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
                    <p>Placeholder name</p>
                    <p>Placeholder ID</p>
                    <p>Placeholder Stage</p>
                    <h3>eligable to Placeholder Dorm</h3>
                </div>
                <div className="info-container">
                    <h2>Current Room Information</h2>
                    <h1>Placeholder Room</h1>
                    <button>Unbook</button>
                    <button>Check in</button>
                </div>
            </section>
            <section className="card-section">
            {/* <!-- Placeholder for card section --> */}
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
        </div>
    );
}

export default homePage;
