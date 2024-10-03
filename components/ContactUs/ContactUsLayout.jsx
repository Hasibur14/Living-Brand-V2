import React from "react";
import ContactUsRightPart from "./ContactUsRightPart";
import ContactUsImg from "./ContactUsImg";

const ContactUsLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-52 pl-[5%] mt-10">
      <ContactUsRightPart></ContactUsRightPart>
      <ContactUsImg></ContactUsImg>
    </div>
  );
};

export default ContactUsLayout;
