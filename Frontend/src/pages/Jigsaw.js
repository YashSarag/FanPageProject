import React, { useState } from "react";import img_1 from "../assets/gallery-1.jpg"; // keep your image here
import {JigsawPuzzle} from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


export default function Jigsaw() {

  let puzzles = [
    {
      id:1,
      element: (
      <iframe
        src="https://www.jigsawplanet.com/?rc=play&pid=035690a8018b&view=iframe"
        title="Jigsaw Puzzle"
        style={{ width: "100%", height: "600px", border: "0" }}
        allowFullScreen
      ></iframe>
    )},

    {
      id:2,
      element: (
      <iframe
        src="https://www.jigsawplanet.com/?rc=play&pid=0930d46ab03b&view=iframe"
        title="Jigsaw Puzzle"
        style={{ width: "100%", height: "600px", border: "0" }}
        allowFullScreen
      ></iframe>
    )},

    {
      id:3,
      element: (
      <iframe
        src="https://www.jigsawplanet.com/?rc=play&pid=3f3b47dce0f7&view=iframe"
        title="Jigsaw Puzzle"
        style={{ width: "100%", height: "600px", border: "0" }}
        allowFullScreen
      ></iframe>
    )},

    {
      id:4,
      element: (
      <iframe
        src="https://www.jigsawplanet.com/?rc=play&pid=09d0b399d03e&view=iframe"
        title="Jigsaw Puzzle"
        style={{ width: "100%", height: "600px", border: "0" }}
        allowFullScreen
      ></iframe>
    )},
    {
      id:5,
      element: (
       <iframe
        src="https://www.jigsawplanet.com/?rc=play&pid=10e9d8cc3a13&view=iframe"
        title="Jigsaw Puzzle"
        style={{ width: "100%", height: "600px", border: "0" }}
        allowFullScreen
      ></iframe>

    )}
  
  ];
  const [index,setIndex] = useState(0)
  return (
    <div className="w-[91%] max-w-[1160px] mx-auto mb-[50px]">
        <div className="w-full relative">
           {puzzles[index].element}
        </div>

        <div className="jigsaw-controls">
            {index < puzzles.length - 1 && 
            <div className="absolute right-[100px] top-[50%] translate-y-[-50%] bg-slate-100 rounded-full p-[10px] grid place-items-center jigsaw-controls-right">         
                <button onClick={()=>setIndex(pre=>pre+1)}>
                  <FcNext className="text-[65px] icon"/>
                </button>  
            </div>}

            {index > 0 && 
            <div className="absolute left-[100px] top-[50%] translate-y-[-50%] bg-slate-100 rounded-full p-[10px] grid place-items-center jigsaw-controls-left"> 
                <button onClick={()=>setIndex(pre=>pre-1)}>
                  <FcPrevious className="text-[60px] icon"/>
                </button>
            </div>}
        </div>
    </div>
  );
}



