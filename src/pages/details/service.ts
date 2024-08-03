import { AxiosResponse } from "axios";
import { Product } from "./types";
import api from "../services/api";

export async function getApiDetailsProducts(
  nameProduct: string
): Promise<AxiosResponse<Product, any>> {
  return await api.get(`/products/${nameProduct}`);
}
