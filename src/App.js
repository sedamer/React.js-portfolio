import "./App.css";

import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Hobies from "./components/Hobies/hobies";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hobies />
        <Footer />
      </main>
    </>
  );
}

export default App;
