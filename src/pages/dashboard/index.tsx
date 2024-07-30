import { LuGamepad2 } from "react-icons/lu";
import CardProduct from "../../components/card-product";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import carousel_1 from "../../assets/carousel_1.png";
import carousel_2 from "../../assets/carousel_2.png";
import carousel_3 from "../../assets/carousel_3.png";
import { useNavigate } from "react-router-dom";
import AdminTemplate from "../../templates/admin-template";
import CardProductAdimin from "../../components/card-product-admin";
const itensCategory = [
  {
    id: 0,
    tittle: "Jogos",
    icon: <LuGamepad2 size={30} color="#555" />,
  },
  {
    id: 1,
    tittle: "Roupas",
    icon: <GiClothes size={30} color="#555" />,
  },
  {
    id: 2,
    tittle: "Veículos",
    icon: <AiFillCar size={30} color="#555" />,
  },
  {
    id: 3,
    tittle: "Ferramentas",
    icon: <FaTools size={30} color="#555" />,
  },
  {
    id: 4,
    tittle: "Comidas",
    icon: <IoFastFoodOutline size={30} color="#555" />,
  },
  {
    id: 5,
    tittle: "Presentes",
    icon: <AiOutlineGift size={30} color="#555" />,
  },
  {
    id: 6,
    tittle: "Outros",
    icon: <AiOutlineSync size={30} color="#555" />,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <AdminTemplate>
      <div className="max-w-[70%] self-center">
        <Carousel showThumbs={false}>
          <div>
            <img src={carousel_1} height={75} />
          </div>
          <div>
            <img src={carousel_2} height={75} />
          </div>
          <div>
            <img src={carousel_3} height={75} />
          </div>
        </Carousel>
        <div className="flex flex-row bg-gray-100 h-[45px] rounded-md border-2 items-center mt-10">
          <input className="flex-1 h-full p-3" placeholder="Pesquisar por..." />
          <button onClick={() => navigate("/products/search")} className="px-4">
            <IoSearch size={30} />
          </button>
        </div>
      </div>

      <h2 className="mt-[50px]">Itens recentes</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p className="mt-4">Ver mais</p>

      <div className="bg-primary p-10 rounded-lg mt-[50px]">
        <h2 className="text-white tex-[20px] mb-5">Categorias</h2>
        <div className="flex justify-between px-[10%]">
          {itensCategory.map((category) => (
            <button
              onClick={() => navigate("/products/search")}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-white w-[80px] h-[40px] rounded-full flex justify-center items-center">
                {category.icon}
              </div>
              <span className="text-white mt-2">{category.tittle}</span>
            </button>
          ))}
        </div>
      </div>
      <h2 className="mt-[50px]">Anúncios</h2>
      <div className="flex flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p className="mt-4">Ver mais</p>
    </AdminTemplate>
  );
}
