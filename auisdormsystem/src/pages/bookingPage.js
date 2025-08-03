import { useState } from 'react';
import Navbar from '../components/navbar';
import apartments from '../assets/apartments';
import '../components/roomBtn.css';
import backgroundImg from '../assets/auisBackground.png';
import Footer from '../components/footer';
import Button from '../components/button';


function BookingPage() {
    const defaultType = apartments.find((typeObj) => typeObj.type === "Standard");
    const defaultFloor = defaultType.floors.find((floorObj) => floorObj.floor === 0);
    const defaultApartment = defaultFloor.rooms.find((room) => room.roomNumber === 1);

    const [selectedType, setSelectedType] = useState(defaultType);
    const [selectedFloor, setSelectedFloor] = useState(defaultFloor);
    const [selectedApartment, setSelectedApartment] = useState(defaultApartment);
    const [selectedSection, setSelectedSection] = useState(null);

    const handleTypeClick = (typeObj) => {
        setSelectedType(typeObj);
        const defaultFloor = typeObj.floors[0];
        const defaultApartment = defaultFloor.rooms[0];
        setSelectedFloor(defaultFloor);
        setSelectedApartment(defaultApartment);
        setSelectedSection(null);
    };

    const handleFloorClick = (floorObj) => {
        setSelectedFloor(floorObj);
        const defaultApartment = floorObj.rooms[0];
        setSelectedApartment(defaultApartment);
        setSelectedSection(null);
    };

    const handleApartmentClick = (apartmentObj) => {
        setSelectedApartment(apartmentObj);
        setSelectedSection(null);
    };

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                overflowX: 'hidden',
            }}
        >
            <Navbar />
            <h1>You Can Now Digitally Book!</h1>
            <div className="booking-container">
                {/* this is where the apartmanet types will be */}
                <ul className="type-list">
                    {apartments.map((typeObj) => (
                        <li
                            key={typeObj.type}
                            onClick={() => handleTypeClick(typeObj)}
                            className={`type-item ${selectedType?.type === typeObj.type ? 'active' : ''}`}
                        >
                            {typeObj.type}
                        </li>
                    ))}
                </ul>
                {/* the main container for the apartments, floors, and sections */}
                <div className="apartment-container">
                    {/* floor buttons */}
                    <div className="listed-apartments">
                        {selectedType && (
                            <>
                                <h3 className="h3-txt">Floors in <strong>{selectedType.type}</strong></h3>
                                <div className="floor-buttons">
                                    {selectedType.floors.map((floorObj) => (
                                        <button
                                            key={floorObj.floor}
                                            onClick={() => handleFloorClick(floorObj)}
                                            className="room-btn"
                                        >
                                            {floorObj.floor}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {/* apartmanet buttons */}
                    <div className="listed-apartments">
                        {selectedFloor && (
                            <>
                                <h3 className="h3-txt">Apartments on Floor <strong>{selectedFloor.floor}</strong></h3>
                                <div className="apartment-buttons">
                                    {selectedFloor.rooms.map((room) => (
                                        <button
                                            key={room.roomNumber}
                                            onClick={() => handleApartmentClick(room)}
                                            className="room-btn"
                                        >
                                            {room.roomNumber}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    {/* section buttons */}
                    <div className="listed-apartments">
                        {selectedApartment?.section && (
                            <>
                                <h3 className="h3-txt">Sections in Apartment <strong>{selectedApartment.roomNumber}</strong></h3>
                                <div className="apartment-buttons">
                                    {selectedApartment.section.map((sec, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSectionClick(sec)}
                                            className={`room-btn ${selectedSection === sec ? 'active' : ''}`}
                                        >
                                            {sec}
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {/* this is the button, with the apartment booking information */}
                <div className="selected-info">
                    {selectedFloor && selectedApartment && (
                        <p>
                            Selected: Floor <strong>{selectedFloor.floor}</strong>, Apartment <strong>{selectedApartment.roomNumber}</strong>
                            {selectedSection && `, Section: ${selectedSection}`}
                        </p>
                    )}
                    <Button name="Submit Booking" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BookingPage;
