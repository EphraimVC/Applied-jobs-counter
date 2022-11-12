import React from "react"

function Card(props) {
    return (
        <>
            <div className="card bg-purple-800 min-w-[21rem] min-h-28 max-h-32 p-3 inline-block">
                <input
                    type="checkbox"
                    className="checkbox checkbox-secondary float-right "
                />
                <div className="w-[90%] max-h-28 pb-1">
                    <h3>{props.company}</h3>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <p>{props.date}</p>
                </div>
            </div>
        </>
    );
};

export default Card;