import { useState } from 'react';
import Navbar from '../components/navbar';
import apartments from '../assets/apartments';
import '../components/roomBtn.css';
import backgroundImg from '../assets/auisBackground.png';
import Footer from '../components/footer';

function BookingPage() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [selectedApartment, setSelectedApartment] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);

    const handleTypeClick = (typeObj) => {
        setSelectedType(typeObj);
        setSelectedFloor(null);
        setSelectedApartment(null);
        setSelectedSection(null);
    };

    const handleFloorClick = (floorObj) => {
        setSelectedFloor(floorObj);
        setSelectedApartment(null);
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
                overflow: 'hidden',
            }}
        >
            <Navbar />
            <div className="booking-container"
            >
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
                <div className="apartment-container">
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
            </div>
            <Footer/>
        </div>
    );
}

export default BookingPage;
