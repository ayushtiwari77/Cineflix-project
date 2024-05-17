import "./App.css";
import { AllRoutes } from "./routes/AllRoutes.js";
import { Header, Footer } from "./components";
function App() {
  return (
    <div className="App">
      <Header></Header>

      <AllRoutes></AllRoutes>

      <Footer></Footer>
    </div>
  );
}

export default App;
