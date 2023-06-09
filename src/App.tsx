import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./components/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { PostContextProvider } from "./context/PostContextProvides"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <PostContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostContextProvider>
    </ThemeProvider>
  )
}

export default App
