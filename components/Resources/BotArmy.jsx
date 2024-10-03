import ButtonEffect from "@/app/button/page";
import React from "react";

const BotArmy = () => {
  return (
    <div>
      <div className="">
        <div className="grid gap-5 mb-8 sm:grid-cols-1 md:grid-cols-2">
          <div className="order-last md:order-first">
            <h1 className="text-2xl font-bold mt-1 md:text-3Xl lg:text-5xl text-[#125b5c] mb-8">
              Living Brand&apos;s Bot Army
            </h1>
            <p className="text-base">
              We strongly believe that AI won’t replace human beings but people
              using AI will certainly get ahead in the race. So we created an
              army of 20 custom AI Bots to help Living Brand&apos;s mine
              insights, brainstorm campaign ideas, and refine their content.
            </p>
            <br />
            <p className="text-base">
              Our efficient super-assistants can help with everything from
              dissecting the target audience for your brand to writing captions
              and scripts for ads. They can also help with operational tasks
              like generating appropriate questions to help us get clearer
              briefs from clients and breaking down large projects into action
              plans that enable us to achieve results fast.
            </p>
            <br />
            <p className="text-base">
              Fascinated by the possibilities? We&apos;re inviting you to take
              them for a spin now!
            </p>
            <div className="max-w-sm mt-10">
              <ButtonEffect>Access Living Brand&apos;s Glossary</ButtonEffect>
            </div>
          </div>
          <div className="order-first md:order-last flex justify-center items-center">
            <img
              src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6478760b33e012154432678c_the%20Edge-Bots-p-1080.png"
              alt="Img"
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotArmy;
