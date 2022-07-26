import React from 'react'
import { MainHeading } from '../UI/Heading'
const style={
    wrapper:'my-28 bg1 py-12',
    para:'text-gray-400 text-xl my-8 w-[90%] md:w-[30%] lg:w-[35%] mx-auto'
}
const FullPlan = () => {
  return (
    <div className={style.wrapper}>
        <MainHeading text={'Full Workout Plan'}/>
        <p className={style.para}>✅ Build a habit & form correct exercising techniques</p>
        <p className={style.para}>✅ Lose excessive body fat & improve workout intensity</p>
        <p className={style.para}>✅ Achieve your goal and change your life forever</p>
    </div>
  )
}

export default FullPlan