import React from "react";
import { currentDate } from "../Helpers/Date";

function Counter(props) {
    const mainArrValue = props.arrVal;
    const showDate = currentDate();

    const filtering = () => {
        const formInputValue = props.date;
        const getDate = currentDate();
        return formInputValue === getDate;
    };
    //errors shows because mainArrValue is not an array *fix
    let sameDateArr = mainArrValue.filter(filtering);
    let count = sameDateArr.length;

    return (
        <div className="md:">
            <div className="stats stats-horizontal xs:stats-vertical sm:stats-vertical md:stats-horizontal col-start-1 col-end-2 justify-self-center lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Applied jobs today</div>
                    <div className="stat-value">{count}</div>
                    <div className="stat-desc">{showDate}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total applied jobs</div>
                    <div className="stat-value">{props.counting}</div>
                </div>
            </div>
        </div>
    );
}

export default Counter;

