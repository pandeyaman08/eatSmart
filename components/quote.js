import React from "react";

export default function Quote() {
  return (
    <div>
      {/* <!-- component --> */}
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"> */}

      <div class="flex items-center justify-center p-3 from-blue-400 via-purple-300 to-blue-400 bg-gradient-to-br">
        {/* <div class="w-full text-xl font-bold font-serif font max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl">
          &quot;Recommended Foods&quot;
        </div> */}
      </div>
      <div class="flex items-center justify-center p-3 from-blue-400 via-purple-300 to-blue-400 bg-gradient-to-bl">
        <div class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-1 bg-[#FFFBFB] bg-opacity-80 rounded-lg shadow-xl ">
          <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
              <div class="flex flex-col justify-center">
                <h1 class="text-center  text-2xl font-bold text-gray-900">
                  Justine
                </h1>
                <p class="inline text-gray-700 font-normal leading-6 w-full text-center">
                  UX Researcher,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full max-w-lg py-8 flex flex-row items-center justify-center mx-1 bg-[#FFFBFB] bg-opacity-80 rounded-lg shadow-xl ">
          <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
              <div class="flex flex-col justify-center">
                <h1 class="text-center  text-2xl font-bold text-gray-900">
                  Howell
                </h1>
                <p class="inline text-gray-700 font-normal leading-6 w-full text-center">
                  UX Researcher,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
