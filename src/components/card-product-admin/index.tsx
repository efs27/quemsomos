import { useNavigate } from "react-router-dom";
import img_produto from "../../assets/product.png";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";

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

export default function CardProductAdimin() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  {
    /*  onClick={() => navigate("/products/details")} */
  }
  return (
    <div>
      <button className="shadow-md rounded-md p-6 flex flex-col justify-center items-center m-2">
        <h1 className="text-center">Nome do Produto</h1>
        <img src={img_produto} className="w-[100px] mt-2"></img>
        <div className="flex flex-row items-end">
          <div>
            <p className="w-full mt-3">Amazon</p>
            <p className="w-full text-[25px]">R$ 799,00</p>
          </div>
          <div className="ml-2 flex flex-col gap-2">
            <button onClick={() => alert("clicou")}>
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
          <button className="bg-primary text-white px-8 py-2 rounded-lg">
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
