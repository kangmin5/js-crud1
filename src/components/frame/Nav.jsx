import Link from 'next/link'
import React from 'react'
import styles from 'styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <Link href='/'><h1 className={styles.logo}>LOGO</h1></Link>
            <ul className={styles.ul1}>
                <Link href='/users'><li className={styles.li}>Users</li></Link>
                <Link href='/posts'><li className={styles.li}>Post</li></Link>
                <li className={styles.li}>About</li>
                <li className={styles.li}>FAQ</li>
            </ul>
            <ul className={styles.ul2}>
                <li className={styles.li}>Login</li>
                <li className={styles.li}>Regiter</li>
            </ul>
        </div>  
    </div>
  )
}

export default Nav