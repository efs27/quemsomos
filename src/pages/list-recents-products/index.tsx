//import CardProduct from "../../components/card-product";
import { useEffect, useState } from "react";
import UserTemplate from "../../templates/user-template";
import { getApiAllProductsRecents } from "./service";
import { Product } from "./types";
import CardProduct from "../../components/card-product";
import ListLoading from "../../components/list-loading";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import 'react-toastify/dist/ReactToastify.css';

export default function ListRecentsProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingRecents, setIsLoadingRecents] = useState(false);

  async function getAllRecentsProducts() {
    setIsLoadingRecents(true);
    try {
      const response = await getApiAllProductsRecents();
      setAllProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar todos os produtos recentes", Alerta);
    }
    setIsLoadingRecents(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, []);

  return (
    <UserTemplate>
      <h1>Itens Recentes</h1>
      {isLoadingRecents && <ListLoading />}
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
