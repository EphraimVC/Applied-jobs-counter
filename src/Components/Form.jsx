import React, {useState} from 'react'

function Form() { 
  
    const [company, setCompany] = useState("");
    function addJob (){ 
       
    }



    return (
        <div>
            <form className="bg-gray-100 w-96 p-1 rounded-2xl " >
                <input type="text" placeholder="Company Name" className="input input-bordered input-primary w-full max-w-xs m-8 block" />
                <input type="text" placeholder="Title" className="input input-bordered input-primary w-full max-w-xs m-8 block" />
                <textarea className="textarea textarea-primary w-full max-w-xs m-8  block" placeholder="Description"></textarea>
                <input type="date" placeholder="Title" className="input input-bordered input-primary max-w-xs m-8 block" />
                <button className="btn btn-active btn-primary ml-8 mb-4 " onClick ="addJob">Add job</button>
            </form>
        </div>

    )
};

export default Form;