import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";
import { Coffe, TagsType } from "../../../fixtures/coffe-list";
import { CardCoffeContainer } from "./style";

const renderTags = (id: string, tags: TagsType[]) => {
  return tags.map((tag, i) => {
    return <li key={`list-tags-${id}-${i}`}>{tag}</li>;
  });
};

export const CardCoffe = ({
  id,
  img,
  title,
  description,
  value,
  tags,
}: Coffe) => {
  const { addCoffe } = useContext(ShoppingCartContext);

  const [qty, setQty] = useState(0);
  const handleQty = (action: string) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty > 0) {
        setQty(qty - 1);
      }
    }
  };

  const onChangeQty = (value: number) => {
    if (!isNaN(value)) {
      setQty(value);
    }
  };

  return (
    <CardCoffeContainer>
      <span className="image">
        <img src={`./src/assets/coffes/${img}`} alt={img} />
      </span>
      <span className="tags">
        <ul>{renderTags(id, tags)}</ul>
      </span>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      <div className="buy">
        <span className="value">{value}</span>
        <span className="buttons">
          <span className="countdown">
            <span className="minus" onClick={() => handleQty("remove")}>
              -
            </span>
            <input
              type="number"
              // defaultValue={qty}
              value={qty}
              onChange={(e) => onChangeQty(parseInt(e.currentTarget.value))}
            />
            <span className="plus" onClick={() => handleQty("add")}>
              +
            </span>
          </span>
          <button type="button">
            <ShoppingCart weight="fill" />
          </button>
        </span>
      </div>
    </CardCoffeContainer>
  );
};
