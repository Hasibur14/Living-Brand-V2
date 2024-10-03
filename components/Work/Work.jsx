import ButtonEffect from "@/app/button/page";
import Items from "../Items/Items";

const Work = () => {
  return (
    <div className="bg-white relative z-[110] rounded-b-[40px] pb-10 lg:pb-20">
      <div className="px-[5%] pb-10">
        <h2 className="text-[Inter] text-2xl md:text-4xl lg:text-5xl text-[#125b5c] font-bold py-10 lg:pt-[80px] lg:pb-[70px]">
          Explore Our latest Work
        </h2>
        <hr />
        <div className="w-1/2 md:w-full md:flex justify-end my-5 space-y-1 md:space-y-0">
          {/* <Button>
            Casestudy <br />
          </Button> */}
          <ButtonEffect>Casestudy</ButtonEffect>
          <span className="divider divider-horizontal divider-start divider-neutral"></span>
          {/* <Button>Daily Creativity</Button> */}
          <ButtonEffect>Daily Creativity</ButtonEffect>
        </div>

        <Items />
      </div>
    </div>
  );
};

export default Work;
