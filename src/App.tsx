import "./App.css";
import { Background } from "./components/common/Background";
import { ScrollToTop } from "./components/common/ScrollToTop";
import PokemonGuide from "./components/PokemonGuide";

export default function App() {
  return (
    <>
      <Background />
      <PokemonGuide />
      <ScrollToTop />
    </>
  );
}
