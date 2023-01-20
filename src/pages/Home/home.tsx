import CoffeImgHome from "../../assets/imagem-home.svg";
import {
  CoffeContainer,
  DescriptionContainer,
  Feature,
  HomeContainer,
  ImgContainer,
} from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CardCoffe } from "../../components/Home/CardCoffeList/CardCoffe";
import { coffeList, CoffeListType } from "../../fixtures/coffe-list";

const renderCards = (coffes: CoffeListType[]) => {
  return coffes.map((coffe, i) => {
    return (
      <CardCoffe
        img={coffe.img}
        title={coffe.title}
        description={coffe.description}
        value={coffe.value}
        tags={coffe.tags}
        key={coffe.img}
      />
    );
  });
};

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <DescriptionContainer>
          <div className="titleAndSubtitle">
            <div className="title">
              Encontre o café perfeito para qualquer hora do dia
            </div>

            <div className="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </div>
          </div>

          <div className="features">
            <span>
              <Feature colorProps="yellow-dark">
                <ShoppingCart weight="fill" className="brand" />
                Compra simples e segura
              </Feature>
              <Feature colorProps="yellow">
                <Timer weight="fill" className="brand" />
                Entrega rápida e rastreada
              </Feature>
            </span>
            <span>
              <Feature colorProps="base-text">
                <Package weight="fill" className="brand" />
                Embalagem mantém o café intacto
              </Feature>
              <Feature colorProps="purple">
                <Coffee weight="fill" className="brand" />O café chega
                fresquinho até você
              </Feature>
            </span>
          </div>
        </DescriptionContainer>

        <ImgContainer>
          <img src={CoffeImgHome} alt="imagem-home" />
        </ImgContainer>
      </HomeContainer>
      <CoffeContainer>
        <h1>Nossos cafés</h1>
        <section className="coffesList">{renderCards(coffeList)}</section>
      </CoffeContainer>
    </>
  );
};
