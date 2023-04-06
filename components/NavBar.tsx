import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.link}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/about">About us</Link>
        <Link href="/coins">Coins</Link>
      </div>
    </div>
  );
}

export default NavBar;
