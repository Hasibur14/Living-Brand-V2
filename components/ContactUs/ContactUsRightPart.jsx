
const InputField = ({ label, type = "text", name }) => {
  return (
    <label>
      <p className="text-lg md:text-xl mt-12 mb-8">{label}</p>
      <input
        type={type}
        name={name}
        className="w-full border-b border-black focus:outline-none h-10 text-xl"
      />
    </label>
  );
};

// Reusable Button Component
const ServiceButton = ({ label }) => {
  return (
    <button className="p-2 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-[#B6B6B6]">
      {label}
    </button>
  );
};

// Contact Us Component
const ContactUsRightPart = () => {
  const services = [
    'Branding', 'Social Media Management', 'Content Creation & Marketing',
    'Ad Film/Video Production', 'SEO', 'Website Transformation', 
    'Mobile App Development & UI/UX', 'CRM/Sales Pipeline Development', 
    'Influencer Marketing', 'IP Creation', 'Email & SMS Marketing Automation', 
    'Integrated Campaigns', 'Performance Media', 'Growth via Media Buying', 
    'Social Listening & ORM', 'Consumer & Market Research', 'Others'
  ];

  const referralSources = [
    'Referral', 'Media & News', 'LinkedIn', 
    'Instagram/Facebook', 'Emails/Newsletter', 'Search', 'Other Sources'
  ];

  return (
    <div className="mb-16">
      {/* Section Heading */}
      <div>
        <p className="text-base my-2 text-[#125b5c]">GOT AN IDEA?</p>
        <h1 className="text-2xl md:text-3xl font-bold my-2 text-[#125b5c]">
          Drop us a message
        </h1>
        <p className="text-base my-2">
          We are excited to work with you soon! Please drop an email with your details & requirements to <a href="mailto:bd@living-brand.com" className="underline">bd@living-brand.com</a>.
        </p>
        <p className="text-base my-2">
          You can also fill this form & we&apos;ll get back in 2 business days.
        </p>
      </div>

      {/* Input Fields */}
      <div>
       <div>
       <InputField label="Your Name" name="name" />
        <InputField label="Your Organization's Name" name="organization" />
        <InputField label="Your Email" type="email" name="email" />
        <InputField label="Your Number" type="tel" name="number" />
        <InputField label="Website/Social Media Link" name="website" />
       </div>

        {/* Services Section */}
        <p className="text-xl mt-12 mb-8">Which services are you interested in?</p>
        <div className="grid grid-cols-2 md:flex md:flex-wrap">
          {services.map((service, index) => (
            <ServiceButton key={index} label={service} />
          ))}
        </div>

        {/* Text Area for Message */}
        <InputField label="What's on your mind?" name="message" />

        {/* Referral Sources */}
        <p className="text-xl mt-12 mb-8">How did you hear about us?</p>
        <div className="grid grid-cols-2 md:flex md:flex-wrap">
          {referralSources.map((source, index) => (
            <ServiceButton key={index} label={source} />
          ))}
        </div>

        {/* Submit Button */}
        <button className="border py-2 px-20 md:px-24 rounded-full hover:cursor-pointer text-xl hover:bg-white hover:text-black border-black text-white bg-[#125b5c] mt-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUsRightPart;
