import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Card(props) {
    return (
        <>
            <div className="card bg-purple-800 min-w-[21rem] min-h-28 max-h-32 p-3 inline-block">
                <button
                    className="btn btn-secondary float-right p-0 w-7"
                    onClick={props.delete}
                >
                    <FaTrashAlt className="h-3.5" />
                </button>
                <div className="w-[90%] max-h-28 pb-1">
                    <h3 className="clear-left">{props.company}</h3>
                    <h5 className="clear-left">{props.title}</h5>
                    <p className="clear-left">{props.description}</p>
                    <p className="clear-left">{props.date}</p>
                </div>
            </div>
        </>
    );
}

export default Card;
