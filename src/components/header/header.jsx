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
            <a href={v === 'index' ? '/' : `/${v}`}>
              {v === 'index' ? 'home' : v}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  </header>
);

export default Header;
