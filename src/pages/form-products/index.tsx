import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

type FormProduct = {
  name: string;
  manufacturer: string;
  category: string;
  price: number;
  url1: string;
  url2: string;
};

const SchemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  manufacturer: Yup.string().required("O campo é obrigatório"),
  category: Yup.string().required("O campo é obrigatório"),
  price: Yup.number().required("O campo é obrigatório"),
  url1: Yup.string().required("O campo é obrigatório"),
  url2: Yup.string().required("O campo é obrigatório"),
});

export default function FormProduct() {
  const [value, setValue] = useState("");
  const {
    register,
    formState: { errors },
  } = useForm<FormProduct>({ resolver: yupResolver(SchemaValidation) });

  return (
    <AdminTemplate>
      <form>
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
              <option disabled>Selecione uma opção</option>
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
          <button className="bg-primary text-white px-8 py-2 rounded-lg">
            Sim
          </button>
          <button
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => alert("false")}
          >
            Não
          </button>
        </div>
      </form>
    </AdminTemplate>
  );
}
