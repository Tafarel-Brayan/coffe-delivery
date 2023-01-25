import { HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

export const Header = () => {
  const { qty } = useContext(ShoppingCartContext);

  return (
    <HeaderContainer>
      <img src={logoCoffeDelivery} alt="logo" />

      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Manaus, AM
        </span>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {qty > 0 && <span className="badge">{qty}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
