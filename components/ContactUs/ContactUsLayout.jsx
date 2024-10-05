import ContactUsImg from "./ContactUsImg";
import ContactUsRightPart from "./ContactUsRightPart";

const ContactUsLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-52 pl-[5%] mr-4 md:mr-0 mt-10">
      <div className="md:hidden">
        <ContactUsImg></ContactUsImg>
      </div>
      <ContactUsRightPart></ContactUsRightPart>
      <div className="hidden md:block">
        <ContactUsImg></ContactUsImg>
      </div>
    </div>
  );
};

export default ContactUsLayout;
