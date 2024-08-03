import { useNavigate } from "react-router-dom";
import { CardProducts } from "./types";

export default function CardProduct(props: CardProducts) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/products/details/${props.id}`)}
      className="shadow-md mx-2 w-[260px] rounded-md p-10 flex flex-col justify-center items-center m-2"
    >
      <h1 className="text-center">{props.name}</h1>
      <img src={props.img} className="w-[100px] mt-2"></img>
      <p className="w-full mt-3">{props.manufacturer}</p>
      <p className="w-full text-[25px]">R$ {props.price}</p>
    </button>
  );
}
