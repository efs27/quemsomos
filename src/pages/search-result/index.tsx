import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiProductsByName } from "./service";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import 'react-toastify/dist/ReactToastify.css';

export default function SearchProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const params = useParams();
  const nameProduct = params?.product;

  async function getProductsByName() {
    setIsLoadingProducts(true);
    try {
      const response = await getApiProductsByName(nameProduct!);
      setProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar produtos por nome", Alerta);
    }
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    getProductsByName();
  }, []);

  return (
    <UserTemplate>
      <h1>Resultado da busca</h1>
      {isLoadingProducts && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {products.map((products) => (
          <CardProduct
            id={products._id}
            key={products._id}
            img={products.url1}
            manufacturer={products.manufacturer}
            name={products.name}
            price={products.price}
          />
        ))}
      </div>
      <p>Total: {products.length} item(s)</p>
    </UserTemplate>
  );
}
