import Product from "@models/product.model";
import serverAxiosInstance from "config/serverAxiosInstance";


const getProduct = async (product_slug: string): Promise<Product[]> => {
    const response = await serverAxiosInstance.get(`/products/get/by-slug/${product_slug}`);
    return response.data;
  };

export default { getProduct };
