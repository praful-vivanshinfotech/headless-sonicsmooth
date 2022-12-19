import React from "react";

const ClientTestimonials = () => {
  return (
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
              <img src="/images/customer-1.png" className="w-24 h-24 mx-auto" />
              <img src="/images/svg/five-star.svg" className="py-4 mx-auto" />
              <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                I love, love it!
              </p>
              <p className="font-post-grotesk text-gray-100 font-400 text-15 lg:text-16 leading-5 lg:leading-6">
                I am honestly floored by this product! I’ve used a Tinkle razor
                in the past for dermaplaning and thought that was doing the job,
                but the Sonicsmooth tool blows that out of the water!
              </p>
              <p className="font-500 text-16 leading-5 text-primary-100 pt-6 lg:pb-2">
                - Shannon R.
              </p>
            </div>
          </div>
          <div className="bg-primary-600 px-6 py-8 text-center">
            <div>
              <img src="/images/customer-2.png" className="w-24 h-24 mx-auto" />
              <img src="/images/svg/five-star.svg" className="py-4 mx-auto" />
              <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                Best product I&#x27;ve ever owned!
              </p>
              <p className="font-post-grotesk text-gray-100 font-400 text-15 lg:text-16 leading-5 lg:leading-6">
                The dead skin cells and peach fuzz came off in minutes and look
                (if I dare say so myself) glowy. Baby bottom smooth and healthy!
                Also, no unwanted hair. This is seriously the best skin
                investment I&#x27;ve ever made (I mean this and my botox.)
              </p>
              <p className="font-500 text-16 leading-5 text-primary-100 pt-6 lg:pb-2">
                - Megan O.
              </p>
            </div>
          </div>
          <div className="bg-primary-600 px-6 py-8 text-center">
            <div>
              <img src="/images/customer-3.png" className="w-24 h-24 mx-auto" />
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
  );
};

export default ClientTestimonials;
