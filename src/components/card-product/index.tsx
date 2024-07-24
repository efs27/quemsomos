import { useNavigate } from "react-router-dom";
import img_produto from "../../assets/product.png";

export default function CardProduct() {
  const navigate = useNavigate();

  return (
    <button onClick={()=>navigate("/products/details")} className="shadow-md rounded-md p-10 flex flex-col justify-center items-center m-2">
      <h1 className="text-center">Nome do Produto</h1>
      <img src={img_produto} className="w-[100px] mt-2"></img>
      <p className="w-full mt-3">Amazon</p>
      <p className="w-full text-[25px]">R$ 799,00</p>
    </button>
  );
}
