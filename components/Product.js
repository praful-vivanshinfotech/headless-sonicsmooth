import { ProductContext } from "@/context/productContext";
import { productCheckout } from "@/lib/shopify";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import sanitizeHtml from "sanitize-html";
import {
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import IconRoundSpin from "../public/images/svg/icon-round.svg";
import AfterPayModal from "./AfterPayModal";
import { Modal } from "./Modal";
const Product = ({
  offer_title,
  payment_method_image,
  rating_star,
  rating_user,
  product_guarantee_description,
  after_pay_content,
  after_pay_image,
  award_image,
  subtitle,
  section_id,
}) => {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const [activeVariants, setActiveVariants] = useState();
  const [variantsError, setVariantsError] = useState();
  const [productGallery, setProductGallery] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [activeVariantsID, setActiveVariantsID] = useState();
  const [productQuantity, setProductQuantity] = useState(1);
  const product = useContext(ProductContext);
  if (product.product == null || product.product == "") {
    return (
      <h2 className="text-center text-white bg-secondary-300 text-22 py-5">
        Invalid product id{" "}
      </h2>
    );
  }
  const {
    title,
    descriptionHtml,
    priceRange,
    variants,
    images,
    media,
    options,
  } = product.product;

  const setVariants = (title, variantsID) => {
    setProductGallery(true);
    setVariantsError(false);
    setActiveVariants(title);
    setActiveVariantsID(variantsID);
  };
  const Checkout = async () => {
    if (activeVariants) {
      setShowLoader(true);
      const itemCheckout = await productCheckout(
        activeVariantsID,
        productQuantity
      );
      router.push(itemCheckout.checkoutCreate.checkout.webUrl);
    } else {
      setVariantsError(true);
    }
  };
  const mediaGallery = {
    common: [],
  };
  const videoGallery = {
    thumbImage: [],
    thumbVideo: [],
  };
  options.map((variant) => {
    variant.values.map((color) => {
      mediaGallery[color] = [];
    });
  });
  media?.edges.map((gallery, index) => {
    var altName = gallery?.node?.previewImage?.altText
      ?.split("Sonicsmooth")[0]
      .trim();
    if (gallery.node.mediaContentType == "IMAGE") {
      if (Object.hasOwn(mediaGallery, altName)) {
        mediaGallery[altName].push({
          src: gallery.node.previewImage.url,
          altName: altName,
          width: gallery.node.previewImage.width,
          height: gallery.node.previewImage.height,
        });
      } else {
        mediaGallery.common.push({
          src: gallery.node.previewImage.url,
          altName: altName,
          width: gallery.node.previewImage.width,
          height: gallery.node.previewImage.height,
        });
      }
    } else {
      gallery?.node.sources.map((videoURL, index) => {
        if (index == 0 && videoURL.format == "mp4") {
          videoGallery.thumbImage.push({
            src: gallery.node.previewImage.url,
            altName: altName,
            width: gallery.node.previewImage.width,
            height: gallery.node.previewImage.height,
          });
          videoGallery.thumbVideo.push({
            src: videoURL?.url,
          });
        }
      });
    }
  });
  return (
    <div
      id={section_id && section_id.trim()}
      className="container mx-auto mt-[72px] lg:mt-20 lg:mb-6 lg:px-0 px-4"
    >
      <div className="grid grid-cols-12 gap-y-24 sm:gap-y-12 lg:gap-x-[70px]">
        <div className="col-span-12 lg:col-span-6 ">
          <div className="flex items-stretch h-[110%] md:h-auto">
            <div className="w-2/12 relative hidden md:block">
              <div className="h-full top-0 bottom-0 absolute left-0 block">
                <Swiper
                  className="h-full"
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  direction="vertical"
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {productGallery
                    ? mediaGallery &&
                      mediaGallery[activeVariants].map((gallery, index) => (
                        <SwiperSlide
                          className="!w-16 !h-16 mx-auto filter-img"
                          key={`thumbnail-gallery-${index}`}
                        >
                          <div className=" w-full cursor-pointer">
                            <Image
                              width={gallery.width}
                              height={gallery.height}
                              alt={
                                gallery.altName
                                  ? gallery.altName
                                  : "michael-todd-beauty"
                              }
                              src={gallery.src}
                              className="thumbnail-slider object-contain object-center h-full w-full"
                            />
                          </div>
                        </SwiperSlide>
                      ))
                    : media.edges.map((gallery, index) =>
                        gallery.node.mediaContentType == "IMAGE" ? (
                          <SwiperSlide
                            className="!w-16 !h-16 mx-auto all-img"
                            key={`thumbnail-gallery-${index}`}
                          >
                            <div className="mb- w-full cursor-pointer">
                              <Image
                                width={gallery.node.previewImage.width}
                                height={gallery.node.previewImage.height}
                                alt={
                                  gallery.node.previewImage.altText
                                    ? gallery.node.previewImage.altText
                                    : "gallery.altName"
                                }
                                src={gallery.node.previewImage.url}
                                className="thumbnail-slider object-contain object-center h-full w-full"
                              />
                            </div>
                          </SwiperSlide>
                        ) : (
                          ""
                        )
                      )}
                  {mediaGallery &&
                    mediaGallery.common.map((gallery, index) => (
                      <SwiperSlide
                        className="!w-16 !h-16 mx-auto"
                        key={`thumbnail-common-${index}`}
                      >
                        <div className="mb- w-full cursor-pointer">
                          <Image
                            width={gallery.width}
                            height={gallery.height}
                            alt={
                              gallery.altName
                                ? gallery.altName
                                : "thumbImage.altName"
                            }
                            src={gallery.src}
                            className="thumbnail-slider object-contain object-center h-full w-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}

                  {videoGallery &&
                    videoGallery.thumbImage.map((thumbImage, index) => (
                      <SwiperSlide
                        className="!w-16 !h-16 mx-auto"
                        key={`thumbnail-image-${index}`}
                      >
                        <div className="mb- w-full cursor-pointer dddd">
                          <Image
                            width={thumbImage.width}
                            height={thumbImage.height}
                            alt={
                              thumbImage.altName
                                ? thumbImage.altName
                                : "gallery.altName"
                            }
                            src={thumbImage.src}
                            className="thumbnail-slider object-contain object-center h-full w-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
            <div className="w-full md:w-10/12 relative z-10">
              <Swiper
                className="h-full"
                direction="horizontal"
                speed={500}
                spaceBetween={10}
                navigation={false}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    pagination: true,
                  },
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[
                  FreeMode,
                  Navigation,
                  Thumbs,
                  EffectCoverflow,
                  Pagination,
                ]}
              >
                {productGallery
                  ? mediaGallery &&
                    mediaGallery[activeVariants].map((gallery, index) => (
                      <SwiperSlide key={`gallery-${index}`}>
                        <div className="mb-2 w-full cursor-pointer py-4">
                          <Image
                            width={gallery.width}
                            height={gallery.height}
                            alt={
                              gallery.altName
                                ? gallery.altName
                                : "michael-todd-beauty"
                            }
                            src={gallery.src}
                            className="thumbnail-slider object-contain object-center h-full w-full"
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  : media.edges.map((gallery, index) =>
                      gallery.node.mediaContentType == "IMAGE" ? (
                        <SwiperSlide key={`gallery-${index}`}>
                          <div className="mb-2 w-full cursor-pointer py-4">
                            <Image
                              width={gallery.node.previewImage.width}
                              height={gallery.node.previewImage.height}
                              alt={
                                gallery.node.previewImage.altText
                                  ? gallery.node.previewImage.altText
                                  : "michael-todd-beauty"
                              }
                              src={gallery.node.previewImage.url}
                              className="thumbnail-slider object-contain object-center h-full w-full"
                            />
                          </div>
                        </SwiperSlide>
                      ) : (
                        ""
                      )
                    )}

                {mediaGallery &&
                  mediaGallery.common.map((gallery, index) => (
                    <SwiperSlide key={`gallery-common-${index}`}>
                      <div className="mb-2 w-full cursor-pointer py-4">
                        <Image
                          width={gallery.width}
                          height={gallery.height}
                          alt={
                            gallery.altName
                              ? gallery.altName
                              : "michael-todd-beauty"
                          }
                          src={gallery.src}
                          className="thumbnail-slider object-contain object-center h-full w-full"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                {videoGallery &&
                  videoGallery.thumbVideo.map((video, index) => (
                    <SwiperSlide key={`thumbnail-video-${index}`}>
                      <div className="mb-2 w-full cursor-pointer">
                        <video
                          className="thumbnail-slider object-contain object-center h-full w-full"
                          autoPlay="autoplay"
                          loop
                          muted
                        >
                          <source src={video.src} type="video/mp4"></source>
                        </video>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="absolute top-0 left-0 md:block hidden z-20">
                <img
                  alt=""
                  src={award_image}
                  className="mx-auto w-[100px] h-[100px]"
                />
              </div>
              <div className="bg-secondary-300 py-2 px-4 -bottom-10 sm:bottom-auto absolute z-20 sm:top-0 sm:right-0 ">
                <p className="font-pst-grotesk font-400 text-14 leading-5 text-white text-center ">
                  {offer_title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div>
            <h2 className="font-cambon font-400 lg:text-[38px] text-30 lg:leading-[51px] leading-9 text-primary-100 pb-3">
              {title && title}
            </h2>
            <p className="font-400 text-16 leading-5 text-secondary-200 pb-3 font-post-grotesk">
              {subtitle && subtitle}
            </p>
            <div className="flex justify-start items-center gap-x-5 border-b border-gray-400 pb-4">
              <p className="text-gray-100 text-14  font-post-grotesk flex items-center">
                <i
                  className="after:text-primary text-26 flex mr-2 items-center"
                  data-star={rating_star && rating_star}
                ></i>
                {rating_star} ({rating_user})
              </p>
            </div>
            <div className="py-3 border-b border-gray-400">
              <div className="">
                <div className="text-secondary-300 font-400 text-24 leading-8 pb-2 font-post-grotesk opacity-[0.66]">
                  ${priceRange?.minVariantPrice?.amount}{" "}
                  <span className="line-through decoration-secondary-100/60 text-gray-100/60">
                    {"  "}${priceRange?.maxVariantPrice?.amount}
                  </span>
                </div>
                <div className="flex flex-wrap items-center font-post-grotesk">
                  <p>{after_pay_content}</p>
                  <Modal
                    className=""
                    title=""
                    modalButton={
                      <div className="cursor-pointer flex items-center">
                        <img className="ml-2" src={after_pay_image} alt="" />{" "}
                        <span className="text-12 -mt-2">ⓘ</span>
                      </div>
                    }
                    modalcontent={<AfterPayModal />}
                  />
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-gray-400 prose-li:pb-3 prose-ul:list-disc prose-ul:pl-5 prose-ul:mt-2 prose-ul:text-gray-100 prose-ul:font-post-grotesk">
              <div
                className="font-post-grotesk font-500 text-16 leading-5 text-gray-100"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(descriptionHtml && descriptionHtml),
                }}
              ></div>
            </div>
            <div className="py-4 border-b border-gray-400 mb-6">
              <p className="font-post-gretosk text-16 leading-5 text-gray-100 font-400">
                Color: {activeVariants && activeVariants}
              </p>
              <div className="flex flex-wrap gap-x-4 pt-2">
                {variants.edges &&
                  variants?.edges?.map((option, index) => {
                    return (
                      <div
                        onClick={() =>
                          setVariants(option?.node?.title, option?.node?.id)
                        }
                        key={`color-${index}`}
                        className={`border p-1 rounded-full ${
                          activeVariants == option?.node?.title
                            ? "border-black"
                            : ""
                        }`}
                      >
                        <div
                          className="w-7 h-7 rounded-full bg-center bg-cover cursor-pointer"
                          style={{
                            backgroundColor: option?.node?.color?.value,
                          }}
                        ></div>
                      </div>
                    );
                  })}
              </div>
              {variantsError && (
                <div className="text-secondary-300 text-16">
                  Please select Color
                </div>
              )}
              <div className="flex items-center gap-x-5 py-4">
                <div className="border border-gray-100 h-12 w-24 md:w-[135px] p-3">
                  <div className="flex justify-between items-center">
                    <div
                      onClick={() => setProductQuantity(productQuantity - 1)}
                      className={`${
                        productQuantity > 1
                          ? "cursor-pointer"
                          : "pointer-events-none opacity-40"
                      }`}
                    >
                      -
                    </div>
                    <div className="">{productQuantity}</div>
                    <div
                      onClick={() => setProductQuantity(productQuantity + 1)}
                      className="cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    onClick={() => Checkout()}
                    className="btn-primary leading-5  w-full sm:w-[378px]"
                  >
                    {showLoader ? (
                      <IconRoundSpin className="animate-spin m-auto h-5 w-5 hover:text-primary" />
                    ) : (
                      "Add To Cart"
                    )}
                  </button>
                </div>
              </div>
              <div>
                <img src={payment_method_image} className="" alt="" />
              </div>
              <div className="py-3">
                {product_guarantee_description &&
                  product_guarantee_description.map((item, index) => (
                    <div
                      key={`guarentee-${index}`}
                      className={`flex justify-start items-center gap-x-2 ${
                        index + 1 == 1 ? "" : "pt-3"
                      }`}
                    >
                      <img src={item.icon} alt="" />
                      <p className="font-400 text-14 font-post-grotesk hover:underline">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
