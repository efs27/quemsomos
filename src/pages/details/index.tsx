import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { getApiDetailsProducts } from "./service";
import { useEffect, useState } from "react";
import { Product } from "./types";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import "react-toastify/dist/ReactToastify.css";
import { formatPrice } from "../../utils/format-price";

export default function Details() {
  const params = useParams();
  const id = params?.id;
  const [product, setProduct] = useState<Product>({} as Product);

  async function getDetailsProduct() {
    try {
      const response = await getApiDetailsProducts(id ?? "");
      setProduct(response.data);
    } catch (error) {
      toast.error("Erro ao buscar dados do produtos", Alerta);
    }
  }

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <UserTemplate>
      <h1>Página de Detalhes</h1>
      <p className="text-[30px]">{product.name}</p>
      <div className="flex mt-10 gap-10 justify-center">
        <div className="W-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={product.url1} height={75} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={product.url2} height={75} />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
        <div className="shadow-sm bg-white px-10 py-2">
          <p>Informações do vendedor</p>
          <p>Nome: {product.user?.name || "-"}</p>
          <p>
            Cidade: {product.user?.city} Estado: {product.user?.state}
          </p>
          <p>Email: {product.user?.email}</p>
          <p>Telefone: {product.user?.phone}</p>
        </div>
        <div className="shadow-sm mt-4 bg-white px-10 py-2">
          <p className="text-[30px]">{formatPrice(product.price)}</p>
        </div>
      </div>
      <h3 className="mt-10 text-[20px]">Detalhes do produto!</h3>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div>
    </UserTemplate>
  );
}
