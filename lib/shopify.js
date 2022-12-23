import { decode } from "@/helper/Encipherment";
async function ShopifyData(query) {
  const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_API_TOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not found");
  }
}
export async function getShopifyProducts(productID) {
  const query = `{
    product(id: "gid://shopify/Product/${productID}") {
      id
      title
      handle
      description
      productType
      availableForSale
      onlineStoreUrl
      seo {
        description
        title
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      descriptionHtml
      media(first: 25) {
        edges {
          node {
            mediaContentType
            previewImage {
              url
              altText
              width
              height
            }
            ... on Video {
              sources {
                url
                mimeType
                format
                width
                height
              }
              previewImage {
                url
                width
              }
            }
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            title
            id
            currentlyNotInStock
            availableForSale
            color: metafield(namespace: "color", key: "swatch") {
              value
              id
              type
            }
            varient: metafield(namespace: "color", key: "image-key") {
              value
              id
              type
            }
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const allProducts = response.data ? response.data : [];

  return response.data ? response.data : [];
}
export async function productCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${`gid://shopify/ProductVariant/${
          (await decode(id)).id
        }`}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;
  const response = await ShopifyData(query);
  return response.data ? response.data : [];
}
