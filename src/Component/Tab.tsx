import React, { useState } from 'react'

type Props = {}

const Tab = (props: Props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div>
      
      <div className="flex  gap-2 max-w-[250px] mx-auto flex-wrap lgl:max-w-[75%]">
       <div className="flex w-full gap-2" >
       <button
          onClick={() => toggleTab(1)}
          className= {`border border-green-500  poppins-regular hover:bg-green-500 lgl:text-base text-sm font-bold hover:text-[#212121] py-2 lgl:py-2 w-[34%]  text-green-500 ${toggleState === 1 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center justify-center gap-x-2">
            {/* <FaStar /> */}
            All
          </div>
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-2 lgl:py-2 text-green-500 ${toggleState === 2 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center justify-center gap-x-2">
            {/* <LiaLaptopCodeSolid className="text-2xl" /> */}
            Web Design
          </div>
        </button>
       </div>
        <button
          onClick={() => toggleTab(3)}
          className={`border border-green-500  poppins-regular lgl:text-base text-sm hover:text-[#212121] hover:bg-green-500 w-full py-2 lgl:py-2 text-green-500 ${toggleState === 3 ? 'bg-green-500 black': ''}`}
        >
          <div className="flex items-center gap-x-1 justify-center">
            {/* <CiMobile1 className="text-xl" /> */}
            Web App
          </div>
        </button>
      </div>

    </div>
  )
}

export default Tab