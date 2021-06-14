import React from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <div className={styles.root}>
            <Link to="/shop">
                <button className={styles['white-btn']}>View Catalog</button>
            </Link>
            <a className={styles.github} href="https://github.com/dillonlui/shopping-cart">
                <FaGithub />
            </a>
        </div>

    )
}

export default Home