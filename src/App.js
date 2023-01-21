import "./App.css";
import { Header } from "./Components/Header/Header";
import { MobileMenu } from "./Components/MobileMenu/MobileMenu";
import { Topo } from "./Components/Topo/Topo";
import { Sobre } from "./Components/Sobre/Sobre";
import { Projetos } from "./Components/Projetos/Projetos";
import { Tecnologias } from "./Components/Tecnologias/Tecnologias";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div id="home" className="App">
      <Header />
      <MobileMenu />
      <Topo />
      <Sobre />
      <Projetos />
      <Tecnologias />
      <Footer />
    </div>
  );
}

export default App;
