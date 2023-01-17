import { ProductContext } from "@/context/productContext";
import { getShopifyProducts } from "@/lib/shopify";
import { Partytown } from "@builder.io/partytown/react";

import {
  builder,
  Builder,
  BuilderComponent,
  useIsPreviewing,
} from "@builder.io/react";
import dynamic from "next/dynamic";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
builder.init(process.env.NEXT_PUBLIC_BUILDER_KEY);
export async function getStaticProps({ params }) {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();
  const products = page?.data?.sku
    ? await getShopifyProducts(page?.data?.sku)
    : "";
  return {
    props: {
      page: page || null,
      products: products || null,
    },
    revalidate: 1,
  };
}
export async function getStaticPaths() {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
    limit: 0,
  });
  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}
export default function Page({ page, products }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.description} />
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <script
          src="https://example.com/analytics.js"
          type="text/partytown"
          defer
        />
      </Head>
      <ProductContext.Provider value={products}>
        <BuilderComponent model="page" content={page} />
      </ProductContext.Provider>
    </>
  );
}
// --------- Builder register -------------  //
Builder.registerComponent(
  dynamic(() => import("@/components/Banner")),
  {
    name: "BannerSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "rating_content",
        type: "longText",
      },
      {
        name: "rating_start",
        type: "number",
        defaultValue: 0,
      },
      {
        name: "banner_title",
        type: "longText",
      },
      {
        name: "banner_Description",
        type: "list",

        subFields: [
          {
            name: "Icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description",
            type: "text",
            required: true,
          },
        ],
      },
      {
        name: "banner_sub_title",
        type: "longText",
      },

      {
        name: "text_on_button",
        type: "longText",
      },
      {
        name: "button_link",
        type: "longText",
      },
      {
        name: "shipping",
        type: "longText",
      },
      {
        name: "shipping_day",
        type: "longText",
      },

      {
        name: "review_author",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      },
      {
        name: "review_content",
        type: "longText",
      },
      {
        name: "author_name",
        type: "longText",
      },
      {
        name: "banner_images",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "text",
            type: "text",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/BrandLogo")),
  {
    name: "BrandLogo",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "brand_Logo_Section",
        type: "list",
        subFields: [
          {
            name: "logo",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "logo_alt_name",
            type: "string",
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/Sales")),
  {
    name: "SaleSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "sales_details",
        type: "list",
        subFields: [
          {
            name: "heading",
            type: "longText",
            required: true,
          },
          {
            name: "details",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/Header")),
  {
    name: "HeaderSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "header_menu",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "longText",
            required: true,
          },
          {
            name: "section_id",
            type: "string",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/OfferBanner")),
  {
    name: "OfferBannerSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "description_1",
        type: "longText",
      },
      {
        name: "description_2",
        type: "longText",
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SkinConcern")),
  {
    name: "SkinConcernSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "video_url",
        type: "longText",
        required: true,
        required: true,
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description_1_1",
        type: "longText",
        required: true,
      },
      {
        name: "description_1_2",
        type: "longText",
        required: true,
      },
      {
        name: "description_1_3",
        type: "longText",
        required: true,
      },

      {
        name: "description_2",
        type: "longText",
        required: true,
      },
      {
        name: "description_3_1",
        type: "longText",
        required: true,
      },
      {
        name: "description_3_2",
        type: "longText",
        required: true,
      },
      {
        name: "description_3_3",
        type: "longText",
        required: true,
      },
      {
        name: "description_4",
        type: "longText",
        required: true,
      },
      {
        name: "description_5",
        type: "longText",
        required: true,
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/GlowingSkin")),
  {
    name: "GlowingSkinSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "skin_image",
        type: "list",
        subFields: [
          {
            name: "skin_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "skin_image_alt_name",
            type: "string",
          },
          {
            name: "text",
            type: "string",
          },
        ],
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description_1",
        type: "longText",
        required: true,
      },
      {
        name: "description_2",
        type: "longText",
        required: true,
      },
      {
        name: "button_text",
        type: "longText",
        required: true,
      },
      {
        name: "button_link",
        type: "longText",
        required: true,
      },
      {
        name: "guarantee_time",
        type: "longText",
        required: true,
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SonicTechnology")),
  {
    name: "SonicTechnologySection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "sonic_smooth_title",
        type: "longText",
        required: true,
      },
      {
        name: "other_product_title",
        type: "longText",
        required: true,
      },
      {
        name: "sonic_smooth_section_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "other_product_section_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "other_product_section_image_alt_name",
        type: "longText",
      },
      {
        name: "sonic_smooth_section",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "other_products_section",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/HowToUse")),
  {
    name: "HowToUseSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "step_details",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "image_alt_name",
            type: "longText",
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/GuaranteeCard")),
  {
    name: "GuaranteeCardSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "card",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "longText",
            required: true,
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
          {
            name: "sub_description",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SalesCompanyDetails")),
  {
    name: "SalesCompanyDetailsSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "logo",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "sales_card",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/FAQSection")),
  {
    name: "FAQSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "FAQ",
        type: "list",
        subFields: [
          {
            name: "accordion_heading",
            type: "longText",
            required: true,
          },
          {
            name: "accordion_content",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SalesHelp")),
  {
    name: "SalesHelpSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "mail_id",
        type: "longText",
        required: true,
      },
      {
        name: "sub_description",
        type: "longText",
        required: true,
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SalesInstagram")),
  {
    name: "ReviewSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "sub_title",
        type: "string",
        required: true,
      },
      {
        name: "title",
        type: "string",
        required: true,
      },
      {
        name: "rating",
        type: "string",
        required: true,
      },
      {
        name: "award_card",
        type: "list",
        subFields: [
          {
            name: "award_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "award_description_alt_name",
            type: "longText",
          },
          {
            name: "award_description",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "sales_insta_subtitle",
        type: "string",
        required: true,
      },
      {
        name: "sales_insta_profile",
        type: "string",
        required: true,
      },
      {
        name: "insta_post_card",
        type: "list",
        subFields: [
          {
            name: "post_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "post_image_alt_name",
            type: "longText",
            required: true,
          },
          {
            name: "profile_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "profile_id",
            type: "longText",
            required: true,
          },
          {
            name: "post_date",
            type: "longText",
            required: true,
          },
          {
            name: "insta_icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "post_description",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "button",
        type: "longText",
        required: true,
      },
      {
        name: "button_link",
        type: "longText",
        required: true,
      },
      {
        name: "Guarantee",
        type: "longText",
        required: true,
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/IntroducingSonicsmooth")),
  {
    name: "IntroducingSonicSmoothSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "product_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "product_image_alt_name",
        type: "string",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "sub_description_1",
        type: "longText",
        required: true,
      },
      {
        name: "sub_description_2",
        type: "longText",
        required: true,
      },

      {
        name: "introduction_card_first",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "title",
            type: "longText",
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "introduction_card_second",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "title",
            type: "longText",
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "introduction_card_last_client_name",
        type: "longText",
        required: true,
      },
      {
        name: "text_on_button",
        type: "longText",
        required: true,
      },
      {
        name: "button_link",
        type: "longText",
        required: true,
      },

      {
        name: "money_description",
        type: "longText",
        required: true,
      },
    ],
  }
);
// erroe

Builder.registerComponent(
  dynamic(() => import("@/components/Footer")),
  {
    name: "FooterSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "about",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
          },
          {
            name: "link",
            type: "text",
            required: true,
          },
        ],
      },
      {
        name: "menu",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
          },
          {
            name: "link",
            type: "text",
            required: true,
          },
        ],
      },
      {
        name: "social_icon",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "link",
            type: "text",
            required: true,
          },
        ],
      },
      {
        name: "email",
        type: "email",
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/Copyright")),
  {
    name: "CopyrightSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "page_link",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "text",
            required: true,
          },
          {
            name: "link",
            type: "text",
          },
        ],
      },
      {
        name: "payment_card",
        type: "list",
        subFields: [
          {
            name: "card_logo",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/BringingTheSpa")),
  {
    name: "SpaExperienceSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "video_url",
        type: "longText",
        required: true,
      },
      {
        name: "heading",
        type: "longText",
        required: true,
      },
      {
        name: "customer_review_title",
        type: "longText",
        required: true,
      },
      {
        name: "product_reviews",
        type: "list",
        subFields: [
          {
            name: "ratings",
            type: "longText",
            required: true,
          },
          {
            name: "one_word_reviews",
            type: "longText",
            required: true,
          },
          {
            name: "customer_reviews",
            type: "longText",
            required: true,
          },
          {
            name: "customer_name",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/SalesBenefits")),
  {
    name: "SalesBenefitsSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "product_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "product_image_alt_name",
        type: "longText",
      },
      {
        name: "title",
        type: "longText",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        required: true,
      },
      {
        name: "product_benefits",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "benefits",
            type: "longText",
            required: true,
          },
        ],
      },
      {
        name: "sub_description",
        type: "longText",
        required: true,
      },
      {
        name: "text_on_button",
        type: "longText",
        required: true,
      },
      {
        name: "button_link",
        type: "longText",
        required: true,
      },
      {
        name: "money_description",
        type: "longText",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("@/components/ClientTestimonials")),
  {
    name: "ClientTestimonialsSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "sub_title",
        type: "string",
        required: false,
      },
      {
        name: "title",
        type: "string",
        required: false,
      },
      {
        name: "rating",
        type: "string",
        required: false,
      },
      {
        name: "testimonials_card",
        type: "list",
        subFields: [
          {
            name: "client_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "client_image_alt_name",
            type: "longText",
          },
          {
            name: "star",
            type: "longText",
            required: true,
          },
          {
            name: "comment",
            type: "longText",
            required: true,
          },
          {
            name: "description",
            type: "longText",
            required: true,
          },
          {
            name: "client_name",
            type: "longText",
            required: true,
          },
        ],
      },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/Product"), { ssr: true }),
  {
    name: "ProductSection",
    inputs: [
      {
        name: "section_id",
        type: "string",
      },
      {
        name: "offer_title",
        type: "longText",
        required: true,
      },
      {
        name: "award_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "subtitle",
        type: "longText",
        required: true,
      },
      {
        name: "rating_star",
        type: "longText",
        required: true,
      },
      {
        name: "rating_user",
        type: "longText",
        required: true,
      },
      {
        name: "after_pay_content",
        type: "longText",
        required: true,
      },
      {
        name: "after_pay_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "payment_method_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
        required: true,
      },
      {
        name: "product_guarantee_description",
        type: "list",
        subFields: [
          {
            name: "icon",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
          {
            name: "description_1",
            type: "longText",
            required: true,
          },
          {
            name: "description_2",
            type: "longText",
          },
        ],
      },
    ],
  }
);

// --------- register Component -------------  //

Builder.register(
  {
    name: "Banner Section",
    items: [{ item: "BannerSection" }],
  },
  {
    name: "Brand Logo",
    items: [{ item: "BrandLogo" }],
  },
  {
    name: "Sale Section new",
    items: [{ item: "SaleSection" }],
  },
  {
    name: "Header Section",
    items: [{ item: "HeaderSection" }],
  },
  {
    name: "Offer Banner Section",
    items: [{ item: "OfferBannerSection" }],
  },
  {
    name: "Skin Concern Section",
    items: [{ item: "SkinConcernSection" }],
  },
  {
    name: "Glowing Skin Section",
    items: [{ item: "GlowingSkinSection" }],
  },
  {
    name: "Sonic Technology Section",
    items: [{ item: "SonicTechnologySection" }],
  },
  {
    name: "HowToUse Section",
    items: [{ item: "HowToUseSection" }],
  },
  {
    name: "Guarantee Card Section",
    items: [{ item: "GuaranteeCardSection" }],
  },
  {
    name: "Sales Details Section",
    items: [{ item: "SalesCompanyDetailsSection" }],
  },
  {
    name: "FAQ Section",
    items: [{ item: "FAQSection" }],
  },
  {
    name: "Sales Help Section",
    items: [{ item: "SalesHelpSection" }],
  },
  {
    name: "Introducing Sonic Smooth Section",
    items: [{ item: "IntroducingSonicSmoothSection" }],
  },
  {
    name: "Review Section",
    items: [{ item: "ReviewSection" }],
  },
  {
    name: "Client Testimonials Section",
    items: [{ item: "ClientTestimonialsSection" }],
  },
  {
    name: "Product Section",
    items: [{ item: "ProductSection" }],
  },
  {
    name: "Footer  Section",
    items: [{ item: "FooterSection" }],
  },
  {
    name: "Copyright  Section",
    items: [{ item: "CopyrightSection" }],
  },
  {
    name: "Spa Experience Section",
    items: [{ item: "SpaExperienceSection" }],
  },
  {
    name: "Sales Benefits Section",
    items: [{ item: "SalesBenefitsSection" }],
  }
);
