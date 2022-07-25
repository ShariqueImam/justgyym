import React from "react";
// import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper: "text-[#FFF4ED]",
  heading: "text-4xl md:text-4xl my-3 text-center md:text-left",
  cardContainer: "flex flex-col",
  card: "px-8 py-2 my-3 mx-3 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition duration-[400ms] hover:border-orange-700 border-2 border-transparent ",
  smallHeading: "text-2xl md:text-2xl flex-1",
};
const Goal = (props) => {
  const handleClick = (value) => {
    props.goal(value);
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <h2 className={style.heading}>Choose Your Goal</h2>
      <div className={style.cardContainer}>
        <Link href="/target-body">
          <div className={style.card} onClick={() => handleClick("Lose Weight")}>
            <h3 className={style.smallHeading}>Lose Weight</h3>
            <img src="/1.webp" width={120} height={160} />
          </div>
        </Link>
        <Link href="/target-body">
          <div className={style.card} onClick={() => handleClick("Gain Weight")}>
            <h3 className={style.smallHeading}>Gain Muscle Mass</h3>
            <img src="/2.webp" width={120} height={160} />
          </div>
        </Link>
        <Link href="/target-body">
          <div className={style.card} onClick={() => handleClick("Get Shredded")}>
            <h3 className={style.smallHeading}>Get Shredded</h3>
            <img src="/3.webp" width={120} height={160} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Goal;
