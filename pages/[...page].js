import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import {
  BuilderComponent,
  builder,
  Builder,
  useIsPreviewing,
} from "@builder.io/react";
builder.init(process.env.NEXT_PUBLIC_BUILDER_KEY);
import dynamic from "next/dynamic";
export async function getStaticProps({ params }) {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();
  return {
    props: {
      page: page || null,
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
export default function Page({ page }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.description} />
      </Head>
      <BuilderComponent model="page" content={page} />
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
        name: "banner_image",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
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
        name: "brand_Logo_Section",
        type: "list",
        subFields: [
          {
            name: "logo",
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
  dynamic(() => import("@/components/Sales")),
  {
    name: "SaleSection",
    inputs: [
      {
        name: "sale_details",
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
        name: "header_menu",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "longText",
            required: true,
          },
          {
            name: "link",
            type: "longText",
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
  dynamic(() => import("@/components/Footer")),
  {
    name: "FooterSection",
    inputs: [
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
  dynamic(() => import("@/components/SkinConcern")),
  {
    name: "SkinConcernSection",
    inputs: [
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
        name: "description_3",
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
        name: "skin_image",
        type: "list",
        subFields: [
          {
            name: "skin_image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
            required: true,
          },
        ],
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
        name: "button_text",
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
  dynamic(() => import("@/components/BringingTheSpa")),
  {
    name: "SpaExperienceSection",
    inputs: [
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
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("@/components/SalesHelp")),
  {
    name: "SalesHelpSection",
    inputs: [
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
  dynamic(() => import("@/components/SalesBenefits")),
  {
    name: "SalesBenefitsSection",
    inputs: [
      {
        name: "product_image",
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
        name: "money_description",
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
        name: "product_image",
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
      {
        name: "sub_description",
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
        name: "text_on_button",
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
    inputs: [],
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
    name: "Sale Section",
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
    name: "Footer  Section",
    items: [{ item: "FooterSection" }],
  },
  {
    name: "Copyright  Section",
    items: [{ item: "CopyrightSection" }],
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
    name: "Spa Experience Section",
    items: [{ item: "SpaExperienceSection" }],
  },
  {
    name: "Sales Help Section",
    items: [{ item: "SalesHelpSection" }],
  },
  {
    name: "Sales Benefits Section",
    items: [{ item: "SalesBenefitsSection" }],
  },
  {
    name: "Introducing Sonic Smooth Section",
    items: [{ item: "IntroducingSonicSmoothSection" }],
  },
  {
    name: "Client Testimonials Section",
    items: [{ item: "ClientTestimonialsSection" }],
  }
);
