import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ShoppingCartProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
