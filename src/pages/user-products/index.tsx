import { useNavigate } from "react-router-dom";
import CardProductAdimin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";

export default function UserProducts() {
  const navigate = useNavigate();
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
        {Array.from({ length: 14 }).map(() => (
          <CardProductAdimin />
        ))}
      </div>
      <p className="text-right">Total: 4 itens</p>
    </AdminTemplate>
  );
}
