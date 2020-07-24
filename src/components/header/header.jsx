import Link from 'next/link';
import styles from './header.module.scss';

const Header = ({ navLinks = [] }) => (
  <header className={styles['main-header']} role="banner">
    <div className={styles.logo}>
      <img src="https://www.pandaipsum.com/img/panda.png" alt="logo" />
    </div>
    <nav className={styles['nav-container']} role="navigation">
      <ol className={styles.list}>
        {navLinks.map((v) => (
          <li key={v}>
            <Link href={v === 'index' ? '/' : `/${v}`}>
              <a>{v === 'index' ? 'home' : v}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </header>
);

export default Header;
