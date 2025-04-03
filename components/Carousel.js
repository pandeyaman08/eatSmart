import React, { useState } from "react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./testimonials.module.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { useContext } from "react";
import UserContext from "./context/userContext";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  const u = useContext(UserContext);
  const router = useRouter();

  return (
    <div>
      <div class="relative py-16 bg-transparent">
        <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-xl bg-white shadow-xl">
              <div class="p-6 sm:p-16">
                <div class="space-y-4">
                  <img
                    src="/lg.png"
                    // loading="lazy"
                    class="w-20 m-0"
                    alt="tailus logo"
                  />
                  <div class="mb-1 mx-2 text-2xl text-cyan-900 font-bold">
                    <h1 className="mt-3">
                      {u ? "You are already Logged In" : "Continue with"}{" "}
                    </h1>
                  </div>
                </div>
                {u ? (
                  <button
                    class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div class="relative flex items-center space-x-4 justify-center">
                      <Link href="/user/mainHome">
                        <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Proceed
                        </span>
                      </Link>
                    </div>
                  </button>
                ) : (
                  <div class="mt-16 grid space-y-4 ">
                    <Button
                      variant="outlined"
                      startIcon={
                        <img src="/google.svg" className="w-5 h-full" />
                      }
                    >
                      Google
                    </Button>
                    <Button
                      onClick={() => {
                        router.push("/login");
                      }}
                      variant="outlined"
                      startIcon={
                        <img src="/mail2.png" className="w-5 h-full " />
                      }
                    >
                      Sign In 
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={
                        <img src="/guest.png" className="w-5 h-full " />
                      }
                    >
                      Guest
                    </Button>
                  </div>
                )}

                <div class="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p class="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" class="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" class="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section id="testimonials" className="main-testimonials-wrapper">
    //   <Swiper
    //     effect={'coverflow'}
    //     grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView={2}
    //     fadeEffect={{crossFade:50}}
    //     coverflowEffect={{
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 5,
    //       slideShadows: true,

    //     }}
    //     // pagination={true}
    //   >
    //     {data.map((item, key) => (
    //       <SwiperSlide>
    //         <img
    //           className="w-96 h-52  mx-auto"
    //           src={item.image}
    //           alt={item.name}
    //         />

    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </section>
  );
};

export default Testimonials;
