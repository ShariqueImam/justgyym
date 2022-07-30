import React from "react";
import Link from "next/link";
const style = {
  wrapper: "px-4 md:px-8 py-6 font-bold",
  list: "text-xl border-b-[1px] border-stone-600 my-3 py-2 cursor-pointer font-bold",
  question:'bg-[#1e1e1e] px-2 py-2 text-[#8d8d8d] font-bold'
};
const MenuList = (props) => {
  return (
    <div className={style.wrapper}>
      <Link href="/info/privacy">
        <p className={style.list} onClick={()=>props.menu()}>Privacy Policy</p>
      </Link>
      <Link href="/info/terms">
        <p className={style.list}onClick={()=>props.menu()}>Terms of Service</p>
      </Link>
      <Link href="/info/refund">
        <p className={style.list}onClick={()=>props.menu()}>Refund Policy</p>
      </Link>
      <Link href="/info/subscription">
        <p className={style.list}onClick={()=>props.menu()}>Subscription Terms</p>
      </Link>
      <Link href="/info/cookie">
        <p className={style.list}onClick={()=>props.menu()}>Cookie Policy</p>
      </Link>
      <Link href="/info/sell">
        <p className={style.list}onClick={()=>props.menu()}>Do not sell my information</p>
      </Link>
      <Link href="/info/contact">
        <p className={style.list}onClick={()=>props.menu()}>Contact Us</p>
      </Link>
      <Link href="">
        <p className={style.question} style={{fontWeight:500}}>Any questions? We're here to help.</p>
      </Link>

      <a href="/" className="block underline my-4">support@test.com</a>
      <a href="/" className="block underline my-3">+1(234)567 8129</a>
      <p className="text-xs">
        REFER TO YOUR PROVIDER'S TARIFFS TO DETERMINE THE COST OF THIS CALL FROM
        YOUR COUNTRY
      </p>
    </div>
  );
};

export default MenuList;
