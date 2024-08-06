import { LuGamepad2 } from "react-icons/lu";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import carousel_1 from "../../assets/carousel_1.png";
import carousel_2 from "../../assets/carousel_2.png";
import carousel_3 from "../../assets/carousel_3.png";
import { Link, useNavigate } from "react-router-dom";
import { getApiRecentsProducts, getApiRecommendedsProducts } from "./service";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import "react-toastify/dist/ReactToastify.css";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

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

export default function Home() {
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const [recentsProducts, setRecentsProducts] = useState<Product[]>([]);
  const [recommendedsProducts, setRecommendedsProducts] = useState<Product[]>(
    []
  );

  const [isLoadingRecentsProducts, setIsLoadingRecentsProducts] =
    useState(false);
  const [isLoadingRecommendedsProducts, setIsLoadingRecommendedsProducts] =
    useState(false);
  const [inputSearch, setInputSearch] = useState("");

  async function getRecentsProducts() {
    setIsLoadingRecentsProducts(true);
    try {
      const response = await getApiRecentsProducts();
      setRecentsProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar produtos recentes", Alerta);
    }
    setIsLoadingRecentsProducts(false);
  }

  async function getRecommendedsProducts() {
    setIsLoadingRecommendedsProducts(true);
    try {
      const response = await getApiRecommendedsProducts();
      setRecommendedsProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar produtos recomendados", Alerta);
    }
    setIsLoadingRecommendedsProducts(false);
  }

  useEffect(() => {
    getRecentsProducts();
  }, []);

  useEffect(() => {
    getRecommendedsProducts();
  }, []);

  return (
    <UserTemplate>
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
          <input
            className="flex-1 h-full p-3"
            placeholder="Pesquisar por..."
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <button
            onClick={() => navigate(`/products/search/${inputSearch}`)}
            className="px-4"
          >
            <IoSearch size={30} />
          </button>
        </div>
      </div>

      <h2 className="mt-[50px]">Itens recentes</h2>
      {isLoadingRecentsProducts && <ListLoading />}
      <div className="flex flex-wrap">
        {recentsProducts.map((product) => (
          <CardProduct
            id={product._id}
            key={product._id}
            name={product.name}
            img={product.url1}
            manufacturer={product.manufacturer}
            price={product.price}
          />
        ))}
      </div>
      <Link to="/all-recents-products">
        <p className="mt-4">Ver todos os produtos recentes</p>
      </Link>
      <div className="bg-primary p-10 rounded-lg mt-[50px]">
        <h2 className="text-white tex-[20px] mb-5">Categorias</h2>
        <div className="flex justify-between px-[10%]">
          {itensCategory.map((category, index) => (
            <button
              key={index}
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
      {isLoadingRecommendedsProducts && <ListLoading />}
      <div className="flex flex-wrap">
        {recommendedsProducts.map((product) => (
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
      <Link to="/all-products">
        <p className="mt-4">Ver todos os produtos</p>
      </Link>
    </UserTemplate>
  );
}
