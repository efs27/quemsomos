import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { editApiProduct } from "./service";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { getApiDetailsProducts } from "../details/service";
import { Product } from "./type";

const SchemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  manufacturer: Yup.string().required("O campo é obrigatório"),
  category: Yup.string().required("O campo é obrigatório"),
  price: Yup.number().required("O campo é obrigatório"),
  url1: Yup.string().required("O campo é obrigatório"),
  url2: Yup.string().required("O campo é obrigatório"),
});

export default function FormProductEdit() {
  const params = useParams();
  const id = params?.id || "";
  const [value, setValue] = useState("");
  const { token } = useAuthSessionStore();
  const [product, setProduct] = useState({
    name: "",
    manufacturer: "",
    description: "",
    category: "",
    price: 0,
    url1: "",
    url2: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(SchemaValidation),
    defaultValues: product,
    values: product,
  });

  async function getProductById() {
    try {
      const response = await getApiDetailsProducts(id);
      const productResponse = response.data;
      setProduct({
        price: productResponse.price,
        category: productResponse.category,
        description: "",
        url1: productResponse.url1,
        url2: productResponse.url2,
        manufacturer: productResponse.manufacturer,
        name: productResponse.name,
      });
      setValue(productResponse.description);
    } catch (error) {
      toast.error("Erro ao buscar produto", Alerta);
    }
  }

  async function saveProduct(values: Product) {
    try {
      await editApiProduct({ ...values, description: value }, token, id);
      toast.info("Produto editado com sucesso", Alerta);
    } catch (error) {
      toast.error("Erro ao editar produto", Alerta);
    }
  }

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <AdminTemplate>
      <form onSubmit={handleSubmit(saveProduct)}>
        <h1 className="text-[25px] mb-4">Novo Produto</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("name")}
              placeholder="Nome do produto"
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register("manufacturer")}
              placeholder="Nome do fabricante"
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            />
            {errors.manufacturer && (
              <span className="text-red-600">
                {errors.manufacturer.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <select
              {...register("category")}
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            >
              <option disabled selected>
                Selecione uma opção
              </option>
              <option value={"Jogos"}>Jogos</option>
              <option value={"Roupas"}>Roupas</option>
              <option value={"Veiculos"}>Veículos</option>
            </select>
            {errors.category && (
              <span className="text-red-600">{errors.category.message}</span>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register("price")}
              placeholder="Preço"
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            />
            {errors.price && (
              <span className="text-red-600">{errors.price.message}</span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("url1")}
              placeholder="URL da imagem"
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            />
            {errors.url1 && (
              <span className="text-red-600">{errors.url1.message}</span>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register("url2")}
              placeholder="URL da imagem"
              className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            />
            {errors.url2 && (
              <span className="text-red-600">{errors.url2.message}</span>
            )}
          </div>
        </div>
        <ReactQuill
          style={{ height: 500, marginTop: 10, marginBottom: 100 }}
          theme="snow"
          value={value}
          onChange={setValue}
        />
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Salvar
          </button>
          <button
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => alert("false")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </AdminTemplate>
  );
}
