import React, { useState} from "react";
import List from "./Components/List";
import Counter from "./Components/Counter";
import { formStateContext } from "./Helpers/context";

function App() {
    const [values, setValues] = useState([]);
    const [comp, setComp] = useState();
    const [titles, setTitles] = useState();
    const [desc, setDesc] = useState();
    const [dat, setDat] = useState();

    // adds data to a new card

    const addData = (e) => {
        const newCard = values;
        newCard.push({ comp, titles, desc, dat });
        setValues([...newCard]);
        setComp("");
        setTitles("");
        setDesc("");
        setDat("");
        e.preventDefault();

        console.log(newCard);
    };
    return (
        <div className="App grid grid-cols-3 m-8 sm:grid-cols-2 gap-3">
            <div className="sm:mb-20">
                <form className="bg-gray-100 w-96 p-1 rounded-2xl">
                    <input
                        type="text"
                        placeholder="Company Name"
                        onChange={(event) => {
                            setComp(event.target.value);
                        }}
                        className="input input-bordered input-primary w-full max-w-xs m-8 block"
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={(event) => {
                            setTitles(event.target.value);
                        }}
                        className="input input-bordered input-primary w-full max-w-xs m-8 block"
                    />
                    <textarea
                        className="textarea textarea-primary w-full max-w-xs m-8  block"
                        onChange={(event) => {
                            setDesc(event.target.value);
                        }}
                        placeholder="Description"
                    ></textarea>
                    <input
                        type="date"
                        onChange={(event) => {
                            setDat(event.target.value);
                        }}
                        className="input input-bordered input-primary max-w-xs m-8 block"
                    />
                    <button
                        className="btn btn-active btn-primary ml-8 mb-4 "
                        type="submit"
                        onClick={addData}
                    >
                        Add job
                    </button>
                </form>
            </div>

            <List val={values} />
            <Counter />
        </div>
    );
}

export default App;
 