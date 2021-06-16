import React from "react"
import styles from "./Shop.module.css"
import ShopItem from "./ShopItem"

const Shop = ({ items }) => {
    return (
        <div className={styles.root}>
            {items.map((item) => <ShopItem key={item.id}{...item} />)}
        </div>
    )
}

export default Shop