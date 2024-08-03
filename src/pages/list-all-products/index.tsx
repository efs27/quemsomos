//import CardProduct from "../../components/card-product";
import { useEffect, useState } from "react";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from "./service";
import { Product } from "./types";
import CardProduct from "../../components/card-product";
import ListLoading from "../../components/list-loading";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import 'react-toastify/dist/ReactToastify.css';

export default function ListAllProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingAll, setIsLoadingAll] = useState(false);

  async function getAllProducts() {
    setIsLoadingAll(true);
    try {
      const response = await getApiAllProducts();
      setAllProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar todos os produtos recentes", Alerta);
    }
    setIsLoadingAll(false);
  }

  async function getAllOrderProducts(typeOrder: "descending" | "ascending") {
    setAllProducts([]);
    setIsLoadingAll(true);
    try {
      const response = await getApiAllProductsOrdered(typeOrder);
      setAllProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar todos os produtos recentes", Alerta);
    }
    setIsLoadingAll(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserTemplate>
      <h1>Todos os produtos</h1>
      <div>
        <p>
          Ordenar por:{" "}
          <button
            className="text-primary"
            onClick={() => getAllOrderProducts("ascending")}
          >
            Menor preço
          </button>{" "}
          |{" "}
          <button
            className="text-primary"
            onClick={() => getAllOrderProducts("descending")}
          >
            Maior preço
          </button>
        </p>
      </div>
      {isLoadingAll && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {allProducts.map((product) => (
          <CardProduct
          id={product._id}
            key={product._id}
            img={product.url1}
            manufacturer={product.manufacturer}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </UserTemplate>
  );
}
