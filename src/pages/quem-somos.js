import Head from "next/head";
import { Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Quem Somos | TecnoKit</title>
      </Head>

      <main>
        <h1 className="text-center">Quem Somos</h1>
        <br />
        <Container className="d-flex flex-center">
          <div>
            <p>PC Master</p>
            <p>Seja bem-vindo à PC Master, a sua loja de informática de confiança no coração do Rio de Janeiro!</p>
            <p>Estamos localizados na Avenida Rio Branco, 156, loja 208, stand 07, Centro, 20040003.</p>
            <p>Aqui na PC Master, somos apaixonados por tecnologia e dedicados a fornecer soluções de informática de alta qualidade para atender às necessidades de nossos clientes.</p>
            <p>Nossa jornada começou há 13 anos, quando percebemos a crescente importância da tecnologia em nossas vidas diárias. Inspirados pela paixão por computadores e dispositivos eletrônicos, decidimos fundar a PC Master com o objetivo de oferecer produtos e serviços excepcionais para todos os entusiastas de tecnologia, desde consumidores casuais até profissionais exigentes.</p>
            <p>Acreditamos que a tecnologia tem o poder de transformar e simplificar o modo como vivemos e trabalhamos. Por isso, nos especializamos em oferecer uma ampla gama de produtos, incluindo computadores, laptops, periféricos, componentes, acessórios e software de renomadas marcas do mercado. Nossos produtos são cuidadosamente selecionados para atender aos mais altos padrões de qualidade, desempenho e inovação, garantindo a satisfação dos nossos clientes.</p>
            <p>Há mais de 13 anos, estamos fornecendo produtos e serviços de informática com excelência e nos mantendo atualizados com as últimas tendências e avanços tecnológicos. Nossa equipe é formada por profissionais dedicados e experientes, que possuem amplo conhecimento no setor de informática. Estamos prontos para fornecer orientação especializada, recomendações personalizadas e suporte técnico para ajudá-lo a tomar decisões informadas e aproveitar ao máximo seus produtos.</p>
            <p>A equipe da PC Master é composta por especialistas em vendas, técnicos qualificados e profissionais do atendimento ao cliente, todos comprometidos em fornecer uma experiência única e satisfatória para cada cliente que nos visita. Nós nos esforçamos para oferecer um atendimento personalizado, entendendo as necessidades individuais de cada pessoa que nos procura.</p>
          </div>
        </Container>
      </main>
    </>
  )
}