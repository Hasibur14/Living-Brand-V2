import React from "react";

const WorkDetail = () => {
  return (
    <div className="flex flex-col px-4 lg:px-[100px]  font-[Inter]">
      <div className="w-full flex flex-col gap-3 text-[#125b5c]  justify-start mt-16">
        <p className="text-[19px]">Casestudy</p>
        <h1 className="font-bold text-5xl ">
          Pusti Chinigura Rice X Nusrat Faria I Eid Campaign I Living Brands
        </h1>
      </div>
      <div className="mt-20 mb-20 min-h-screen">
        <img
          className="h-full w-full rounded-3xl rounded-tr-3xl "
          src="https://i.postimg.cc/K88zzWnM/1.jpg"
        />
      </div>

      <div className="flex justify-between mb-20">
        <div className=" w-[30%] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl text-[#125b5c]">Services</h1>
            <ul className="list-none space-y-4 text-[16px]">
              <li className="cursor-pointer">Film & Video</li>
              <li className="cursor-pointer">
                Research, Data & Analytics Solutions
              </li>
              <li className="cursor-pointer">Media Solutions</li>
              <li className="cursor-pointer">Tech Solutions</li>
              <li className="cursor-pointer">Brand Solutions</li>
            </ul>
          </div>
        </div>

        <div className=" w-[70%]">
          <small className="text-[16px] leading-snug">
            Pusti Chigura Rice brings you something truly special! We&apos;re
            thrilled to present our latest campaign featuring the glamorous
            Nusrat Faria, who&apos;s here to make your Eid celebrations even
            more delightful. <br />
            <br /> In this exclusive OVC (Online Video Commercial), Nusrat
            Faria, a beloved actress and style icon, invites you to share your
            very own Eid special recipes made with Pusti Chigura Rice. <br />{" "}
            <br /> Whether it’s a family favorite passed down through
            generations or a modern twist on a classic dish, we want to see what
            makes your Eid spread extraordinary!
          </small>{" "}
          <br />
        </div>
      </div>

      <div className="mb-20 video-container w-full h-screen">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KwLTb5k9Tlw?si=mmkivI22z_eRzsOv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WorkDetail;
