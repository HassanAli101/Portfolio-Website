import React from "react";

const JourneyCard = ({ imgUrl, title, description, learnings, methodology}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-l font-semibold mb-2">Problem Statement:</p>
        <p className="text-[#ADB7BE]">{description}</p>
        <p className="text-l font-semibold mb-2">Key Lessons:</p>
        <p className="text-[#ADB7BE]">{learnings}</p>
        <p className="text-l font-semibold mb-2">My Implementation:</p>
        <p className="text-[#ADB7BE]">{methodology}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
