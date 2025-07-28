import "./RoomTypeCard.css";

function RoomTypesList(room) {
    return (
        <RoomTypeCard
            name={room.TypeName}
            regularPrice={room.FallSpringPrice?.UG}
            appPrice={room.FallSpringPrice?.APP}
            alumniPrice={room.FallSpringPrice?.MasterAlumni}
            fourWeeks={room.WinterSummerPrice?.FourWeeks}
            sevenWeeks={room.WinterSummerPrice?.SevenWeeks}
            nineWeeks={room.WinterSummerPrice?.NineWeeks}
            twelveWeeks={room.WinterSummerPrice?.TwelveWeeks}
        />
    );
}

function RoomTypeCard(props) {
    return (
        <div className="room-wrapper">
            <div className="room-type-name">
                <h2>{props.name}</h2>
            </div>
            <div className="room-type">
                <p id="semester">Fall & Spring</p>
                <div className="price">
                    <p><strong>Undergraduate:</strong> {props.regularPrice} IQD</p>
                    <p><strong>APP:</strong> {props.appPrice} IQD</p>
                    <p><strong>MPA & Alumni:</strong> {props.alumniPrice} IQD</p>
                </div>
                <p id="semester">UG Winter, Summer & Concurrent</p>
                <div className="price">
                    <p><strong>4 Residential Weeks:</strong> {props.fourWeeks} IQD</p>
                    <p><strong>7 Residential Weeks:</strong> {props.sevenWeeks} IQD</p>
                    <p><strong>9 Residential Weeks:</strong> {props.nineWeeks} IQD</p>
                    <p><strong>12 Residential Weeks:</strong> {props.twelveWeeks} IQD</p>
                </div>
                <button className="book-button">Book Now</button>
            </div>
        </div>
    );
}

export default RoomTypesList;