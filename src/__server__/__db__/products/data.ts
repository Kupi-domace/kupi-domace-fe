import dbProducts from "@data/db";
import { products as grocery2 } from "../grocery-2/data";
import { relatedProducts, frequentlyBoughtData } from "../related-products/data";

// all used products in the bazaar template
const productList = [
  ...grocery2,
  ...relatedProducts,
  ...frequentlyBoughtData,
  ...dbProducts,
];

// get unique products from prouct list
const uniqueProudcts = [...new Set(productList.map((item) => item.slug))].map((item) =>
  productList.find((it) => it.slug === item)
);

// get the all slugs
const slugs = uniqueProudcts.map((item) => ({ params: { slug: item.slug } }));

export { uniqueProudcts, slugs };
