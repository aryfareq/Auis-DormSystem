import { useState } from 'react';
import Navbar from '../components/navbar';
import apartments from '../assets/apartments';
import '../components/roomBtn.css';

function BookingPage() {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [selectedApartment, setSelectedApartment] = useState(null);

    const handleTypeClick = (typeObj) => {
        setSelectedType(typeObj);
        setSelectedFloor(null);
        setSelectedApartment(null);
    };

    const handleFloorClick = (floorObj) => {
        setSelectedFloor(floorObj);
        setSelectedApartment(null);
    };

    const handleApartmentClick = (apartmentObj) => {
        setSelectedApartment(apartmentObj);
    };

    return (
        <div>
            <Navbar />
            <div className="booking-container">
                <h2>Select Apartment Type</h2>
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

                {selectedType && (
                    <>
                        <h3>Floors in {selectedType.type}</h3>
                        <div className="floor-buttons">
                            {selectedType.floors.map((floorObj) => (
                                <button
                                    key={floorObj.floor}
                                    onClick={() => handleFloorClick(floorObj)}
                                    className="room-btn"
                                >
                                    Floor {floorObj.floor}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {selectedFloor && (
                    <>
                        <h3>Apartments on Floor {selectedFloor.floor}</h3>
                        <div className="apartment-buttons">
                            {selectedFloor.rooms.map((room) => (
                                <button
                                    key={room.roomNumber}
                                    onClick={() => handleApartmentClick(room)}
                                    className="room-btn"
                                >
                                    Apt {room.roomNumber}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {selectedApartment && (
                    <>
                        <h4>Details of Apartment {selectedApartment.roomNumber}</h4>
                        {selectedApartment.section ? (
                            <ul>
                                {selectedApartment.section.map((sec, index) => (
                                    <li key={index}>Section {sec}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>Price: ${selectedApartment.price}</p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default BookingPage;
