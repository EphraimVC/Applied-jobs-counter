import React, { useState, createContext } from "react";


function Form({ formData }) {
    const [values, setValues] = useState([]);
  
    const handleValues = (event) => { 
        const name = event.target.name;
        const value = event.target.value;
        setValues(inputs, ({...inputs, [name]: value}))
    }

    const data = "hello from form"

    return (
        <div className="sm:mb-20">
            <form
                className="bg-gray-100 w-96 p-1 rounded-2xl"
                onSubmit={() => formData(values)}
            >
                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={values.company}
                    
                    className="input input-bordered input-primary w-full max-w-xs m-8 block"
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={values.title}
                    
                    className="input input-bordered input-primary w-full max-w-xs m-8 block"
                />
                <textarea
                    className="textarea textarea-primary w-full max-w-xs m-8  block"
                    name="description"
                    value={values.description}
                    
                    placeholder="Description"
                ></textarea>
                <input
                    type="date"
                    name="date"
                    value={values.date}
                    
                    className="input input-bordered input-primary max-w-xs m-8 block"
                />
                <button
                    className="btn btn-active btn-primary ml-8 mb-4 "
                    type="submit"
                >
                    Add job
                </button>
            </form>
        </div>
    );
}

export default Form;
