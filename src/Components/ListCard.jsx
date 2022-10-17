import React from 'react'

function Card() { 
    return (
        <div className="card bg-purple-800 max-w-xs min-h-28 max-h-32 p-2 inline-block">
            <input type="checkbox"  className="checkbox checkbox-secondary float-right " />
            <div className="w-[50%]">
            <h3>Company Name</h3>
            <h5>Title</h5>
            <p>description</p>
            </div>
           
            
    </div>
)

};

export default Card;