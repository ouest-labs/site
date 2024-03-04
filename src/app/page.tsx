import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-screen mesh">
      <div className="relative flex items-center justify-center flex-col m-auto h-max p-5 z-10">
        <h1 className="flex text-5xl md:text-7xl px-2 md:px-0 text-center align-bottom font-bold text-white">
          <span
            style={{
              background:
                "linear-gradient(215deg, #c7f284 34.37%, #c7f284 49.63%, #00bef0 62.38%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-vcr "
          >
            Ouest
          </span>
          <span className="text-5xl font-vcr">Lab</span>
        </h1>
      </div>
    </div>
  );
};

export default Stats;
