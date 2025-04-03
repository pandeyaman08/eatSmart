import React, { useState } from "react";
import styled from "styled-components";

export default function Display() {
  const StyledRange = styled.input`
    -webkit-appearance: none;
    width: 100%;
    margin: 10px 0;
    border-radius: 20px;
    height: 25px;
    background: linear-gradient(to right, #4caf50, #ff4500);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      background: blue;
      cursor: pointer;
      border-radius: 50%;
    }
    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: #4caf50;
      cursor: pointer;
    }
  `;

  const [level, setLevel] = useState(0);

  return (
    <div class="grid grid-cols-1  bg-gradient-to-r from-cyan-500 to-purple-500 h-auto p-5">
      <div class=" h-auto items-center mb-4 flex">
        <div class="group w-80 relative mx-auto overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
          <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
          <div class="relative rounded-[15px] bg-white p-6">
            <div class="space-y-4">
              <img
                src="https://nuxt.com/assets/home/ux-fast-light.svg"
                alt=""
              />
              <p class="text-lg font-semibold text-slate-800">Hover me!</p>
              <p class="font-md text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                delectus temporibus est ut nisi nam at adipisci sunt dolore
                quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <StyledSlider/> */}
      <div className="w-full flex items-center justify-center">
        <div class="slidecontainer w-1/2">
          <StyledRange type="range" min="0" max="10" value={level} />
          <div className="flex w-full">
            <div className="relative w-1/2">
              <span className="left-0 absolute">Low</span>
              <span className="right-0 absolute">Med</span>
            </div>
            <div className="relative w-1/2">
              <span className="left-0 absolute">ium</span>
              <span className="right-0 absolute">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
