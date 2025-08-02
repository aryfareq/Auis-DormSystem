import './roomBtn.css';

function RoomBtn({ label, onClick }) {
    return (
        <button className="room-btn" onClick={onClick}>
            {label}
        </button>
    );
}

export default RoomBtn;
