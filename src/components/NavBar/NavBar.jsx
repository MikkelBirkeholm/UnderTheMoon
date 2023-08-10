import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>Hjem</li>
        <li className={styles.navbarItem}>Koncepter</li>
        <li className={styles.navbarItem}>UTM Loyalty</li>
        <li className={styles.navbarItem}>Om</li>
        <li className={styles.navbarItem}>Kontakt</li>
      </ul>
    </nav>
  )
}

export default NavBar
