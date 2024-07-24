import UserTemplate from "../../templates/user-template";

export default function QuemSomos() {
  return (
    <UserTemplate>
      <div className="quem-somos p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">Quem Somos</h1>

        <section className="nossa-historia mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nossa História</h2>
          <p className="text-lg">
            A <strong>Unybay</strong> foi fundada em 2020 com o objetivo de
            revolucionar o mercado de Educação através de inovações tecnológicas
            e um foco incansável na experiência do usuário. Desde o início, nos
            dedicamos a entender profundamente as necessidades dos nossos
            clientes e a oferecer soluções que realmente fazem a diferença em
            suas vidas.
          </p>
        </section>

        <section className="nossa-missao mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nossa Missão</h2>
          <p className="text-lg">
            Nossa missão é proporcionar produtos e serviços de alta qualidade
            que não apenas atendam, mas superem as expectativas dos nossos
            clientes. Acreditamos que a tecnologia deve ser uma ferramenta para
            melhorar a vida das pessoas, tornando-a mais fácil, eficiente e
            agradável.
          </p>
        </section>

        <section className="nossos-valores mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nossos Valores</h2>
          <ul className="list-disc pl-5 text-lg">
            <li>
              <strong>Inovação:</strong> Estamos sempre em busca de novas ideias
              e tecnologias que possam melhorar nossos produtos e serviços.
            </li>
            <li>
              <strong>Qualidade:</strong> Compromisso com a excelência em tudo o
              que fazemos.
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Cuidar do meio ambiente é uma
              prioridade em nossos processos.
            </li>
            <li>
              <strong>Ética:</strong> Agimos com integridade e transparência em
              todas as nossas ações.
            </li>
            <li>
              <strong>Cliente em Primeiro Lugar:</strong> As necessidades e
              satisfação dos nossos clientes são a nossa principal motivação.
            </li>
          </ul>
        </section>

        <section className="nossa-equipe mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nossa Equipe</h2>
          <p className="text-lg">
            Nosso time é composto por profissionais talentosos e dedicados, que
            são apaixonados pelo que fazem. Contamos com uma equipe
            diversificada, com especialistas em diferentes áreas, desde o
            desenvolvimento de software até o atendimento ao cliente, todos
            comprometidos em oferecer a melhor experiência possível.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Fundadores</h3>
          <p className="text-lg mt-2">
            <strong>João Silva</strong> - CEO
          </p>
          <p className="text-lg mb-4">
            João tem mais de 15 anos de experiência na indústria de tecnologia,
            com um histórico de sucesso em várias startups.
          </p>

          <p className="text-lg mt-2">
            <strong>Maria Oliveira</strong> - CTO
          </p>
          <p className="text-lg mb-4">
            Maria é uma especialista em desenvolvimento de software com um Ph.D.
            em Ciência da Computação e inúmeras publicações em conferências
            internacionais.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Nossos Colaboradores</h3>
          <ul className="list-disc pl-5 text-lg">
            <li>
              <strong>Ana Pereira</strong> - Gerente de Marketing
            </li>
            <li>
              <strong>Carlos Souza</strong> - Designer de UX/UI
            </li>
            <li>
              <strong>Fernanda Lima</strong> - Desenvolvedora Front-End
            </li>
            <li>
              <strong>Rafael Santos</strong> - Desenvolvedor Back-End
            </li>
          </ul>
        </section>

        <section className="nossa-localizacao mb-8">
          <h2 className="text-3xl font-semibold mb-4">Nossa Localização</h2>
          <p className="text-lg mb-4">
            Estamos localizados no coração de São Paulo, com fácil acesso a
            todos os principais pontos da cidade. Venha nos visitar:
          </p>
          <address className="text-lg not-italic">
            Avenida dos Exemplos, 1234
            <br />
            Bairro Imaginário, São Paulo, SP
          </address>
        </section>

        <section className="contato mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contato</h2>
          <p className="text-lg mb-4">
            Quer saber mais sobre nós? Entre em contato:
          </p>
          <p className="text-lg">
            Email:{" "}
            <a
              href="mailto:contato@nomedaempresa.com"
              className="text-blue-600 underline"
            >
              contato@unybay.com
            </a>
          </p>
          <p className="text-lg">
            Telefone:{" "}
            <a href="tel:+551112345678" className="text-blue-600 underline">
              (11) 1234-5678
            </a>
          </p>
        </section>
      </div>
    </UserTemplate>
  );
}
