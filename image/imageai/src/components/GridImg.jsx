import React from "react";
import { useSelector } from "react-redux";

const GridImg = () => {
  const { isLoading, error, image } = useSelector((state) => state.images);
  console.log(isLoading, error, image);
  return (
    <>
      {/*<div className="grid grid-cols-3 gap-4 mt-5">
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
        <div className="bg-white w-[454px] h-[460px] m-2 rounded-[50px]"></div>
      </div>*/}
      {isLoading? <div>isLoading...</div>:error?<div>{error.message}</div>: <h1>{image}</h1> }
    </>
  );
};

export default GridImg;
