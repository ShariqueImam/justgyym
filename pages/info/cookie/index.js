import React from "react";
import { MainHeading, SmallHeading } from "../../../components/UI/Heading";
import Animator from "../../../components/UI/Animator";

const style = {
  heading: "text-[#ffffff] mx-auto my-8  text-xl font-bold",
  para: "text-[#ffffff] mx-auto my-8 font-semibold",
};
const Cookie = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Animator>
      <div className="w-[90%] md:w-[44%] mx-auto">
        <div style={{ fontFamily: "Inter,sans-serif" }}>
          <MainHeading text={"Cookie Policy"} />
          <p className={style.para}>
            This cookie policy explains how we use cookies and other similar
            technologies when you use our service, what tracking technologies
            are and why we use them. It also explains how you can control their
            use.
          </p>
          <h1 className={style.heading}>COOKIES</h1>
          <p className={style.para}>
            A cookie is a small text file which is placed onto your device (e.g.
            computer, smartphone or other electronic device) when you visit our
            website to store a range of information, for example, your language
            preference, or browser and device you are using to view the website.
            Those cookies are set by us and called first-party cookies. We also
            use third party cookies, which are cookies from a domain different
            from the domain of our website, for our advertising and marketing
            efforts.
          </p>

          <p className={style.para}>
            Session cookies expire each time you close your browser and do not
            remain on your device afterwards. These cookies allow our website to
            link your actions during a particular browser session.
          </p>
          <p className={style.para}>
            Persistent cookies will remain on your device for a period of time,
            and will expire on a set expiration date, or when you delete them
            manually from your cache. These cookies are stored on your device in
            between browser sessions and allow your preferences and actions
            across our website to be remembered.
          </p>
          <p className={style.para}>
            We will review your application and notify you (by email) whether
            your application is approved.
          </p>
          <h1 className={style.heading}>
            HOW CAN YOU MANAGE YOUR COOKIES AND SIMILAR TECHNOLOGIES?
          </h1>
          <p className={style.para}>
            You can manage your cookie preferences on a consent management
            platform that appears when you visit the website or when you click
            on the “Privacy” icon at the right bottom corner of any page of our
            website. It may be necessary to refresh the page for the updated
            settings to take effect. Essential cookies cannot be disabled, nor
            can the tool be used to block cookies on third-party websites linked
            to our website.
          </p>
          <p className={style.para}>
            Most browsers allow you to refuse to accept cookies and to delete
            cookies. The methods for doing so vary from browser to browser, and
            from version to version. You can however obtain up-to-date
            information about blocking and deleting cookies
          </p>
          <p className={style.para}>
            The third-party advertisers, ad agencies and vendors with which we
            work may be members of the Network Advertising Initiative, the
            Digital Advertising Alliance Self-Regulatory Program for Online
            Behavioral Advertising, the European Digital Advertising Alliance.
            To opt-out of interest-based advertising from the participating
            companies
          </p>
        </div>
      </div>
    </Animator>
  );
};

export default Cookie;
