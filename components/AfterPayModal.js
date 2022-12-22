import React from "react";

const AfterPayModal = () => {
  return (
    <>
      <div className="max-w-[780px] mx-auto sm:p-6">
        <div className="max-w-[275px] mx-auto">
          <img src="/images/afterpay.png" className=" mx-auto" />
        </div>
        <div className="pt-5 pb-7 md:pb-14 ">
          <p className="text-32 md:text-42 font-600 text-center leading-[48px]">
            Shop now. Pay in 4. <br /> Always interest-free.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-end gap-4">
          <div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src="/images/bag.png" className=" mx-auto" />
              </div>
              <p className="text-center font-600 px-1 pt-4">Add your favorites to cart</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src="/images/chain-laptop.png" className=" mx-auto" />
              </div>
              <p className="text-center font-600 px-1 pt-4">Add your favorites to cart</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src="/images/circle.png" className=" mx-auto" />
              </div>
              <p className="text-center font-600 px-1 pt-4">Add your favorites to cart</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src="/images/bag.png" className=" mx-auto" />
              </div>
              <p className="text-center font-600 px-1 pt-4">Add your favorites to cart</p>
            </div>
          </div>
        </div>
        <div class="text-12 text-center py-6 sm:py-12">You must be over 18, a resident of the U.S. and meet additional eligibility criteria to qualify. Late fees may apply. Estimated payment amounts shown on product pages exclude taxes and shipping charges, which are added at checkout. Click
        <a href="#"> here </a>
          for complete terms. <span class="loan-agreement">Loans to California residents made or arranged pursuant to a California Finance Lenders Law license.</span> <span>© 2020 Afterpay</span></div>
      </div>
    </>
  );
};

export default AfterPayModal;
