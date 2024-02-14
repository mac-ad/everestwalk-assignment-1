import React from "react";

const Images = ({ thumbnail, images }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-full min-h-[400px] p-4 flex items-center justify-center bg-gray-100 rounded-sm">
        <img
          src={thumbnail}
          className="h-[200px] object-cover w-[200px]"
          alt=""
        />
      </div>
      {images?.map((img, index) => {
        if (index < 4)
          return (
            <div className="min-h-[80px] bg-gray-100 flex items-center justify-center rounded-sm">
              <img src={img} className="h-[50px] w-[50px] " />
            </div>
          );
      })}
    </div>
  );
};

export default Images;
