import React, { useState } from 'react'

const InventoryPopup = ({item, quantity, setQuantity}) => {
  return (
    <div className='flex justify-center gap-6'>

      <div id='icon' className={`relative flex-shrink-0 rounded-md flex flex-col items-center pb-4 
            ${item.qualityLevel === 5 ? "bg-linear-to-t from-[#FCD063]/80 hover:from-[#FCD063] transition from-10% to-transparent to-70%" :
              item.qualityLevel === 4 ? "bg-linear-to-t from-[#AC6EFA]/80 hover:from-[#AC6EFA] transition from-10% to-transparent to-70%" :
              item.qualityLevel === 3 ? "bg-linear-to-t from-[#21AAFF]/80 hover:from-[#21AAFF] transition from-10% to-transparent to-70%" :
              item.qualityLevel === 2 ? "bg-linear-to-t from-[#69D68A]/80 hover:from-[#69D68A] transition from-10% to-transparent to-70%" :
              "bg-linear-to-t from-[#606265]/80 hover:from-[#606265] from-5% to-transparent to-70%"}
          `}>
        <img src={item.image} alt="" className='h-20 w-20' />
        <input type="number" 
          min={0} 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="bg-black absolute bottom-0 w-full text-center rounded-b-sm text-sm"/>
      </div>


      <div id='info-count' className='flex flex-col justify-center'>
        <div id='description' className='flex flex-col'>
          <h1 className='font-bold'>{item.name}</h1>
          <p className=''>{item.description}</p>
        </div>
      </div>

    </div>
  )
}

export default InventoryPopup
