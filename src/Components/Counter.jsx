import React from 'react'


function Counter() { 
    return (
        <div className="md:">
            <div className="stats stats-horizontal xs:stats-vertical sm:stats-vertical md:stats-horizontal col-start-1 col-end-2 justify-self-center lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Applied jobs today</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Denied jobs</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total applied jobs</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    )
}

export default Counter;