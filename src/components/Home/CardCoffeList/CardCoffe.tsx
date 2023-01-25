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

export const CardCoffe = (coffe: Coffe) => {
  const { addItemCart } = useContext(ShoppingCartContext);
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

  const handleAddItemCart = async (coffe: Coffe, qty: number) => {
    const newCoffe = { ...coffe };
    newCoffe.qty = qty;

    addItemCart(newCoffe, qty);
  };

  return (
    <CardCoffeContainer>
      <span className="image">
        <img src={`./src/assets/coffes/${coffe.img}`} alt={coffe.img} />
      </span>
      <span className="tags">
        <ul>{renderTags(coffe.id, coffe.tags)}</ul>
      </span>
      <span className="title">{coffe.title}</span>
      <span className="description">{coffe.description}</span>
      <div className="buy">
        <span className="value">{coffe.value}</span>
        <span className="buttons">
          <span className="countdown">
            <span className="minus" onClick={() => handleQty("remove")}>
              -
            </span>
            <input
              type="number"
              value={qty}
              onChange={(e) => onChangeQty(parseInt(e.currentTarget.value))}
            />
            <span className="plus" onClick={() => handleQty("add")}>
              +
            </span>
          </span>
          <button type="button" onClick={() => handleAddItemCart(coffe, qty)}>
            <ShoppingCart weight="fill" />
          </button>
        </span>
      </div>
    </CardCoffeContainer>
  );
};
