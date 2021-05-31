import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Shop from "./components/Shop"
import ItemDetail from "./components/ItemDetail"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
