import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import carousel_1 from "../../assets/carousel_1.png";
import carousel_2 from "../../assets/carousel_2.png";
import carousel_3 from "../../assets/carousel_3.png";

export default function Details() {
  return (
    <UserTemplate>
      <h1>Página de Detalhes</h1>
      <p className="text-[30px]"></p>
      <div className="flex mt-10 gap-10 justify-center">
        <div className="W-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={carousel_1} height={75} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={carousel_2} height={75} />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={carousel_3} height={75} />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
        <div className="shadow-sm bg-white px-10 py-2">
          <p>Informações do vendedor</p>
          <p>Emerson Freitas da Silva</p>
          <p>Maringá Pr</p>
          <p>Email: emersonfreitassilva@hotmail.com</p>
          <p>(44) - 988283524</p>
        </div>
        <div className="shadow-sm mt-4 bg-white px-10 py-2">
          <p className="text-[30px]">R$ 799,00</p>
        </div>
      </div>
      <h3 className="mt-10 text-[20px]">Detalhes do produto!</h3>
      <div className="mt-3">
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem."
        </p>
        <p className="mt-10">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
      </div>
    </UserTemplate>
  );
}
