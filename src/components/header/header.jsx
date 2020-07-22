import styles from './header.module.scss';

const Header = () => (
  <header className={styles['main-header']} role="banner">
    <div class={styles.logo}>
      <img src="https://www.pandaipsum.com/img/panda.png" alt="logo" />
    </div>
    <nav class={styles['nav-container']} role="navigation">
      <ol class={styles.list}>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;
