import React from 'react'
import { WEBSITE_NAME,WEBSITE_DESCRIPTION, HEADER_IMG, BUTTON1, BUTTON2, BUTTON_STYLES,

} from "./config";

function App () {
  return (
    <div>
      <h1 className='text-4xl text-blue-900 justify-center'>{WEBSITE_NAME}</h1>
      <p className='text-6m text-slate-700 mx-10 my-5'>{WEBSITE_DESCRIPTION}
      </p>
      
      <img src= {HEADER_IMG} className="h-100 rounded-3xl border-2 block mx-auto" alt="image"/>
      <div className="flex justify-center">
        <button className=" m-5 px-6  text-white rounded-md" style={BUTTON_STYLES}>
          {BUTTON1}
          </button>
        <button className=" m-5 px-6  text-white rounded-md" style={BUTTON_STYLES}>
          {BUTTON2}
          </button>
      </div>
      </div>
  );
}

export default App