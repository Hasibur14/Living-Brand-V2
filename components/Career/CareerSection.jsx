import Link from "next/link";
import React from "react";
import Button from "../Custom/Button";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonEffect from "@/app/button/page";

const CareerSection = () => {
  return (
    <div className="bg-white py-10 lg:py-20">
      <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold text-[#125b5c] mb-5">
        Career
      </h1>
      <p className="text-xl text-black mb-8">
        Showcasing the innovative spirit of Bangladesh on a global stage.
      </p>
      <Link href="/career-details">
        {/* <Button>
          See All Openings <MdOutlineArrowRightAlt className="text-xl" />
        </Button> */}
        <div className="max-w-sm">
          <ButtonEffect>See All Openings</ButtonEffect>
        </div>
      </Link>
    </div>
  );
};

export default CareerSection;
