import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";

import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <div>
        <Header />
        <Outlet />
      </div>
    </LayoutContainer>
  );
}
