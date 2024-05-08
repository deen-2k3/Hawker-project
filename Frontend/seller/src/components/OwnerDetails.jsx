import React, { useState } from 'react';

export default function OwnerDetails() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '65vh' }}>
        <p>Contact Number of Hawker</p>
        <div className='bg-white p-3 rounded w-25 border d-flex flex-column justify-content-center align-items-center'>
          <form action="">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="exampleCheckbox"
                checked={isChecked}
                onChange={toggleCheckbox}
              />
              <label className="form-check-label" htmlFor="exampleCheckbox">
                Owner Details
              </label>
              <div className='mb-3'>
  {/* <label htmlFor="text">Hawker Name</label> */}
          <input type="tel" placeholder='Mobile number of Owner' className="form-control  rounded-0"maxLength={10}/>
         </div>
      <div className='mb-3'>
     <input type="text" placeholder='Owner Name' className="form-control  rounded-0"/>

      </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
