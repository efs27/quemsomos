import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";
import { removeApiProduct } from "./services";
import { CardProps } from "./types";
import { toast } from "react-toastify";
import { Alerta } from "../../alerta";
import "react-toastify/dist/ReactToastify.css";
import { getApiMyProduct } from "../../pages/user-products/services";
import { useAuthSessionStore } from "../../hooks/use-auth-session";

const customStyles = {
  overlay: {
    background: "rgba(138, 173, 184, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CardProductAdimin(props: CardProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuthSessionStore();

  async function removProduct() {
    try {
      await removeApiProduct(props.id, token);
      const response = await getApiMyProduct(token);
      props.setMyProducts(response.data);
      setIsOpen(false);
      toast.info("Produto removido com sucesso", Alerta);
    } catch (error) {
      toast.error("Erro ao remover produto", Alerta);
    }
  }

  return (
    <div>
      <button className="shadow-md rounded-md p-6 flex flex-col justify-center items-center m-2">
        <h1 className="text-center">{props.name}</h1>
        <img src={props.img} className="w-[100px] mt-2"></img>
        <div className="flex flex-row items-end">
          <div>
            <p className="w-full mt-3">{props.manufacturer}</p>
            <p className="w-full text-[25px]">R$ {props.price}</p>
          </div>
          <div className="ml-2 flex flex-col gap-1">
            <button onClick={() => navigate(`/form-product-edit/${props.id}`)}>
              <AiOutlineEdit size={25} />
            </button>
            <button onClick={() => setIsOpen(true)}>
              <AiOutlineDelete size={25} />
            </button>
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h1 className="text-[20px] font-bold mb-2">Excluir Produto</h1>
        <p>Deseja realmente excluir esse produto?</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => removProduct()}
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Sim
          </button>
          <button
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Não
          </button>
        </div>
      </Modal>
    </div>
  );
}
