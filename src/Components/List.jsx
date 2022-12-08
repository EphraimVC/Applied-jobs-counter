import React, { useState } from "react";
import Card from "../Components/ListCard";
import { FaTrashAlt } from "react-icons/fa";

function List(props) {
    const [searchWord, setSearchWord] = useState("");
    // variable with props that holds array objects from app.js
    const Values = props.arrVal;

    //  filters inside the array and looks for an item that matches the condition argument

    const Result = Values.filter(function (a) {
        return Object.keys(a).some(function (k) {
            return a[k] === searchWord;
        });
    });

    return (
        <div className="bg-gray-100 w-96 rounded-2xl p-2 sm:mb-12">
            <div className="form-control mt-2 ml-8 ">
                <div className="input-group ">
                    <input
                        type="text"
                        placeholder="Search by company"
                        className="input input-bordered"
                        onChange={(e) => {
                            setSearchWord(e.target.value);
                        }}
                    />
                    <button className="btn btn-square">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <button className="btn btn-secondary">
                        <FaTrashAlt />
                    </button>
                </div>
            </div>

            <div className="divider"></div>
            {searchWord === "" ? (
                <div className="list m-4">
                    <ul>
                        {Values.map(({ key, comp, titles, desc, dat }) => {
                            return (
                                <li key={key}>
                                    <Card
                                        company={comp}
                                        title={titles}
                                        description={desc}
                                        date={dat}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <div className="list m-4">
                    <ul>
                        {Result.map(({ key, comp, titles, desc, dat }) => {
                            return (
                                <li key={key}>
                                    <Card
                                        company={comp}
                                        title={titles}
                                        description={desc}
                                        date={dat}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default List;

// between line 24 and 39

// const extractComps = (arr, prop) => {
//     let comps = arr.map((item) => item[prop]);
//     return comps;
// };

// const compArray = extractComps(values, "comp");

// console.log(compArray);

// const comparing = (wordCompare) => {
//     return wordCompare == searchWord;
// };

// const selected = compArray.find(comparing);

// console.log(selected);

// //toggles the check mark status on card (boolean)
// function checked() {
//     setCheck((current) => !current);
// }
