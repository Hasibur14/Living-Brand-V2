import React from "react";
import ButtonEffect from "../button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const WhoWeAre = () => {
  return (
    <div className="bg-white relative z-[110] grid grid-cols-1 lg:gap-y-20 py-10 lg:py-20">
      <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2 px-[5%]">
        <div className="order-last md:order-first">
          <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-5xl text-[#125b5c] mb-8">
            Who We Are
          </h1>
          <p className="text-base  text-justify">
            Living Brands is a dynamic digital marketing agency with a singular
            mission: to turn your brand into a global powerhouse. We believe in
            the strength of collaboration, where creative minds, marketing
            specialists, and cutting-edge technology come together to craft
            innovative strategies. With a relentless focus on results, we push
            boundaries to ignite lasting growth and elevate your brand&apos;s
            presence in the market.
          </p>
          <br />
          {/* <button className="border hidden md:block p-3 px-14 rounded-full overflow-hidden transition-transform duration-300 text-sm hover:bg-white hover:text-black border-black text-white bg-[#125b5c] mt-5">
            Access Living Brand&apos;s Bots →
          </button> */}
          <div className="max-w-md">
            <ButtonEffect>
              <span className="flex gap-2">
                Access Living Brand&apos;s Bots{" "}
                <MdOutlineArrowRightAlt className="text-xl" />
              </span>
            </ButtonEffect>
          </div>
        </div>
        <div className="order-first md:order-last flex justify-center items-center">
          <video className="rounded-2xl lg:w-[800px]" autoPlay loop muted>
            <source src="/videos/about1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <video
        className="rounded-2xl lg:w-[100%] lg:h-[100%] px-[5%] "
        autoPlay
        loop
        muted
      >
        <source src="/videos/about2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WhoWeAre;
