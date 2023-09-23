"use client";

import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface IProps {
  data: { [key: string]: string };
}

export default function Flashcard({ data }: IProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const previous = () => {
    setIndex((value) => {
      if (value == 0) {
        return value;
      }
      return value - 1;
    });
    setFlipped(false);
  };

  const next = () => {
    setIndex((value) => {
      if (value == Object.keys(data).length - 1) {
        return value;
      }
      return value + 1;
    });
    setFlipped(false);
  };

  return (
    <>
      <div
        onClick={() => setFlipped((value) => !value)}
        className="relative bg-gradient-to-br p-[2px] rounded-8 h-96 from-dark-1-normal to-dark-1-normal hover:from-[#51127F] hover:to-[#D70A84] cursor-pointer"
      >
        <div
          style={{ transform: `perspective(5000px) rotateY(${flipped ? "180" : "0"}deg)`, zIndex: flipped ? 0 : 1 }}
          className="absolute duration-[400ms] transition-all pointer-events-none w-flashcard h-flashcard bg-dark-1-normal rounded-[6px] p-12 flex justify-center items-center select-none text-justify text-body2"
        >
          {Object.keys(data)[index]}
        </div>
        <div
          style={{ transform: `perspective(5000px) rotateY(${flipped ? "0" : "-180"}deg)` }}
          className="absolute duration-[400ms] transition-all pointer-events-none w-flashcard h-flashcard bg-dark-1-normal rounded-[6px] p-12 flex justify-center items-center select-none text-justify text-body2"
        >
          {data[Object.keys(data)[index]]}
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center justify-center">
        <button
          onClick={previous}
          className="p-3 rounded-full bg-dark-1-normal hover:bg-dark-1-hover border-[1px] border-solid border-transparent hover:border-[#D70A84]"
        >
          <MdChevronLeft size={24} className="text-dark-text" />
        </button>
        <div className="font-light text-label text-dark-outline">
          {index + 1} / {Object.keys(data).length}
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full bg-dark-1-normal hover:bg-dark-1-hover border-[1px] border-solid border-transparent hover:border-[#D70A84]"
        >
          <MdChevronRight size={24} className="text-dark-text" />
        </button>
      </div>
    </>
  );
}
