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

    let sameDateArr = mainArrValue.filter(filtering);
    const count = sameDateArr.length;

    return (
        <div className="md:">
            <div className="stats stats-horizontal xs:stats-vertical sm:stats-vertical md:stats-horizontal col-start-1 col-end-2 justify-self-center lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Applied jobs today</div>
                    <div className="stat-value">{count}</div>
                    <div className="stat-desc">{showDate}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Denied jobs</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
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

// -AMOUT OF DAYS APPLIED IN THE CURRENT DAY

// - HOW TO DO IT ?
//  * match the current date with the date input value
//  * if stat to count the amount of jobs that matches the date to the current day date
// * compare day with day , month with month and so on
