import Link from 'next/link';
import styles from './header.module.scss';
import DrawerMenu from '../drawerMenu/drawerMenu';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { IoIosMenu } from 'react-icons/io';

const HeaderListItems = ({ navLinks = [] }) =>
  navLinks.map((v) => (
    <li key={v}>
      <Link href={v === 'index' ? '/' : `/${v}`}>
        <a>{v === 'index' ? 'home' : v}</a>
      </Link>
    </li>
  ));

const Header = ({ navLinks = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <header className={styles['main-header']} role="banner">
        <div className={styles.logo}>
          <img src="https://www.pandaipsum.com/img/panda.png" alt="logo" />
        </div>
        <nav className={styles['nav-container']} role="navigation">
          <button
            className={styles['toggle-menu']}
            ref={btnRef}
            onClick={onOpen}
          >
            <IoIosMenu />
            <div className={styles['sub-text']}>menu</div>
          </button>
          <ol className={styles.list}>
            <HeaderListItems navLinks={navLinks} />
          </ol>
        </nav>
      </header>
      <DrawerMenu btnRef={btnRef} isOpen={isOpen} onClose={onClose}>
        <ol className={styles['drawer-list']}>
          <HeaderListItems navLinks={navLinks} />
        </ol>
      </DrawerMenu>
    </>
  );
};

export default Header;
