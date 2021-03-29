import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  )
}
