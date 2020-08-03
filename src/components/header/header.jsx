import Link from 'next/link';
import styles from './header.module.scss';
import DrawerMenu from '../drawerMenu/drawerMenu';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';

const HeaderListItems = ({ navLinks = [] }) => {
  const router = useRouter();
  return navLinks.map((v) => {
    const href = v === 'index' ? '/' : `/${v}`;
    console.log(router.pathname, href);
    return (
      <li key={v}>
        <Link href={href} scroll={false}>
          <a
            className={`${
              router.pathname === href ? styles['selected-page'] : ''
            }`}
          >
            {v === 'index' ? 'home' : v}
          </a>
        </Link>
      </li>
    );
  });
};

const Header = ({ navLinks = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <header className={styles['main-header']} role="banner">
        <div className={styles['inner-container']}>
          <div className={styles.logo}>
            <img src="/imgs/bgbl-logo-white-letter.png" alt="logo" />
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
        </div>
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
