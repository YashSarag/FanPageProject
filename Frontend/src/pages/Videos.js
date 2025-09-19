import React from "react";
import ReactPlayer from "react-player";
import Masonry from "react-masonry-css";
import gymnast_1 from "../videos/gymnast-1.mp4";
import gymnast_2 from "../videos/gymnast-2.mp4";
import gifts from "../videos/gifts.mp4";

function Videos() {
  const cols = {
    default: 3,
    1100: 2,
    700: 1
  }
  return (
    <div className="w-[91%] max-w-[1160px] mx-auto">
       <Masonry
        breakpointCols={cols}
        className="flex w-full justify-center gap-[20px]"

        columnClassName="max-w-max flex flex-col items-center"
        >
          <video src={gymnast_1} controls autoPlay muted loop
            className="w-[250px] mb-[20px]"
          />
          <video src={gymnast_2} controls autoPlay muted loop
            className="w-[250px] mb-[20px]"
          />

          <iframe width="350" height="197" src="https://www.youtube.com/embed/hPpRR4Dvn2M?si=vXA8HIP9pTAOxAfj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            className="mb-[20px]"
          ></iframe>

          <div></div>
          <div></div>

          <iframe width="350" height="197" src="https://www.youtube.com/embed/X3FPBZx8tRw?si=XNA2Qaj58QAYfZYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
            className="mb-[20px]"
          ></iframe>

          <video src={gifts} controls autoPlay muted loop
            className="w-[250px] mb-[20px]"
          />

        </Masonry>
    </div>
    
  );
}

export default Videos;
