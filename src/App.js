import "./App.css";
import Header from "./components/Header";
import { Routes , Route  } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes>
            <Route  path="/" exact element={ <Home/> } />
            <Route path="/cart" exact element={ <Cart/> } />
            <Route path="*" element={ <NoMatch/> } />
        </Routes>
      </div>
      
  );
}

export default App;
