import { ShoppingCart } from "phosphor-react";
import { CoffeListType } from "../../../fixtures/coffe-list";
import { CardCoffeContainer } from "./style";

export const CardCoffe = ({
  img,
  title,
  description,
  value,
  tags,
}: CoffeListType) => {
  return (
    <CardCoffeContainer>
      <span className="image">
        <img src={`./src/assets/coffes/${img}`} alt={img} />
      </span>
      <span className="tags">
        <ul>
          <li>tradicional</li>
          <li>Com Leite</li>
        </ul>
      </span>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <div className="buy">
        <span className="value">{value}</span>
        <span className="buttons">
          <span className="countdown">
            <span className="minus">-</span>
            <input type="text" />
            <span className="plus">+</span>
          </span>
          <button type="button">
            <ShoppingCart weight="fill" />
          </button>
        </span>
      </div>
    </CardCoffeContainer>
  );
};
