import api from "../../pages/services/api";

export async function getApiMyProduct(token: string) {
  return await api.get("/my-products", {
    headers: { Authorization: token },
  });
}
