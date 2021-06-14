import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Shop from "./components/Shop"
import ItemDetail from "./components/ItemDetail"
import Cart from "./components/Cart"
import ComingSoon from "./components/ComingSoon"
import seedItems from "./seedItems"

function App() {
  const [cartItems, setCartItems] = useState([])
  const addCartItem = (newItem) => {
    const alreadyInCart = cartItems.map((cItem) => cItem.id).includes(newItem.id)
    if (alreadyInCart) {
      changeQty(newItem.id, 1)
    } else {
      setCartItems([...cartItems, newItem])
    }
  }

  const changeQty = (id, delta) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
    )
  }
  const deleteCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }
  const findItem = (id) => { seedItems.find((item) => item.id === id) }
  const cartItemsQty = cartItems.reduce((acc, cur) => acc + cur.qty, 0)

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shopping-cart" component={Home} />
        <Route path="/shop" exact render={() => (
          <Shop items={seedItems} />
        )} />
        <Route path="/shop/:id" render={(routeProps) => (
          <ItemDetail
            item={findItem(routeProps.match.params.id)}
            addCartItem={addCartItem}
          />
        )} />
        <Route path="/cart" exact render={() => (
          <Cart
            items={cartItems}
            deleteCartItem={deleteCartItem}
            changeQty={changeQty}
          />
        )} />
        <Route path="/coming-soon" exact component={ComingSoon} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
