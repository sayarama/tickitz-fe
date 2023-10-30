import React from 'react'
import '../style/Seat.css'

function RowSeat({ position, selectedSeat, setSelectedSeat, bookedSeat }) {
    const getSeatColor = (key) => {
        if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
            return "#6E7191"; // booked
        } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
            return "#5F2EEA"; // purple
        } else {
            return "#D6D8E7"; // gray
        }
    };

    const checkIfDisabled = (key) => {
        if (bookedSeat?.find((_item) => _item === `${position}${key}`)) {
            return true; // booked
        } else if (selectedSeat?.find((_item) => _item === `${position}${key}`)) {
            return true; // purple
        } else {
            return false; // gray
        }
    };

    return (
        <div
            className='seat-flex'
        >
            <p>{position}</p>
            {/* left */}
            <div
                style={{
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-between",
                }}
            >
                {[...new Array(7)].map((item, key) => {
                    const nextKey = ++key;

                    return (
                        <div
                            className='left-box'
                            style={{
                                background: getSeatColor(nextKey),
                                
                            }}
                            onClick={() => {
                                if (!checkIfDisabled(nextKey)) {
                                    setSelectedSeat([
                                        ...selectedSeat,
                                        ...[`${position}${nextKey}`],
                                    ]);
                                }
                            }}
                        ></div>
                    );
                })}
            </div>
            {/* right */}
            <div
                style={{
                    display: "flex",
                    width: "200px",
                    justifyContent: "space-between",
                }}
            >
                {[...new Array(7)].map((item, key) => {
                    const keyPage2 = ++key + 7;

                    return (
                        <div
                            className='right'
                            style={{
                                background: getSeatColor(keyPage2),
                            }}
                            onClick={() => {
                                if (!checkIfDisabled(keyPage2)) {
                                    setSelectedSeat([
                                        ...selectedSeat,
                                        ...[`${position}${keyPage2}`],
                                    ]);
                                }
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RowSeat