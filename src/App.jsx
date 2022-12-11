import React, { useState } from "react";
import List from "./Components/List";
import Counter from "./Components/Counter";
// import TestComp from "./Test";

function App() {
    const [values, setValues] = useState([]);
    const [key, setKey] = useState(0);
    const [comp, setComp] = useState();
    const [titles, setTitles] = useState();
    const [desc, setDesc] = useState();
    const [dat, setDat] = useState();
    const counterCount = values.length;

    // increments id number
    const keyId = () => {
        setKey(key + 1);
    };

    //   resets the input values
    const resetVal = () => {
        document.getElementById("formId").reset();
    };

    // adds data to a new card
    const addData = (e) => {
        e.preventDefault();
        keyId();
        const newCard = values;
        newCard.push({ key, comp, titles, desc, dat });
        setValues([...newCard]);
        resetVal();
        console.log(newCard);
    };

    // toggles the check mark status on card (boolean)
    function checked(index) {
        let listDelete = values;
        listDelete.splice(index, 1);
        setValues(...listDelete);
        console.log(listDelete);
        console.log(index);
    }

    return (
        <div className="App grid grid-cols-3 m-8 sm:grid-cols-2 gap-3">
            <div className="sm:mb-20">
                <form id="formId" className="bg-gray-100 w-96 p-1 rounded-2xl">
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
                        id="submitBtn"
                        className="btn btn-active btn-primary ml-8 mb-4 "
                        type="submit"
                        onClick={addData}
                    >
                        Add job
                    </button>
                </form>
            </div>

            <List arrVal={values} check={checked} />
            <Counter counting={counterCount} date={dat} arrVal={values} />
            {/* <TestComp date={dat} arrVal={values} /> */}
        </div>
    );
}

export default App;

   
