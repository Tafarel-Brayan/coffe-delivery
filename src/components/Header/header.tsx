import { HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export const Header = () => {
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
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
