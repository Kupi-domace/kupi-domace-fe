import Shop from "@models/shop.model";
import serverAxiosInstance from "config/serverAxiosInstance";


export const getShopList = async (): Promise<Shop[]> => {
    const response = await serverAxiosInstance.get("/shops")
    return response.data
}

const getSingleShop = async (shop_id: string): Promise<Shop[]> => {
    const response = await serverAxiosInstance.get(`/shops/${shop_id}`);
    return response.data;
  };

export default { getShopList, getSingleShop}