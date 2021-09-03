import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AccountScreen from "./screen/AccountScreen";
import HomeScreen from "./screen/HomeScreen";
import ProductDetail from "./screen/ProductDetail";
import PromoScreen from "./screen/PromoScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <div style={{ height: 20 }}></div>

        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/akun" component={AccountScreen} />
          <Route path="/promo" component={PromoScreen} />
          <Route path="/produk-detail/:product_id" component={ProductDetail} />
          <Route>
            <h1>404 Not Found: Url yang kamu cari tidak ada</h1>
          </Route>
        </Switch>

        <div></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
