import React from 'react'


const style ={
  mainHeading:'text-[#ffffff] text-3xl md:text-3xl lg:text-3xl my-8 font-bold',
  smallHeading:'text-[#ffffff] text-sm my-3',
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



