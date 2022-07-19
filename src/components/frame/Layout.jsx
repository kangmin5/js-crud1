import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import styles from 'styles/layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Nav/>
                <main className={styles.main}>
                    {children}
                </main>
            <Footer />
        </div>
    )
}

export default Layout