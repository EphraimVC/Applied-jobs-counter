import React, { useState, useContext } from "react";
import Card from "../Components/ListCard";
// import { formStateContext } from "../Helpers/context";

function List({ val }) {
    // const [formValue, setFormValue] = useState(useContext(formStateContext));
    // console.log(formValue);

    return (
        <div className="bg-gray-100 w-96 rounded-2xl p-2 sm:mb-12">
            <div className="form-control mt-2 ml-16">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered"
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
                </div>
            </div>
            <div className="divider"></div>
            <div className="list m-4">
                <ul>
                    {val.map(({ comp, titles, desc, dat }) => {
                        return (
                            <li>
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
        </div>
    );
}

export default List;
