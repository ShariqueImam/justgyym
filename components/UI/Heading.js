import React from 'react'


const style ={
  mainHeading:'text-[#ffffff] text-3xl md:text-2xl lg:text-3xl my-8 font-bold leading-[20px] md:leading-[30px] lg:leading-[40px]',
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



