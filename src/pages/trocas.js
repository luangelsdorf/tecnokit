import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Exchanges() {
  return (
    <>
      <Head>
        <title>Trocas e Devoluções | TecnoKit</title>
      </Head>

      <main>
        <h1 className="text-center">Trocas e Devoluções</h1>
        <br />
        <Container>
          <div>
            <p>
              Na TecnoKit, valorizamos a satisfação dos nossos clientes e nos esforçamos para oferecer produtos de alta qualidade. No entanto, entendemos
              que pode haver situações em que você deseje trocar um produto ou solicitar um reembolso. Para garantir uma experiência tranquila e justa, temos
              uma política de troca e devoluções estabelecida, alinhada com as diretrizes do Código de Defesa do Consumidor.
            </p>
            <p>Trocas em Lojas Físicas:</p>
            <p>
              Se você não estiver satisfeito com o produto recebido, poderá realizar a troca em uma de nossas lojas físicas ou showroom. Nesses casos, você
              poderá escolher um produto do mesmo valor. Certifique-se de trazer o produto em sua embalagem original, com todos os acessórios e a nota fiscal.
            </p>
            <p>Trocas via Envio Postal:</p>
            <p>
              Caso não possa visitar uma de nossas lojas físicas, oferecemos a opção de troca via envio postal. Para iniciar o processo de troca, entre em contato
              conosco através do e-mail vendastecnokit@gmail.com ou pelo telefone (21) 967287299. Informe-nos sobre o motivo da troca e providenciaremos
              as instruções necessárias.
            </p>
            <p>
              Ao realizar a troca por envio postal, você será responsável pelos custos de envio do produto de volta para nós. Recomendamos que envie o produto
              pelos Correios através do serviço "Frete a Cobrar". Assim, você pagará pelo frete somente na retirada do produto em nossa loja. Após recebermos o
              produto devolvido, providenciaremos o envio do novo produto para o seu domicílio.
            </p>
            <p>Devolução do Dinheiro:</p>
            <p>
              Além das opções de troca, também oferecemos a possibilidade de reembolso. Se o produto adquirido não atender às suas expectativas, você
              poderá solicitar o reembolso do valor pago. Para isso, você tem até 7 dias corridos, a contar da data da compra, para fazer a solicitação de
              devolução do dinheiro.
            </p>
            <p>
              Para solicitar o reembolso, entre em contato conosco pelo e-mail vendastecnokit@gmail.com ou pelo telefone (21) 967287299. Faremos o possível
              para atender à sua solicitação de forma rápida e eficiente.
            </p>
            <p>
              É importante ressaltar que todos os produtos devolvidos devem estar em perfeito estado, na embalagem original, com todos os acessórios e
              acompanhados da nota fiscal. Produtos danificados pelo cliente não serão elegíveis para troca ou reembolso.
            </p>
            <p>
              Estamos empenhados em garantir a sua satisfação e em cumprir com as normas legais do comércio eletrônico. Caso tenha alguma dúvida ou
              precise de mais informações, não hesite em entrar em contato com nossa equipe de atendimento ao cliente.
            </p>
            <p>Equipe TecnoKit</p>
          </div>
        </Container>
      </main>
    </>
  )
}