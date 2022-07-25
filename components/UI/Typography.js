const headingStyle = {
  wrapper: "",
};
export const Heading = ({ text }) => {
  return <div className={headingStyle.wrapper}>{text}</div>;
};

const paraStyle = {
  wrapper: "",
};
export const para = ({ text }) => {
  return <div  style={{fontFamily:'Inter,sans-serif'}} className={paraStyle.wrapper}>{text}</div>;
};
