import { HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export const Header = () => {
  const { qty } = useContext(ShoppingCartContext);
  console.log(qty);

  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="logo" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto alegre, RS
        </span>

        <NavLink to="/">
          <ShoppingCart size={22} weight="fill" />
          {qty > 0 && <span className="badge">{qty}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
