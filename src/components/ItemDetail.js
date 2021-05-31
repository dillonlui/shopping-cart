import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ItemDetail = () => {
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState([])

    const fetchItem = async () => {

    }

    return (
        <div>
            <h1>Item Page</h1>
        </div>
    )
}

export default ItemDetail