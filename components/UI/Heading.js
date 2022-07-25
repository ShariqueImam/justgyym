import React from 'react'


const style ={
  mainHeading:'w-[95%] md:w-[75%] lg:w-[45%] mx-auto text-gray-50 text-3xl md:text-3xl lg:text-4xl mx-5 md:mx-auto text-left md:text-center my-8 font-bold',
  smallHeading:'text-stone-300 text-sm my-3 mx-5 text-left md:text-center',
}

export const MainHeading = ({text}) => {
  return (
    <div className={style.mainHeading} style={{fontFamily:"Inter, sans-serif"}}>{text}</div>
  )
}
export const SmallHeading = ({text}) => {
  return (
    <div className={style.smallHeading}  style={{fontFamily:'Inter,sans-serif'}}>
      {text}
    </div>
  )
}



