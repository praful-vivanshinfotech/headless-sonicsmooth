import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const navbarToggle = () => {
    setToggleNavBar(!toggleNavBar);
    document.body.classList.toggle("menu-open");
  };
  return (
    <>
      <div className="bg-primary">
        <h2 className="font-post-grotesk font-700 sm:text-18 text-14 text-white uppercase text-center py-[10px] px-4 ">
          LIMITED TIME OFFER:
          <span className="font-400"> 20% OFF + Free Shipping!</span>
        </h2>
      </div>
      <div className="font-post-grotesk border-gray-200 menu-mobile py-4 border-b-[1px]">
        <div className="container px-4 flex lg:flex-nowrap flex-wrap items-center justify-between mx-auto">
          <button className="lg:hidden" onClick={() => navbarToggle()}>
            <div
              id="toggle-icon"
              className={`${toggleNavBar ? " open block" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="mx-auto lg:mx-0">
            <Link href="/">
              <Image
                alt="logo"
                width={222}
                height={38}
                src="/images/svg/logo.svg"
                className="w-[222px] h-[38px] lg:order-1 order-2"
              />
            </Link>
          </div>
          <div
            className={`navbar-default header hidden w-full lg:block lg:w-auto animate-fade-in-down ${
              toggleNavBar ? " open !block" : ""
            }`}
          >
            <div className="nav-list">
              <div className="overlay"></div>
              <div className="relative z-50 flex flex-col p-4 mt-4 lg:flex-row lg:mt-0 gap-6">
                <div>
                  <Link
                    className="text-primary-100 font-400 text-18 uppercase"
                    href="/sonicsmooth#sales_introduction"
                  >
                    Benefits
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-primary-100 font-400 text-18 uppercase"
                    href="/sonicsmooth#sales_introduction"
                  >
                    Why Sonicsmooth ?
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-primary-100 font-400 text-18 uppercase"
                    href="/sonicsmooth#sales_introduction"
                  >
                    Reviews
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-primary-100 font-400 text-18 uppercase"
                    href="/sonicsmooth#sales_introduction"
                  >
                    FAQ
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn-primary ml-14"
                    href="/sonicsmooth#sales_introduction"
                  >
                    Benefits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:mt-9 lg:mt-5 mt-3 md:px-0 px-4">
          <div>
            <div className="flex lg:flex-col flex-col-reverse gap-y-4">
              <div className="flex justify-start items-center gap-x-3 mb-1 font-post-grotesk">
                <img src="/images/stars-img.png" />
                <p className="md:text-18 text-12 text-gray-100 leading-5">
                  Rated 4.8/5 By 1 Million Happy Customers
                </p>
              </div>
              <h2 className="text-primary-100 md:text-38 text-24 font-400 xl:leading-[58px] lg:text-start text-center lg:leading-[35px] leading-7 font-cambon">
                Instantly Achieve Head-Turning, Glowing Skin
              </h2>
            </div>
            <div className="lg:hidden block">
              <div className="grid grid-cols-2 gap-x-3 py-5">
                <div className="relative">
                  <img src="/images/banner-img-1.png" />
                  <span className="bg-primary-300 py-1 px-2 font-400 text-16 leading-6 text-center uppercase text-primary-100 w-fit absolute left-4 z-10 bottom-4">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img src="/images/banner-img-2.png" />
                  <span className="bg-primary-300 py-1 px-2 font-400 text-16 leading-6 text-center uppercase text-primary-100 w-fit absolute left-4 z-10 bottom-4">
                    After
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="lg:order-1 order-2">
                <div className="grid lg:grid-cols-2 grid-cols-1  gap-x-10 gap-y-2  pt-4 lg:pb-8 pb-4 font-post-grotesk">
                  <div className="flex justify-start items-center gap-x-2">
                    <img src="/icons/icon-correct.png" className="w-5 h-5" />
                    <p className="font-400 text-15 lg:text-18 text-gray-100 ">
                      Removes unwanted facial hair
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2">
                    <img src="/icons/icon-correct.png" className="w-5 h-5" />
                    <p className="font-400 text-15 lg:text-18 text-gray-100 ">
                      Smoother makeup application
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2">
                    <img src="/icons/icon-correct.png" className="w-5 h-5" />
                    <p className="font-400 text-15 lg:text-18 text-gray-100 ">
                      Reduces fine lines & wrinkles
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2">
                    <img src="/icons/icon-correct.png" className="w-5 h-5" />
                    <p className="font-400 text-15 lg:text-18 text-gray-100 ">
                      Exfoliates away dead skin
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:order-2 order-1">
                <p className="text-18 font-500 font-post-grotesk text-primary-100 pb-5">
                  Get 20%{" "}
                  <span className="font-700">
                    OFF your order when you purchase today!
                  </span>
                </p>
                <Link href="#" className="">
                  <button className="btn-primary sm:w-[406px] w-full mb-4">
                    REDEEM OFFER
                  </button>
                </Link>
                <div className="flex justify-start items-center gap-x-6 font-post-grotesk">
                  <p className="before:contents-['*'] before:w-2 before:h-2 before:absolute before:top-1/3 before:bg-secondary before:left-0 before:rounded-full before:-translate-x-1/2 font-600 md:text-18 text-14 text-secondary relative pl-4">
                    In stock, ready to ship
                  </p>
                  <p className="font-400 text-black md:text-18 text-14">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4 lg:gap-x-6 w-full md:max-w-[454px]">
              <img src="/images/customer_Image.png" className="w-20 h-20" />
              <div className="mt-9">
                <p className="text-16 lg:text-18 pb-2 lg:pb-3 text-gray-100 font-400">
                  “Easily my best purchase of the year. It was painless. My skin
                  has never been this smooth.”
                </p>
                <div className="flex justify-start items-center gap-x-6 ">
                  <p className="font-400 text-12 text-black">Jane M.</p>
                  <div className="flex justify-center items-center gap-x-3">
                    <img
                      src="/images/svg/green-check.svg"
                      className="w-4 h-4"
                    />
                    <p className="font-400 text-12 text-black font-post-grotesk">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden ">
            <div
              className="grid grid-cols-2 gap-x-2
            "
            >
              <div className="relative h-[500px]">
                <img src="/images/banner-img-1.png" className="w-full h-full" />
                <span className="bg-primary-300 py-2 px-4 font-400 text-16 leading-5 text-center uppercase text-primary-100 w-fit absolute left-4 z-10 bottom-4 font-post-grotesk">
                  Before
                </span>
              </div>
              <div className="relative h-[500px]">
                <img src="/images/banner-img-2.png" className="w-full h-full" />
                <span className="bg-primary-300 py-2 px-4 font-400 text-16 leading-5 text-center uppercase text-primary-100 w-fit absolute left-4 z-10 bottom-4 font-post-grotesk">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto my-[74px]">
        <div className=" min-w-[1024px]">
          <div className="flex justify-around gap-4">
            <div></div>
            <div>
              <img src="/images/byrdie-logo.png" />
            </div>
            <div>
              <img src="/images/instyle_logo.png" />
            </div>
            <div>
              <img src="/images//vogue_logo.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-200 py-[35px] md:py-[42px]">
        <div className="container mx-auto">
          <div className="flex justify-center items-start">
            <div className="pt-[10px] px-[10px] sm:px-[35px] lg:px-[74px] relative min-h-[122px] average-line">
              <h5 className="font-400 text-14 sm:text-16 md:text-20 pb-2 leading-5 md:leading-7 text-center text-gray-100 font-cambon uppercase">
                60 MILLION
              </h5>
              <p className="font-400 text-14 md:text-18 text-gray-100 text-center font-post-grotesk">
                Women in the US <br className="md:block hidden"></br> with
                unwanted facial hair
              </p>
            </div>
            <div className="pt-[10px] px-[10px] sm:px-[35px] lg:px-[74px] relative min-h-[122px] average-line">
              <h5 className="font-400 text-14 sm:text-16 md:text-20 pb-2 leading-5 md:leading-7 text-center text-gray-100 font-cambon uppercase">
                104 Minutes
              </h5>
              <p className="font-400 text-14 md:text-18 text-gray-100 text-center font-post-grotesk">
                Average time women <br className="md:block hidden"></br> spend
                every week dealing <br className="md:block hidden"></br>
                with peach fuzz
              </p>
            </div>
            <div className="pt-[10px] px-[10px] sm:px-[35px] lg:px-[74px] relative min-h-[122px] ">
              <h5 className="font-400 text-14 sm:text-16 md:text-20 pb-2 leading-5 md:leading-7 text-center text-gray-100 font-cambon">
                45-90 days
              </h5>
              <p className="font-400 text-14 md:text-18 text-gray-100 text-center font-post-grotesk">
                How long it takes for <br className="md:block hidden"></br>{" "}
                mature skin to replace <br className="md:block hidden"></br>{" "}
                dead skin cells
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 md:px-0 px-4">
        <div className="grid grid-cols-12 md:gap-x-10">
          <div className="lg:col-span-4 col-span-12 lg:block hidden relative pt-[95%]">
            <div className="">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay="autoplay"
                loop
                muted
              >
                <source src="/video/skin-concern.mp4" type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-30 leading-10 text-primary-100 pb-[30px] font-cambon">
              The Skin Concern That Keeps Coming Back
            </h2>
            <p className="text-16 md:text-18 pb-5 font-post-grotesk md:max-w-[86%] leading-7">
              Almost every woman has some facial hair, commonly known as “peach
              fuzz.” It tends to increase with age and hormonal changes,
              becoming more visible. Peach fuzz not only{" "}
              <span className="font-700">
                steals glow and smoothness from your face{" "}
              </span>{" "}
              but makes makeup application more difficult as it can grab onto
              your foundation and powder.
            </p>
            <div className="bg-primary-300 py-2 pr-14 pl-10 w-fit mb-5 relative md:-skew-x-[45deg] -skew-x-[10deg]">
              <p className="italic font-400 text-16 md:text-18 text-primary-100 md:max-w-[100%] md:skew-x-[45deg] skew-x-[10deg] leading-6">
                On average, women spend 104 minutes a week dealing with “peach
                fuzz.”
              </p>
            </div>
            <p className="text-16 md:text-18 mb-5 font-post-grotesk md:max-w-[86%] leading-7">
              If that wasn’t bad enough,{" "}
              <span className="font-700">
                peach fuzz growth accelerates with age and the skin cell renewal
                process slows down.
              </span>
              So not only is the top layer of your skin getting covered with
              increasingly visible tiny hairs, but it also accumulates dead skin
              cells and dirt! The result? Your face starts to look dull, rough
              and dry, lacking the vibrance it used to show years ago.
            </p>
            <div className="lg:hidden block">
              <div className="relative pt-[56.25%] mt-8 mb-6">
                <video
                  className="block absolute top-0 left-0 w-full h-full"
                  autoPlay="autoplay"
                  loop
                  muted
                >
                  <source
                    src="/video/skin-concern.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </div>
            <div className="relative before:bg-transparent lg:before:bg-primary-400 before:w-0 lg:before:w-[5px] before:absolute before:top-0 before:left-0 before:h-full before:bottom-0 lg:before:content-['*'] font-post-grotesk lg:max-w-[80%] ">
              <p className="font-700 text-16 lg:text-18 pl-4 mb-5 leading-6">
                Thankfully, you can now reveal your natural radiance hidden
                below the top layer of your skin, wow your friends and family
                with your head-turning glow, and finally...
              </p>
            </div>
            <h5 className="text-primary-100 text-18 md:text-20 leading-6 font-cambon ">
              Kiss That Peach Fuzz & Dull Skin Goodbye!
            </h5>
          </div>
        </div>
      </div>
      {/* INTRODUCING Sonicsmooth--------------------------- */}
      <div className="bg-primary-700">
        <div className="container mx-auto py-14">
          <div>
            <p className="font-500 mb-1 font-post-grotesk text-center">
              INTRODUCING
            </p>
            <h3 className="!font-500 text-primary-100 !text-[40px] font-cambon mb-5 text-center">
              Sonicsmooth
            </h3>
            <p className="text-18 font-500 font-post-grotesk max-w-[640px] mx-auto mb-7 text-center">
              The Easiest Way to Free Your Face from Unwanted Facial Hair and
              Dead Skin Cells at Home, Without the Side Effects
            </p>
            <p className="text-16 font-post-grotesk max-w-[760px] mx-auto text-center">
              Sonicsmooth harnesses the power of sonic technology in conjunction
              with expertly designed safety tips to create an award-winning
              beauty tool that allows women to{" "}
              <span className="font-700">
                simply and painlessly dermaplane weekly in the comfort of their
                home without the expense and time commitment of going to a spa.
              </span>{" "}
            </p>
            <div className="flex gap-x-12 justify-center">
              <div className="flex flex-col justify-center pt-5">
                <div className="flex justify-end items-start mb-8 gap-x-4 -mr-12">
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 text-right">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100 text-right font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-end items-start mb-8 gap-x-4">
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 text-right">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100 text-right font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                </div>
                <div className="flex justify-end items-start mb-8 gap-x-4 -mr-12">
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 text-right">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100 text-right font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="xl:-mb-[260px] flex flex-col items-center">
                <div className="mb-7">
                  <img src="/images/Sonicsmooth-img.png" alt="" />
                </div>
                <a className="btn-primary mb-2 mx-auto" href="#">
                  Try It Now & Save 20%
                </a>
                <p className="text-center">30-Day Money-Back Guarantee</p>
              </div>
              <div className="flex flex-col justify-center pt-5">
                <div className="flex justify-start items-start mb-8 gap-x-4 -ml-12">
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 ">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100  font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start mb-8 gap-x-4 ">
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 ">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100  font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start mb-8 gap-x-4 -ml-12">
                  <div>
                    <img src="/images/sonicsmooth-1.png" alt="" />
                  </div>
                  <div>
                    <p className="text-20 font-cambon mb-2 text-primary-100 ">
                      Smoother makeup application
                    </p>
                    <p className="text-16 text-gray-100  font-post-grotesk max-w-[265px]">
                      Allows for easy and smooth makeup application without
                      facial hair “grabbing” your powder or foundation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* before and after section  */}
      <div className="container mx-auto md:px-0 px-4 xl:mt-[260px] pt-[50px] lg:pt-[70px] pb-10">
        <h5 className="uppercase text-center font-600 text-[15px] md:text-18 leading-5 text-gray-100 pb-6">
          Before & after
        </h5>
        <h5 className="text-28 md:text-30 leading-[35px] lg:leading-[51px] text-center text-gray-100 pb-[30px]">
          The Secret to Glowing Skin? Smooth, Remove, and Reveal.
        </h5>
        <div className="text-center pb-10 m-auto max-w-[100%] xl:max-w-[75%] md:max-w-[70%]">
          <p className="text-15 md:text-18 leading-5 text-gray-100">
            Different than most products that try to work through the
            impenetrable barrier of dull, dry skin, Sonicsmooth removes this
            barrier
            <span className="font-700">
              {""}
              to reveal a natural glow and prepare your face for better skincare
              absorption.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-3">
          <img src="/images/before-after-1.png" className="w-full" />

          <img src="/images/before-after-2.png" className="w-full" />

          <img src="/images/before-after-3.png" className="w-full" />
        </div>
        <div className="lg:mt-10 mt-[35px]">
          <div className="flex justify-center items-center">
            <button className="uppercase btn-primary px-[50px] ">
              Try it now & save 20%
            </button>
          </div>
          <p className="text-center text-18 font-400 text-gray-100 pt-4">
            30-Day Money-Back Guarantee
          </p>
        </div>
      </div>
      {/* SONIC TECHNOLOGY */}
      <div className="container mx-auto pt-[50px] lg:pt-[70px] pb-10">
        <p className="font-post-grotesk text-center font-600 text-15 lg:text-18 leading-5 uppercase text-gray-100 mb-[6px]">
          SONIC TECHNOLOGY
        </p>
        <div className="md:max-w-[60%] m-auto">
          <h2 className="mb-5 text-30 leading-9 lg:leading-[51px] text-center text-primary-100 font-cambon">
            Stop Giving Your Skin a Hard Time & Start Treating It With Love (&
            Science)
          </h2>
        </div>
        <div className="md:max-w-[45%] m-auto py-4">
          <p className="text-center font-500 text-15 font-post-grotesk lg:text-18 leading-6 text-gray-100 ">
            Using a razor, wax strips, threading or other traditional methods to
            remove peach fuzz can lead to many side effects, especially for
            those with sensitive skin.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-primary-300">
          <div className="flex justify-center h-full">
            <div className="pt-0 sm:pt-20 max-w-[350px] w-full h-auto sm:h-full flex justify-end !items-end">
              <img src="/images/product-img-1.png" />
            </div>
            <div className="flex justify-center items-center sm:pr-[10%] pr-4 sm:py-0 py-9">
              <div>
                <h2 className="text-primary-100 text-24 sm:text-30 leading-8 sm:leading-9 lg:leading-[51px] mb-[30px]">
                  Sonicsmooth
                </h2>
                <ul>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Reveals radiant-looking skin
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Leaves your skin soft & smooth
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Designed for women’s hair
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Gently removes dead skin & debris
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Sonic technology helps reduces fine lines & wrinkles
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-200">
          <div className="flex justify-center  h-full ">
            <div className="flex justify-center items-center sm:pl-[10%] pl-6 sm:py-0 py-9">
              <div className="">
                <h2 className="text-primary-100 text-24 sm:text-30 leading-8 sm:leading-9 lg:leading-[51px] mb-[30px]">
                  Other Products
                </h2>
                <ul>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Cause ingrown hairs
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Cause irritation & redness
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Cause razor burn
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Easier to cut or nick your skin, causing scarring
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Can introduce small abrasions on the skin
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-0 sm:pt-20 max-w-[257px] w-full h-auto sm:h-full flex justify-end items-end">
              <img src="/images/product-img-2.png" />
            </div>
          </div>
        </div>
      </div>
      {/* customers */}
      <div className="container mx-auto py-20">
        <div className="text-center">
          <p className="font-post-grotesk font-500 text-15 lg:text-16 leading-5 text-gray-100 pb-2">
            WHY OUR CUSTOMERS KEEP COMING BACK
          </p>
          <h2 className="uppercase font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] pb-5 leading-9 text-primary-100">
            Real Women, Real Results
          </h2>
          <p className="font-post-grotesk font-500 text-16 lg:text-18 leading-6 text-center">
            {" "}
            Rated 4.8/5.0 by Over 1 Million Customers
          </p>
        </div>
        <div className="pt-[30px] lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12 gap-y-4">
            <div className="bg-primary-600 px-6 py-8 text-center">
              <div>
                <img
                  src="/images/customer-1.png"
                  className="w-24 h-24 mx-auto"
                />
                <img src="/images/svg/five-star.svg" className="py-4 mx-auto" />
                <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                  I love, love it!
                </p>
                <p className="font-post-grotesk text-gray-100 font-400 text-15 lg:text-16 leading-5 lg:leading-6">
                  I am honestly floored by this product! I’ve used a Tinkle
                  razor in the past for dermaplaning and thought that was doing
                  the job, but the Sonicsmooth tool blows that out of the water!
                </p>
                <p className="font-500 text-16 leading-5 text-primary-100 pt-6 lg:pb-2">
                  - Shannon R.
                </p>
              </div>
            </div>
            <div className="bg-primary-600 px-6 py-8 text-center">
              <div>
                <img
                  src="/images/customer-2.png"
                  className="w-24 h-24 mx-auto"
                />
                <img src="/images/svg/five-star.svg" className="py-4 mx-auto" />
                <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                  Best product I&#x27;ve ever owned!
                </p>
                <p className="font-post-grotesk text-gray-100 font-400 text-15 lg:text-16 leading-5 lg:leading-6">
                  The dead skin cells and peach fuzz came off in minutes and
                  look (if I dare say so myself) glowy. Baby bottom smooth and
                  healthy! Also, no unwanted hair. This is seriously the best
                  skin investment I&#x27;ve ever made (I mean this and my
                  botox.)
                </p>
                <p className="font-500 text-16 leading-5 text-primary-100 pt-6 lg:pb-2">
                  - Megan O.
                </p>
              </div>
            </div>
            <div className="bg-primary-600 px-6 py-8 text-center">
              <div>
                <img
                  src="/images/customer-3.png"
                  className="w-24 h-24 mx-auto"
                />
                <img src="/images/svg/five-star.svg" className="py-4 mx-auto" />
                <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                  OMG Amazing
                </p>
                <p className="font-post-grotesk text-gray-100 font-400 text-15 lg:text-16 leading-5 lg:leading-6">
                  I was honestly really nervous to use this at first, but it was
                  super easy and gentle! It’s a great value compared to
                  dermaplaning at a spa or dermatologist. It took a ton of dead
                  skin and little hairs off and now my face feels so smooth and
                  soft!
                </p>
                <p className="font-500 text-16 leading-5 text-primary-100 pt-6 lg:pb-2">
                  - Rachel P.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* how to use */}
      <div className="container mx-auto ">
        <div className="">
          <div className="text-center pb-[60px]">
            <p className="font-500 leading-5 font-post-grotesk pb-2">
              How to use
            </p>
            <h2 className="uppercase font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] pb-5 leading-9 text-primary-100">
              3 Steps to Instant Glowing Skin
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="relative ">
              <img src="/images/guide-1.png" className="md:mx-0 mx-auto" />
              <div className="flex justify-start items-center gap-x-2">
                <p className="text-[76px] font-400 font-cambon leading-[100px] text-primary-100 ">
                  01
                </p>
                <p
                  className="font-pot-grotesk font-500 text-16 leading-6 text-gray-100
        "
                >
                  Thoroughly cleanse your face and pat dry.
                </p>
              </div>
            </div>
            <div className="relative guide-arrow-1 guide-arrow-2 ">
              {" "}
              <img src="/images/guide-2.png" className=" md:mx-0 mx-auto" />
              <div className="flex justify-start items-center gap-x-2 ">
                <p className="text-[76px] font-400 font-cambon leading-[100px] text-primary-100 ">
                  02
                </p>
                <p
                  className="font-pot-grotesk font-500 text-16 leading-6 text-gray-100
        "
                >
                  Attach a new safety tip & choose your desired speed. Glide
                  Sonicsmooth across the contours of face while holding your
                  skin taught.
                </p>
              </div>
            </div>
            <div className=" ">
              <img src="/images/guide-3.png" className="md:mx-0 mx-auto" />
              <div className="flex justify-start items-center gap-x-2 ">
                <p className="text-[76px] font-400 font-cambon leading-[100px] text-primary-100 ">
                  03
                </p>
                <p
                  className="font-pot-grotesk font-500 text-16 leading-6 text-gray-100
        "
                >
                  Apply your favorite serum to soothe, calm, & hydrate your
                  skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* social-media */}
      <div className="bg-primary-300 py-9 lg:py-[70px] mb-[30px] lg:mb-20 mt-[88px] lg:mt-[100px]">
        <div className="container mx-auto md:px-0 px-4">
          <div className="pb-10 lg:pb-[70px]">
            <div className="pb-12">
              <p className="font-post-grotesk font-500 text-16 text-gray-100 leading-5 pb-1 text-center">
                #1 SMOOTH SKIN SOLUTION
              </p>
              <h2 className="md:max-w-[75%] mx-auto font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-5 text-center">
                Award-Winning & Influencer’ Favorite – The Beauty Industry Can’t
                Get Enough of Sonicsmooth!
              </h2>
              <p className="font-post-grotesk font-500 text-16 lg:text-18 first-letter:leading-6 text-gray-100 text-center">
                Sonicsmooth has been recognized for effectively helping women
                get the smoothest skin of their lives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              {" "}
              <div className="relative solution-line flex flex-col gap-y-3 px-[50px]">
                <img
                  src="/images/svg/allure.svg"
                  className="mx-auto w-[227px]"
                />
                <p className="font-post-grotesk font-400 text-16 text-center leading-6 mt-auto">
                  Sonicsmooth is the winner of the 2018 Allure’s Readers’ Choice
                  Best Tool Breakthrough Award.
                </p>
              </div>{" "}
              <div className="relative solution-line flex flex-col gap-y-3 px-[50px]">
                <img src="/images/svg/dibs.svg" className="mx-auto" />
                <p className="font-post-grotesk font-400 text-16 text-center leading-6">
                  Sonicsmooth won the 2018 YAHOO Lifestyle Diversity In Beauty
                  Award.
                </p>
              </div>{" "}
              <div className="flex flex-col gap-y-3 px-[50px]">
                <img src="/images/svg/beauty-mag.svg" className="mx-auto" />
                <p className="font-post-grotesk font-400 text-16 text-center leading-6">
                  Sonicsmooth has been selected in BeautyMag’s 2021 Top Beauty
                  Picks.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-700 text-15 lg:text-18 leading-7 text-center text-primary-100 font-post-grotesk pb-2">
              Followed by over 400,000 beautiful people on Instagram
            </p>
            <Link href="#">
              <p className="md:max-w-[75%] mx-auto font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-5 text-center">
                @michaeltoddbeauty
              </p>
            </Link>
            <div className="pt-7 lg:pt-10 pb-9 lg:pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-[27px]">
                <div className="bg-white ">
                  <img src="/images/customer-7.png" className="w-full" />
                  <div className="px-3 py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img src="/images/customer-7-1.png" />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              @heidiledford
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            Nov 06,2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            src="/images/svg/instagram.svg"
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="font-400 text-16 leading-6 font-post-grotesk text-gray-100 pt-2">
                        If you know me, you know I shave my face on a regular
                        basis. Believe...{" "}
                        <span className="font-500 text-16 hover:underline leading-6 font-post-grotesk text-primary-100">
                          Read more
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white ">
                  <img src="/images/customer-8.png" className="w-full" />
                  <div className="px-3 py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img src="/images/customer-8-1.png" />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              @lexigarcia96
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            Nov 06,2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            src="/images/svg/instagram.svg"
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="font-400 text-16 leading-6 font-post-grotesk text-gray-100 pt-2">
                        Say hello 👋🏼 to my new favorite beauty tool from
                        @michaeltoddbeauty ! This makeup.....
                        <span className="font-500 text-16 hover:underline leading-6 font-post-grotesk text-primary-100">
                          Read more
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white ">
                  <img src="/images/customer-9.png" className="w-full" />
                  <div className="px-3 py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img src="/images/customer-9-1.png" />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              @perkiperkins85
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            Nov 06,2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            src="/images/svg/instagram.svg"
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p className="font-400 text-16 leading-6 font-post-grotesk text-gray-100 pt-2">
                        A bit of a personal question, but do you shave, wax or
                        use...
                        <span className="font-500 text-16 hover:underline leading-6 font-post-grotesk text-primary-100">
                          Read more
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn-primary mx-auto">
                Try it now & save 20%
              </button>
              <p className="text-black font-400 font-post-grotesk text-16 leading-5 text-center pt-2">
                30-Day Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* gurantee */}
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-y-12">
          <div className="lg:pr-12 relative">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-x-10 warranty-line">
              <img src="/images/guarantee.png" className="w-[150px]" />
              <div>
                <h2 className="lg:text-30 text-28 leading-10 text-primary-100 pb-4 lg:text-start text-center">
                  100% Money- Back Guarantee
                </h2>
                <h5 className="lg:text-20 text-18 leading-6 text-primary-100 pb-2 lg:text-start text-center">
                  Love it or get your money back.
                </h5>
                <p className="text-15 lg:text-18 lg:text-start text-center">
                  If you are unhappy with your purchase, simply <br></br>return
                  it within 30 days and we&#x27;ll give you a refund.<br></br>{" "}
                  It&#x27;s that simple.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-12 relative">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-x-10 ">
              <img src="/images/warranty.png" className="w-[150px]" />
              <div>
                <h2 className="text-30 leading-10 text-primary-100 pb-4 lg:text-start text-center">
                  3-Year Warranty
                </h2>
                <h5 className="lg:text-20 text-18 leading-6 text-primary-100 pb-2 lg:text-start text-center">
                  Better skin for years to come
                </h5>
                <p className="text-15 lg:text-18 lg:text-start text-center">
                  Use Sonicsmooth with peace of mind, <br></br> knowing your
                  purchase is protected with <br></br> our industry-leading
                  3-year warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product */}

      <div className="container mx-auto  mt-[72px] lg:mt-20 lg:mb-6 lg:px-0 px-2">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative">
              <div className="flex justify-center items-start gap-x-4 ">
                <div className="flex flex-col gap-y-4">
                  <img
                    src="/images/product-33.jpg"
                    className="w-16 h-16 md:block hidden"
                  />
                  <img
                    src="/images/product-33.jpg"
                    className="w-16 h-16 md:block hidden"
                  />
                  <img
                    src="/images/product-34.jpg"
                    className="w-16 h-16 md:block hidden"
                  />
                  <img
                    src="/images/product-35.jpg"
                    className="w-16 h-16 md:block hidden"
                  />
                </div>
                <div className="relative">
                  <div>
                    <img src="/images/product-36.jpg" />
                  </div>
                  <div className="absolute top-0 left-0 md:block hidden">
                    <img src="/images/svg/dibs.svg" className="mx-auto" />
                  </div>
                </div>
              </div>
              <div className="bg-secondary-300 py-2 px-4 absolute sm:top-0 sm:right-10 ">
                <p className="font-pst-grotesk font-400 text-14 leading-5 text-white text-center">
                  20% OFF CODE: GLOW20
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div>
              <h2 className="font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-3">
                Sonicsmooth
              </h2>
              <p className="font-400 text-16 leading-5 text-secondary-200 pb-3 font-post-grotesk">
                2-IN-1 SONIC DERMAPLANING SYSTEM
              </p>
              <div className="flex justify-start items-center gap-x-5 border-b border-gray-400 pb-4">
                <img src="/images/svg/five-star.svg" />
                <p className="text-gray-100 text-14  font-post-grotesk">
                  4.8 (2,293)
                </p>
              </div>
              <div className="py-3 border-b border-gray-400">
                <div className="">
                  <p className="text-secondary-300 font-400 text-24 leading-8 pb-2">
                    $95.20{" "}
                    <span className="line-through decoration-secondary-100/60 text-gray-100/60">
                      {" "}
                      $119.00
                    </span>
                  </p>
                  <Link href="#">
                    <p>or 4 payments of $29.75 with afterpay</p>
                  </Link>
                </div>
              </div>
              <div className="py-4 border-b border-gray-400">
                <p className="font-post-grotesk font-400 text-16 leading-5 text-gray-100">
                  Instantly reveal younger, smoother, softer, more radiant skin
                  with Michael Todd Beauty’s award-winning, at-home sonic
                  dermaplaning system. Sonicsmooth is dermatologist approved for
                  quick, easy, and painless dead skin and peach fuzz removal.
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-100">
                  <li className="pb-3">
                    Preps skin for better skincare absorption
                  </li>
                  <li className="pb-3">
                    {" "}
                    Removes build-up on top layer of skin
                  </li>
                  <li className="pb-3"> Flawless makeup application</li>
                </ul>
              </div>
              <div className="py-4 border-b border-gray-400 mb-6">
                <p className="font-post-gretosk text-16 leading-5 text-gray-100 font-400">
                  Color: Lavender Lust
                </p>
                <div className="flex flex-wrap gap-x-4 pt-2">
                  <div className=" border border-black p-1 rounded-full">
                    <div className="bg-primary-100 w-7 h-7 rounded-full bg-center bg-cover"></div>
                  </div>
                  <div className=" border border-black p-1 rounded-full">
                    <div className="bg-primary-200 w-7 h-7 rounded-full bg-center bg-cover"></div>
                  </div>
                  <div className=" border border-black p-1 rounded-full">
                    <div className="bg-primary-300 w-7 h-7 rounded-full bg-center bg-cover"></div>
                  </div>
                </div>
                <div className="flex items-center gap-x-5 py-4">
                  <div className="border border-gray-100 w-24 md:w-[135px] p-3">
                    <div className="flex justify-between items-center">
                      <p className="cursor-pointer">-</p>
                      <p className="">1</p>
                      <p className="cursor-pointer">+</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="btn-primary w-full sm:w-[378px]">
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div>
                  <img src="/images/payment-method.png" className="" />
                </div>
                <div className="py-3">
                  <div className="flex justify-start items-center gap-x-2">
                    <img src="/images/svg/calendar.svg" />
                    <p className="font-400 text-14 font-post-grotesk hover:underline">
                      30-Day Money-Back Guarantee
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2 pt-3">
                    <img src="/images/svg/shield.svg" />
                    <p className="font-400 text-14 font-post-grotesk hover:underline">
                      3 Year Warranty
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* allure */}
      <div className="bg-primary-200 py-12 lg:py-14">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-y-10">
            <div className="lg:col-span-4 md:col-span-12 col-span-6 lg:max-w-[282px] sm:border-0 sm:pr-0 pr-3 border-r border-primary-100/40">
              <img src="/images/svg/allure.svg" className="pb-3" />
              <p className="font-500 text-16 leading-6 text-primary-100 font-post-grotesk">
                “This was easy and painless to use and so much faster than other
                at- home dermaplaners I&#x27;ve tried.”
              </p>
            </div>
            <div className="col-span-6 lg:col-span-8 md:col-span-12 sm:pl-0 pl-3 m-auto">
              <div className="grid grid-cols-12 md:gap-x-[60px] sm:gap-x-5 gap-y-10">
                <div className="md:col-span-3 sm:col-span-6 col-span-12">
                  <img
                    src="/images/svg/calendar.svg"
                    className="pb-2 sm:m-0 m-auto"
                  />
                  <p className="font-400 text-20 font-cambon text-primary-100 leading-7">
                    30-Day Money- Back Guarantee
                  </p>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-12  sm:block hidden">
                  <img
                    src="/images/svg/transport.svg"
                    className="pb-2 sm:m-0 m-auto"
                  />
                  <p className="font-400 text-20 font-cambon text-primary-100 leading-7">
                    Free Shipping & Easy Returns
                  </p>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-12  sm:block hidden">
                  <img
                    src="  /images/svg/shield.svg"
                    className="pb-2 sm:m-0 m-auto"
                  />
                  <p className="font-400 text-20 font-cambon text-primary-100 leading-7">
                    3-Year Warranty
                  </p>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-12  sm:block hidden">
                  <img
                    src="/images/svg/buy.svg"
                    className="pb-2 sm:m-0 m-auto"
                  />
                  <p className="font-400 text-20 font-cambon text-primary-100 leading-7">
                    Shop Now, Pay Later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* faq */}
      <div className="container mx-auto md:px-0 px-4 py-10 lg:pt-[84px] lg:pb-20">
        <h2 className="pb-[30px] lg:pb-10 font-cambon text-center font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
          Frequently Asked Questions
        </h2>
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 ">
          <p className="font-400 text-18 lg:text-20 font-cambon leading-6 lg:leading-7 text-primary-100">
            What is Sonicsmooth?
          </p>
          <img src="/images/svg/icon-add.svg" />
        </div>
      </div>

      {/* experience */}
      <div className="bg-primary-300">
        <div className="container">
          <div className="lg:pt-[70px] py-[35px] lg:pb-[60px] md:px-0 px-3">
            <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
              Bringing the Spa Experience to Your Home
            </h2>
            <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 text-center lg:max-w-[68%] mx-auto">
              We believe that the joy and confidence of having smooth, flawless
              skin should be easily accessible to everyone. We’re sure you’ll
              enjoy your sonicsmooth as much as over 1 million customers already
              do – from the very first moment you open the box!
            </p>
            <video className="pt-14 mx-auto" autoPlay="autoplay" loop muted>
              <source src="/video/skin-concern.mp4" type="video/mp4"></source>
            </video>
          </div>
          <div className=" border-t border-gray-100/20 "></div>
          <div className="py-[35px] lg:py-[60px]">
            <div className="pb-[30px] lg:pb-[67px]">
              <h3 className="font-500 text-center text-gray-100 lg:text-16 text-15 leading-5 font-post-grotesk pb-2">
                SEE WHAT OUR CUSTOMERS ARE SAYING!
              </h3>
              <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
                More Happy Sonicsmooth Customers
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-y-6 md:px-0 px-3">
              <div className="col-span-12 lg:col-span-5 max-w-[500px] m-auto">
                <div className="">
                  <img src="/images/svg/five-star.svg" className="pb-2" />
                  <p className="font-400 text-18 lg:text-20 text-primary-100 leading-6 pb-3">
                    I have new skin!
                  </p>
                  <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 pb-4">
                    “I have always exfoliated my skin but this is a whole new
                    ball of wax. With it removing the peach fuzz your skin care
                    products go in quicker and make up is flawless.”
                  </p>
                  <div className="flex justify-start items-center gap-x-2 border-b py-6 border-primary-100/10">
                    <p className="font-500 lg:text-16 text-15 leading-5">
                      - Jenn, oklahoma
                    </p>
                    <div className="flex justify-center items-center gap-x-1">
                      <img src="/images/verified.png" />
                      <p className="text-secondary font-700 text-15 leading-5">
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-2"></div>
              <div className="col-span-12 lg:col-span-5 max-w-[500px] m-auto">
                <div className="">
                  <img src="/images/svg/five-star.svg" className="pb-2" />
                  <p className="font-400 text-20 text-primary-100 leading-6 pb-3">
                    It Works!
                  </p>
                  <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 pb-4">
                    “I used this device and it really works I am so glad I
                    bought the extra heads”
                  </p>
                  <div className="flex justify-start items-center gap-x-2 border-b py-6 border-primary-100/10">
                    <p className="font-500 lg:text-16 text-15 leading-5">
                      - MegNYC, New York
                    </p>
                    <div className="flex justify-center items-center gap-x-1">
                      <img src="/images/verified.png" />
                      <p className="text-secondary font-700 text-15 leading-5">
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 lg:pt-[60px]">
              <Link href="#">
                <div className="flex justify-center items-center gap-x-2 hover:underline">
                  <p className="text-primary-100 text-18 font-500 leading-6">
                    More Reviews
                  </p>
                  <img src="/images/svg/right-arrow.svg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* __Questions */}
      <div>
        <div className="bg-primary-100">
          <div className="container mx-auto md:px-0 px-3">
            <div className="text-center lg:py-20 md:py-12 py-9">
              <h2 className="font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-300 pb-5">
                Still Have Questions ?
              </h2>
              <p className="font-post-grotesk font-500 lg:text-18 text-16 lg:leading-7 leading-6 text-primary-300 pb-4">
                If you have any questions about Sonicsmooth, contact us at
              </p>
              <Link href="mailto:customerservice@michaeltoddbeauty.com">
                <p className="font-400 text-16 lg:text-18 leading-6 lg:leading-7 text-primary-300 pb-4 hover:underline">
                  mailto:customerservice@michaeltoddbeauty.com
                </p>
              </Link>
              <p className="font-400 text-16 lg:text-18 leading-7 text-primary-300">
                Our beauty experts are standing by!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primary-500">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <img src="/images/product-img-3.png" className="w-full" />
            </div>
            <div className="m-auto">
              <h2 className="font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
                Peach Fuzz & Dull Skin Don’t Stand a Chance!
              </h2>
              <p className="font-500 text-16 leading-6 font-post-grotesk text-gray-100 pb-4">
                Reveal the smoothest, most radiant skin of your life and start
                enjoying brighter days with confidence.
              </p>
              <ul>
                <li className="flex justify-start items-center gap-x-2 pb-2">
                  <img src="/icons/icon-correct.png" className="w-5 h-5" />
                  <p className="font-400 text-16 leading-5 text-gray-100">
                    Exfoliates dead skin away & gently removes facial hair.
                  </p>
                </li>
                <li className="flex justify-start items-center gap-x-2 pb-2">
                  <img src="/icons/icon-correct.png" className="w-5 h-5" />
                  <p className="font-400 text-16 leading-5 text-gray-100">
                    Boosts collagen production, tightens pores, and increases
                    skincare absorption.
                  </p>
                </li>
                <li className="flex justify-start items-center gap-x-2 ">
                  <img src="/icons/icon-correct.png" className="w-5 h-5" />
                  <p className="font-400 text-16 leading-5 text-gray-100">
                    Leaves skin utterly radiant and ready for flawless makeup
                    application.
                  </p>
                </li>
              </ul>
              <div>
                <p className="pt-4 pb-8 text-primary-100 font-700 text-18 leading-6">
                  Try Sonicsmooth Risk-Free & Get 20% OFF
                </p>
                <button className="btn-primary max-w-[280px]">
                  Bye-Bye Peach Fuzz
                </button>
                <p className="pt-4 text-black font-400 text-16 leading-5">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="container mx-auto md:px-0 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-6 md:py-14 py-10">
          <div>
            <div className="flex md:justify-start justify-center items-center gap-x-12">
              <div>
                <h4 className="font-700 text-18 leading-7 text-primary-100 pb-9">
                  About
                </h4>
                <ul className="font-400 text-18 leading-5 text-primary-100">
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Contact Us</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Returns</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-700 text-18 leading-7 text-primary-100 pb-9">
                  Menu
                </h4>
                <ul className="font-400 text-18 leading-5 text-primary-100">
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Benefits</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Why Sonicsmooth ?</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">Reviews</Link>
                  </li>
                  <li className="hover:underline transition-all duration-1000 pb-3">
                    <Link href="#">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <h4 className="font-700 text-18 text-primary-100 md:pb-9 pb-6 md:text-start text-center">
              Follow Us
            </h4>
            <div className="flex justify-center items-center gap-x-3">
              <Link href="https://www.facebook.com/MichaelToddBeauty">
                <img src="/images/svg/facebook.svg" className="w-6 h-6" />
              </Link>

              <Link href="https://www.instagram.com/michaeltoddbeauty">
                <img src="/images/svg/instagram.svg" className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com/MTBeauty_tweets">
                <img src="/images/svg/twitter.svg" className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/c/michaeltoddbeautyofficial">
                <img src="/images/svg/youtube.svg" className="w-6 h-6" />
              </Link>
              <Link href="https://www.pinterest.com/MichaelToddBeauty">
                <img src="/images/svg/pintrest.svg" className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="md:ml-auto mx-auto flex flex-col">
            <div className="md:order-1 order-2">
              <Link href="#">
                <img
                  src="/images/svg/logo.svg "
                  className="h-10 w-[222px] md:mb-8 mb-0 md:mx-0 mx-auto "
                />
              </Link>
            </div>
            <div className="md:order-2 order-1 md:mb-0 mb-6">
              <p className="font-700 text-18 leading-6 text-primary-100 pb-4 md:text-start text-center">
                Questions?
              </p>
              <Link href="mailto:customerservice@michaeltoddbeauty.com">
                <p className="font-400 md:text-18 text-16 leading-7 text-primary-100 flex flex-wrap md:flex-row flex-col">
                  <span className="block text-center">Email:</span>
                  <span className="hover:underline pl-2">
                    mailto:customerservice@michaeltoddbeauty.com
                  </span>
                </p>
                <p className=""></p>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-[1px] border-gray-100/10 "> </div>
          <div className="mt-5 mb-10">
            <div className="flex flex-wrap mb-5 justify-center items-center gap-y-3">
              <Link href="#">
                <p className="text-gray-100 opacity-[0.44] md:text-16 text-14 leading-5 md:leading-7 font-400 straight-line px-3 relative">
                  @2021 Micheal Todd Beauty
                </p>
              </Link>
              <p className="text-gray-100 opacity-[0.44] md:text-16 text-14 leading-5 md:leading-7 font-400 straight-line px-3 relative">
                All Rights Reserved
              </p>
              <Link href="#">
                <p className="hover:underline text-gray-100 opacity-[0.44] md:text-16 text-14 leading-5 md:leading-7 font-400 straight-line px-3 relative">
                  Privacy Policy
                </p>
              </Link>
              <Link href="#">
                <p className="hover:underline text-gray-100 opacity-[0.44] md:text-16 text-14 leading-5 md:leading-7 font-400 px-3">
                  Terms & Conditions
                </p>
              </Link>
            </div>
            <div className="pt-5 flex flex-wrap justify-center items-center gap-4">
              <Link href="#">
                <img src="/images/svg/amazon-pay.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/american-express.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/apple-pay.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/discover.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/master-card.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/paypal.svg" />
              </Link>
              <Link href="#">
                <img src="/images/svg/visa.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
