import React, { useState} from "react";
import List from "./Components/List";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import { formStateContext } from "./Helpers/context";


function App() {
    const [data, setData] = useState("");
   

    const formData = (formValues) => {
        setData(formValues);
        console.log(data)
    };

    return (
        <div className="App grid grid-cols-3 m-8 sm:grid-cols-2 gap-3">
            <Form formData={formData} />
            <formStateContext.Provider value={data}>
                <List />
                <Counter />
            </formStateContext.Provider>
        </div>
    );
}

export default App;
