import Link from 'next/link'
import React from 'react'
import styles from 'styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <Link href='/'><h1 className={styles.logo}>LOGO</h1></Link>
            <ul className={styles.ul1}>
            <Link href='/posts'><li className={styles.li}>Post</li></Link>
            <Link href='/about'><li className={styles.li}>About</li></Link>
            <Link href='/faq'><li className={styles.li}>FAQ</li></Link>
            <Link href='/users'><li className={styles.li}>Users</li></Link>
            </ul>
            <ul className={styles.ul2}>
                <Link href='/users/login'><li className={styles.li}>Login</li></Link>
                <Link href='/users/join'><li className={styles.li}>Regiter</li></Link>
            </ul>
        </div>  
    </div>
  )
}

export default Nav