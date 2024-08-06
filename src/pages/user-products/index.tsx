import { useNavigate } from "react-router-dom";
import CardProductAdimin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";
import { getApiMyProduct } from "./services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { Product } from "./types";

export default function UserProducts() {
  const navigate = useNavigate();
  const { token } = useAuthSessionStore();
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  async function getMyProducts() {
    try {
      const response = await getApiMyProduct(token);
      setMyProducts(response.data);
    } catch (error) {
      toast.error("Erro ao buscar produtos do usuário", Alerta);
    }
  }

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <AdminTemplate>
      <div className="flex justify-between items-center">
        <h1>Anúncios</h1>
        <button
          onClick={() => navigate("/form-product")}
          className="rounded-md bg-secundary   px-8 py-2 text-white"
        >
          Criar Anúncio
        </button>
      </div>
      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
        {myProducts.map((product) => (
          <CardProductAdimin
            key={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price}
            id={product._id}
            setMyProducts={setMyProducts}
          />
        ))}
      </div>
      <p className="text-right">Total: {myProducts.length}</p>
    </AdminTemplate>
  );
}
