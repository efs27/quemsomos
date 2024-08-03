import { AxiosResponse } from "axios";
import { Product } from "./types";
import api from "../services/api";

export async function getApiProductsByName(
  id: string
): Promise<AxiosResponse<Product[], any>> {
  return await api.get(`/products/${id}`);
}
