import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Shop = () => {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
        setItems(data)
        console.log(data)
    }

    const handleAdd = (e) => {
        let itemId = e.target.parentNode.dataset.id
        let newCart = cart
        newCart.push(items[itemId - 1])
        setCart(newCart)
        console.log(newCart)
    }

    return (
        <div>
            <div className="shopContainer">
                <div className="shopItems">
                    <h2>Products</h2>
                    <div className="shopItemList">
                        {items.map(item => {
                            return (
                                <div className="itemCard" key={item.id} data-id={item.id}>
                                    <Link to={`/shop/${item.id}`}>
                                        <h3>{item.title}</h3>
                                        <div className="itemImg">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </Link>
                                    <button onClick={handleAdd}>Add to Cart</button>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="shopCart">
                    <h2>Cart</h2>
                    <div>
                        {cart.map(item => {
                            return (
                                <div>
                                    <h3>{item.title}</h3>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shop