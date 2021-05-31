import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Shop = () => {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
        setItems(data)
        console.log(data)
    }

    return (
        <div>
            <h1>Shop Page</h1>
            {items.map(item => {
                return (
                    <Link to={`/shop/${item.id}`}>
                        <h2 key={item.id}>{item.title}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Shop